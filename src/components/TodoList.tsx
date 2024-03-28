import { useState } from "react";
import { useTodos } from "./TodoContext";
import { FaEdit } from "react-icons/fa";
import { MdSaveAs } from "react-icons/md";
import { TiDelete } from "react-icons/ti";

interface Todo {
  text: string;
  id: string;
  completed: boolean;
  isEditing: boolean;
}

interface TodoListProps {
  item: Todo;
}

function TodoList({ item }: TodoListProps) {
  const { handleDeleteTodo, handleToggleTodo, handleEditTodo } = useTodos();

  const [editedTodo, setEditedTodo] = useState(item.text);

  const handleSaveTodo = () => {
    handleEditTodo(item.id, editedTodo);
  };
  return (
    <div className="flex justify-between items-center py-2 px-4">
      {item.isEditing ? (
        <div className="flex items-center">
          <input
            type="text"
            value={editedTodo}
            onChange={(e) => setEditedTodo(e.target.value)}
            className="outline-none px-1"
          />
        </div>
      ) : (
        <div className="flex items-center">
          <label className="custom-checbox relative mr-6 cursor-pointer">
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleToggleTodo(item.id)}
            />
            <span className="checkmark"></span>
          </label>
          <span
            className={`${
              item?.completed ? "line-through opacity-30" : ""
            } mt-1`}
            onClick={() => handleEditTodo(item.id)}
          >
            {item.text}
          </span>
        </div>
      )}
      <div className="space-x-3 flex items-center">
        {item.isEditing ? (
          <button onClick={handleSaveTodo}>
            <MdSaveAs />
          </button>
        ) : (
          <button onClick={() => handleEditTodo(item.id)}>
            <FaEdit />
          </button>
        )}
        <button
          onClick={() => handleDeleteTodo(item.id)}
          className="flex items-center"
        >
          <TiDelete className="size-6" />
        </button>
      </div>
    </div>
  );
}

export default TodoList;
