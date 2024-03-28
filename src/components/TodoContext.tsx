import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type TodoProviderProps = {
  children: React.ReactNode;
};

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  isEditing: boolean;
}

interface TodoContextType {
  todos: Todo[];
  handleAddTodo: (text: string) => void;
  handleDeleteTodo: (id: string) => void;
  handleToggleTodo: (id: string) => void;
  handleClearCompletedTodo: () => void;
  handleActiveTab: (tab: string) => void;
  handleEditTodo: (id: string, newText?: string) => void;
  filteredTodos: Todo[];
  activeTab: string;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const initialTodos: Todo[] = (() => {
  try {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  } catch (error) {
    console.error("Error parsing todos from localStorage:", error);
    return [];
  }
})();

const TodoContext = createContext<TodoContextType | undefined>(undefined);

function TodoProvider({ children }: TodoProviderProps) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (todoText: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      text: todoText,
      completed: false,
      isEditing: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = (id: string) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleActiveTab = (tab: string) => {
    setActiveTab(tab);
  };

  const handleClearCompletedTodo = () => {
    setTodos((todos) => todos.filter((todo) => !todo.completed));
  };

  const handleEditTodo = (id: string, newText?: string) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id
          ? newText
            ? { ...todo, text: newText, isEditing: !todo.isEditing }
            : { ...todo, isEditing: !todo.isEditing }
          : todo
      )
    );
  };

  const filteredTodos =
    activeTab === "active"
      ? todos.filter((todo) => !todo.completed)
      : activeTab === "completed"
      ? todos.filter((todo) => todo.completed)
      : todos;

  const value = {
    todos,
    activeTab,
    filteredTodos,
    setTodos,
    handleAddTodo,
    handleDeleteTodo,
    handleToggleTodo,
    handleClearCompletedTodo,
    handleActiveTab,
    handleEditTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}
function useTodos() {
  const context = useContext(TodoContext);
  if (context === undefined)
    throw new Error("useTodo must be used within a TodoProvider");
  return context;
}
// eslint-disable-next-line react-refresh/only-export-components
export { TodoProvider, useTodos };
