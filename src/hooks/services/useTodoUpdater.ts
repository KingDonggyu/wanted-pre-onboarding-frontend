import { useTodoListContext } from '../../contexts/todoListContext';
import TodoRepository from '../../repository/api/TodoRepository';
import Todo from '../../types/todo';
import useMutation from '../useMutation';

const useTodoUpdater = () => {
  const { refetch } = useTodoListContext();
  const { mutate } = useMutation<Todo | null, Omit<Todo, 'userId'>>({
    mutationFunc: async ({ id, todo, isCompleted }) => {
      if (todo === '') {
        alert('할 일을 입력해주세요.');
        return null;
      }

      return new TodoRepository().update({ id, todo, isCompleted });
    },

    onSuccess: () => refetch(),
  });

  return mutate;
};

export default useTodoUpdater;
