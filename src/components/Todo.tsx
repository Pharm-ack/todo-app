import Stats from "./TodoStats";
import { useTodos } from "./TodoContext";
import TodoList from "./TodoList";
import AllStats from "./AllStats";
import { Reorder } from "framer-motion";

function Todo() {
  const { filteredTodos, setTodos } = useTodos();

  return (
    <>
      <main className="bg-[#fafafa] rounded-md mt-4 shadow-md dark:bg-veryDarkBlue">
        <Reorder.Group
          axis="y"
          values={filteredTodos}
          onReorder={setTodos}
          className="divide-y divide-[#d2d3db] dark:divide-y dark:divide-[#4d5066]"
        >
          {filteredTodos.map((item) => (
            <Reorder.Item
              key={item.id}
              value={item}
              className="text-[#484b6a] font-jose dark:text-[#cacde8]"
            >
              <TodoList item={item} />
            </Reorder.Item>
          ))}

          <Stats />
        </Reorder.Group>
      </main>
      <AllStats />
    </>
  );
}

export default Todo;
