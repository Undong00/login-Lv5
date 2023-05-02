import { useQuery, useMutation } from "react-query";
import axios from "axios";

function useTodos() {
  const {
    refetch,
    isLoading,
    error,
    data: todos,
  } = useQuery("todos", async () => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}`);
    return response.data;
  });

  const deleteTodo = useMutation(
    (id) => axios.delete(`${process.env.REACT_APP_SERVER_URL}/${id}`),
    {
      onSuccess: () => {
        refetch();
      },
    }
  );

  return { todos, isLoading, error, deleteTodo };
}

export default useTodos;
