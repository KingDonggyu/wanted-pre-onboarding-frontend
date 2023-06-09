import TodoRepository from '../../repository/api/TodoRepository';
import Todo from '../../types/todo';
import useMutation from '../useMutation';

const useTodoAdder = () => {
  const { mutate } = useMutation<Todo | null, Pick<Todo, 'todo'>>({
    mutationFunc: async ({ todo }) => {
      if (todo === '') {
        alert('할 일을 입력해주세요.');
        return null;
      }

      return new TodoRepository().add({ todo });
    },
  });

  return mutate;
};

export default useTodoAdder;
