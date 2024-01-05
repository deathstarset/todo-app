const DEFAULT_API_LINK = "http://localhost:8080/api/v1/todos";

export const getTodos = async () => {
  try {
    const res = await fetch(DEFAULT_API_LINK);
    return await res.json();
  } catch (error) {
    return error;
  }
};

export const getTodo = async (todoId: string) => {
  try {
    const res = await fetch(`${DEFAULT_API_LINK}/${todoId}`);
    return await res.json();
  } catch (error) {
    return error;
  }
};

export const updateTodo = async (
  todoId: string,
  props: { completed?: boolean; description?: string; title?: string }
) => {
  try {
    const res = await fetch(`${DEFAULT_API_LINK}/${todoId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...props }),
    });
    return await res.json();
  } catch (error) {
    return error;
  }
};

export const deleteTodo = async (todoId: string) => {
  try {
    const res = await fetch(`${DEFAULT_API_LINK}/${todoId}`, {
      method: "DELETE",
    });
    return await res.json();
  } catch (error) {
    return error;
  }
};

export const addTodo = async (props: {
  title: string;
  description: string;
}) => {
  try {
    const res = await fetch(`${DEFAULT_API_LINK}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...props }),
    });

    return await res.json();
  } catch (error) {
    return error;
  }
};
