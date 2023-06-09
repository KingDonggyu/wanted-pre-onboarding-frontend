import { IoMdAdd } from 'react-icons/io';
import Button from '../Button';
import TextField from '../TextField';
import * as s from './style';

const TodoAdder = () => {
  return (
    <s.Form method='post'>
      <TextField />
      <Button type='submit' aria-label='추가'>
        <IoMdAdd size={30} />
      </Button>
    </s.Form>
  );
};

export default TodoAdder;
