import { useTodos } from "./TodoContext";

function Stats() {
  const { filteredTodos, handleClearCompletedTodo } = useTodos();

  return (
    <div className="flex justify-between items-center px-4 py-2 dark:text-[#cacde8] lg:hidden">
      <span>{filteredTodos.length} items left</span>
      <button onClick={handleClearCompletedTodo}>Clear Completed</button>
    </div>
  );
}

export default Stats;
