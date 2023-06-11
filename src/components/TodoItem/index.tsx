import { useState } from 'react';
import { BiPencil } from 'react-icons/bi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import * as s from './style';
import Button from '../Button';
import CheckBox from '../CheckBox';
import Todo from '../../types/todo';
import useTodoCompletion from '../../hooks/services/useTodoCompletion';
import useTodoDeletion from '../../hooks/services/useTodoDeletion';
import EditModeTodoItem from './EditMode';

const TodoItem = ({ id, todo, isCompleted }: Todo) => {
  const complete = useTodoCompletion();
  const deleteTodo = useTodoDeletion();
  const [isEditMode, setIsEditMode] = useState(false);

  const handleCheck = (isChecked: boolean) => {
    if (isCompleted !== isChecked) {
      complete({ id, todo, isCompleted: isChecked });
    }
  };

  const handleClickDeleteButton = () => {
    deleteTodo({ id });
  };

  const handleClickEditButton = () => {
    setIsEditMode(true);
  };

  return (
    <s.Item>
      <CheckBox
        checked={isCompleted}
        onChecked={handleCheck}
        onUnchecked={handleCheck}
      />
      {isEditMode ? (
        <EditModeTodoItem
          todoInfo={{ id, todo }}
          onSubmit={() => setIsEditMode(false)}
          onCancel={() => setIsEditMode(false)}
        />
      ) : (
        <>
          <s.Todo>{todo}</s.Todo>
          <s.ButtonSet>
            <Button aria-label='수정' onClick={handleClickEditButton}>
              <BiPencil size={25} />
            </Button>
            <Button aria-label='삭제' onClick={handleClickDeleteButton}>
              <RiDeleteBin5Line size={25} />
            </Button>
          </s.ButtonSet>
        </>
      )}
    </s.Item>
  );
};

export default TodoItem;
