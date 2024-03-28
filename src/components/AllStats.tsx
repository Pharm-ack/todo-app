import { useTodos } from "./TodoContext";

function AllStats() {
  const {
    activeTab,
    handleActiveTab,
    handleClearCompletedTodo,
    filteredTodos,
  } = useTodos();
  return (
    <div className="px-4 py-2 text-center space-x-3 bg-[#fafafa] shadow-sm rounded-md mt-4 font-jose dark:bg-veryDarkBlue dark:text-[#cacde8] lg:flex lg:items-center lg:justify-between">
      <span className="hidden lg:flex">{filteredTodos.length} items left</span>
      <div className="hidden lg:block lg:space-x-3">
        <button
          onClick={() => handleActiveTab("all")}
          className={`${
            activeTab === "all" ? "font-semibold text-[#3a7bfd]" : ""
          } `}
        >
          All
        </button>
        <button
          onClick={() => handleActiveTab("active")}
          className={`${
            activeTab === "active" ? "font-semibold text-[#3a7bfd]" : ""
          } `}
        >
          Active
        </button>
        <button
          onClick={() => handleActiveTab("completed")}
          className={`${
            activeTab === "completed" ? "font-semibold text-[#3a7bfd]" : ""
          } `}
        >
          Completed
        </button>
      </div>
      <button
        onClick={() => handleActiveTab("all")}
        className={`${
          activeTab === "all" ? "font-semibold text-[#3a7bfd]" : ""
        } lg:hidden `}
      >
        All
      </button>
      <button
        onClick={() => handleActiveTab("active")}
        className={`${
          activeTab === "active" ? "font-semibold text-[#3a7bfd]" : ""
        } lg:hidden `}
      >
        Active
      </button>
      <button
        onClick={() => handleActiveTab("completed")}
        className={`${
          activeTab === "completed" ? "font-semibold text-[#3a7bfd]" : ""
        } lg:hidden`}
      >
        Completed
      </button>
      <button onClick={handleClearCompletedTodo} className="hidden lg:flex">
        Clear Completed
      </button>
    </div>
  );
}

export default AllStats;
