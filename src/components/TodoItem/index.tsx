import { BiPencil } from 'react-icons/bi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import * as s from './style';
import Button from '../Button';
import CheckBox from '../CheckBox';
import Todo from '../../types/todo';

const TodoItem = ({ todo, isCompleted }: Todo) => (
  <s.Item>
    <CheckBox checked={isCompleted} />
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

export default TodoItem;
