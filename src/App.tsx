import { useState } from "react";
import { Heading } from "./project-components/Heading/Heading";
import { AddTodo } from "./project-components/Todos/AddTodo";
import { DisplayTodos } from "./project-components/Todos/DisplayTodos";

export type Filter = "all" | "completed" | "pending";
function App() {
  const [filter, setFilter] = useState<Filter>("all");

  return (
    <div className="container my-10 flex flex-col gap-8">
      <Heading setFilter={setFilter} />
      <AddTodo />
      <DisplayTodos filter={filter} />
    </div>
  );
}

export default App;
