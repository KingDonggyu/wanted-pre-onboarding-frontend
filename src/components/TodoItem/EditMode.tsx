import { useRef } from 'react';
import * as s from './style';
import Button from '../Button';
import TextField from '../TextField';
import Todo from '../../types/todo';

interface EditModeTodoItemProps {
  todoInfo: Pick<Todo, 'id' | 'todo'>;
  onSubmit: () => void;
  onCancel: () => void;
}

const EditModeTodoItem = ({
  todoInfo,
  onSubmit,
  onCancel,
}: EditModeTodoItemProps) => {
  const inputRef = useRef();

  const handleSubmit = () => {
    onSubmit();
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <>
      <TextField
        data-testid='modify-input'
        ref={inputRef}
        value={todoInfo.todo}
      />
      <s.ButtonSet>
        <Button data-testid='submit-button' onClick={handleSubmit}>
          제출
        </Button>
        <Button data-testid='cancel-button' onClick={handleCancel}>
          취소
        </Button>
      </s.ButtonSet>
    </>
  );
};

export default EditModeTodoItem;
