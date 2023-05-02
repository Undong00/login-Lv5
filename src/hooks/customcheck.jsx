import { useQuery, useMutation } from "react-query";
import axios from "axios";

function useTodos() {
  const {
    refetch,
    isLoading,
    error,
    data: todos,
  } = useQuery("todos", async () => {
    const response = await axios.get("http://localhost:4000/todos");
    return response.data;
  });

  const deleteTodo = useMutation(
    (id) => axios.delete(`http://localhost:4000/todos/${id}`),
    {
      onSuccess: () => {
        refetch();
      },
    }
  );

  return { todos, isLoading, error, deleteTodo };
}

export default useTodos;
