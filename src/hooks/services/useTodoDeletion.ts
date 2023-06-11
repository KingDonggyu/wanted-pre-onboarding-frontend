import { useTodoListContext } from '../../contexts/todoListContext';
import TodoRepository from '../../repository/api/TodoRepository';
import Todo from '../../types/todo';
import useMutation from '../useMutation';

const useTodoDeletion = () => {
  const { refetch } = useTodoListContext();
  const { mutate } = useMutation<void, Pick<Todo, 'id'>>({
    mutationFunc: async ({ id }) => new TodoRepository().delete({ id }),
    onSuccess: () => refetch(),
  });

  return mutate;
};

export default useTodoDeletion;
