import { useTodoListContext } from '../../contexts/todoListContext';
import TodoRepository from '../../repository/api/TodoRepository';
import Todo from '../../types/todo';
import useMutation from '../useMutation';

const useTodoCompletion = () => {
  const { refetch } = useTodoListContext();
  const { mutate } = useMutation<Todo, Omit<Todo, 'userId'>>({
    mutationFunc: async ({ id, todo, isCompleted }) => {
      return new TodoRepository().complete({ id, todo, isCompleted });
    },

    onSuccess: () => {
      refetch();
    },
  });

  return mutate;
};

export default useTodoCompletion;
