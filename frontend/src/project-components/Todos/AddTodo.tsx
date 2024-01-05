import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useTodosContext } from "@/project-components/Todos/TodosContext";

export const AddTodo = () => {
  const [inputValue, setInputValue] = useState("");
  const {
    contextOperations: { setTodoAdded },
  } = useTodosContext();
  return (
    <div className="flex items-center gap-3">
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button
        onClick={() => {
          setTodoAdded(inputValue, "Placeholder");
          setInputValue("");
        }}
      >
        Add
      </Button>
    </div>
  );
};
