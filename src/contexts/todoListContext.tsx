import { ReactNode, createContext, useContext, useMemo } from 'react';
import Todo from '../types/todo';
import useTodos from '../hooks/services/useTodos';

interface TodoListContextProps {
  todoList: Todo[] | undefined;
  refetch: () => Promise<void>;
}

const TodoListContext = createContext<TodoListContextProps>({
  todoList: [],
  refetch: () => new Promise(() => {}),
});

const TodoListProvider = ({ children }: { children: ReactNode }) => {
  const { todoList, refetch } = useTodos();

  const contextValue: TodoListContextProps = useMemo(
    () => ({ todoList, refetch }),
    [refetch, todoList]
  );

  return (
    <TodoListContext.Provider value={contextValue}>
      {children}
    </TodoListContext.Provider>
  );
};

const useTodoListContext = () => {
  const context = useContext(TodoListContext);

  if (context === undefined) {
    throw new Error(
      'useTodoListContext should be used within TodoListContext.Provider'
    );
  }

  return context;
};

export { TodoListProvider, useTodoListContext };
