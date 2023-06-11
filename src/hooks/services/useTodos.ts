import useQuery from '../useQuery';
import TodoListRepository from '../../repository/api/TodoListRepository';
import Todo from '../../types/todo';
import { useCallback } from 'react';

const useTodos = () => {
  const queryFunc = useCallback(async () => {
    return new TodoListRepository().get();
  }, []);

  const { data, refetch } = useQuery<Todo[]>({ queryFunc });

  return { todoList: data, refetch };
};

export default useTodos;
