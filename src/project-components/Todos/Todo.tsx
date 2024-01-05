import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useWindowSize } from "@uidotdev/usehooks";
import { Button } from "@/components/ui/button";
import { useTodosContext } from "@/project-components/Todos/TodosContext";
import { ConfirmDeleteTodo } from "./ConfirmDeleteTodo";

type TodoProps = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
};

export const Todo = ({ id, title, description, completed }: TodoProps) => {
  const windowSize = useWindowSize() as { width: number; height: number };
  const todoStatus = completed ? "Completed" : "Pending";
  const {
    contextOperations: { setTodoFinished },
  } = useTodosContext();
  const smallScreenTodo = (
    <Card className="flex flex-col gap-5 p-4">
      <h2 className="break-all">{title}</h2>
      <div className="flex items-center justify-between flex-grow">
        {completed ? (
          <ConfirmDeleteTodo id={id} />
        ) : (
          <Button onClick={() => setTodoFinished(id)}>Finish</Button>
        )}
        <Badge variant={completed ? "default" : "destructive"}>
          {todoStatus}
        </Badge>
      </div>
    </Card>
  );
  const normalScreenTodo = (
    <Card className="flex items-center justify-between p-4 gap-4">
      <h2 className="w-full break-all">{title}</h2>
      <div className="flex items-center gap-4">
        <Badge variant={completed ? "default" : "destructive"}>
          {todoStatus}
        </Badge>
        {completed ? (
          <ConfirmDeleteTodo id={id} />
        ) : (
          <Button onClick={() => setTodoFinished(id)}>Finish</Button>
        )}
      </div>
    </Card>
  );
  return <>{windowSize.width > 375 ? normalScreenTodo : smallScreenTodo}</>;
};
