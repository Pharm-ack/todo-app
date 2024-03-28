import React, { useState } from "react";
import { useTodos } from "./TodoContext";

function TodoForm() {
  const { handleAddTodo } = useTodos();
  const [newTodo, setNewTodo] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!newTodo) return;

    handleAddTodo(newTodo);
    setNewTodo("");
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={newTodo}
        onChange={handleChange}
        placeholder="Create a new Todo"
        className="mt-8 w-full px-10 py-2 rounded-md dark:bg-veryDarkBlue outline-none relative"
      />
      <div className="size-5 border-2 border-[#d2d3db] dark:opacity-20 rounded-3xl absolute top-11 left-3"></div>
    </form>
  );
}

export default TodoForm;
