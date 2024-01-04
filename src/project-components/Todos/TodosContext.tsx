import { createContext, useContext, useState, useEffect } from "react";
import { getTodos } from "./todoServices";
import { updateTodo, deleteTodo, addTodo } from "./todoServices";

type TodosState = {
  status: "idle" | "loading" | "success" | "failure";
  error: string;
  other: {
    message: string;
    success: boolean;
  } | null;
  todos: {
    id: string;
    title: string;
    description: string;
    completed: boolean;
  }[];
};

type TodosContext = {
  contextData: TodosState;
  contextOperations: {
    setTodoFinished: (id: string) => void;
    setTodoDeleted: (id: string) => void;
    setTodoAdded: (title: string, description: string) => void;
  };
};

export const TodosContext = createContext<TodosContext | undefined>(undefined);

type TodosCounterProviderProps = {
  children: React.ReactNode;
};

export const TodosContextProvider = ({
  children,
}: TodosCounterProviderProps) => {
  const [data, setData] = useState<TodosState>({
    status: "idle",
    error: "",
    other: null,
    todos: [],
  });
  useEffect(() => {
    getTodos().then((data) =>
      setData({
        status: "success",
        error: "",
        other: {
          message: data.message,
          success: data.success,
        },
        todos: data.data.todos.map(
          (todo: {
            _id: string;
            title: string;
            description: string;
            completed: boolean;
          }) => {
            return {
              id: todo._id,
              title: todo.title,
              description: todo.description,
              completed: todo.completed,
            };
          }
        ),
      })
    );
  }, []);

  // set todo finished
  const setTodoFinished = (id: string) => {
    updateTodo(id, { completed: true }).then(() =>
      setData({
        ...data,
        todos: data.todos.map((todo) => {
          if (todo.id == id) {
            return {
              ...todo,
              completed: true,
            };
          }
          return todo;
        }),
      })
    );
  };

  // delete todo
  const setTodoDeleted = (id: string) => {
    deleteTodo(id).then(() => {
      setData({ ...data, todos: data.todos.filter((todo) => todo.id != id) });
    });
  };
  // add todo
  const setTodoAdded = (title: string, description: string) => {
    addTodo({ title, description }).then((newData) => {
      const newTodo = {
        id: newData.data.todo._id,
        completed: newData.data.todo.completed,
        title: newData.data.todo.title,
        description: newData.data.todo.description,
      };

      setData({ ...data, todos: [...data.todos, newTodo] });
    });
  };
  return (
    <TodosContext.Provider
      value={{
        contextData: data,
        contextOperations: { setTodoFinished, setTodoDeleted, setTodoAdded },
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export const useTodosContext = () => {
  const todosContext = useContext(TodosContext);
  if (todosContext == undefined) {
    throw new Error();
  }
  return todosContext;
};
