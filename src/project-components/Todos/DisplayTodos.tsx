import { Todo } from "./Todo";
import { useTodosContext } from "@/project-components/Todos/TodosContext";

type DisplayTodosProps = {
  filter: "all" | "completed" | "pending";
};
export const DisplayTodos = ({ filter }: DisplayTodosProps) => {
  const todosContext = useTodosContext();
  const { contextData: data } = todosContext;

  const pendingTodos = data.todos
    .filter((todo) => todo.completed === false)
    .map((todo) => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          description={todo.description}
          completed={todo.completed}
        />
      );
    });

  const completedTodos = data.todos
    .filter((todo) => todo.completed === true)
    .map((todo) => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          description={todo.description}
          completed={todo.completed}
        />
      );
    });

  const allTodos = data.todos.map((todo) => {
    return (
      <Todo
        key={todo.id}
        id={todo.id}
        title={todo.title}
        description={todo.description}
        completed={todo.completed}
      />
    );
  });

  const todosDisplayed =
    filter === "all"
      ? allTodos
      : filter === "completed"
      ? completedTodos
      : pendingTodos;
  return (
    <div className="flex flex-col gap-3">
      {data.status == "success" && data.other?.success && todosDisplayed}
    </div>
  );
};
