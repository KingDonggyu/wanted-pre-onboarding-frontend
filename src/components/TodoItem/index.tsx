import { BiPencil } from 'react-icons/bi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import * as s from './style';
import Button from '../Button';
import CheckBox from '../CheckBox';
import Todo from '../../types/todo';
import useTodoCompletion from '../../hooks/services/useTodoCompletion';

const TodoItem = ({ id, todo, isCompleted }: Todo) => {
  const complete = useTodoCompletion();

  const handleCheck = (isChecked: boolean) => {
    if (isCompleted !== isChecked) {
      complete({ id, todo, isCompleted: isChecked });
    }
  };

  return (
    <s.Item>
      <CheckBox
        checked={isCompleted}
        onChecked={handleCheck}
        onUnchecked={handleCheck}
      />
      <s.Todo>{todo}</s.Todo>
      <s.ButtonSet>
        <Button aria-label='수정'>
          <BiPencil size={25} />
        </Button>
        <Button aria-label='삭제'>
          <RiDeleteBin5Line size={25} />
        </Button>
      </s.ButtonSet>
    </s.Item>
  );
};

export default TodoItem;
