import { BiPencil } from 'react-icons/bi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import * as s from './style';
import Button from '../Button';
import CheckBox from '../CheckBox';

const TodoItem = () => (
  <s.Item>
    <CheckBox checked />
    <s.Todo>축구</s.Todo>
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
