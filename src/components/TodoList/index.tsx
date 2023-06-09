import * as s from './style';
import TodoItem from '../TodoItem';
import useTodos from '../../hooks/services/useTodos';

const TodoList = () => {
  const todoList = useTodos();

  if (!todoList) {
    return null;
  }

  return (
    <s.List>
      {todoList.length ? (
        todoList.map(({ id, todo, isCompleted, userId }) => (
          <TodoItem
            key={id}
            id={id}
            todo={todo}
            isCompleted={isCompleted}
            userId={userId}
          />
        ))
      ) : (
        <s.AltText>할 일 목록이 비었습니다.</s.AltText>
      )}
    </s.List>
  );
};

export default TodoList;
