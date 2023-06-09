import Button from '../Button';
import TextField from '../TextField';
import * as s from './style';

const TodoAdder = () => {
  return (
    <s.Wrapper>
      <TextField />
      <Button>추가</Button>
    </s.Wrapper>
  );
};

export default TodoAdder;
