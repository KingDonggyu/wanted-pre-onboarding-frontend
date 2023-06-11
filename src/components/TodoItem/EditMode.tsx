import { useRef } from 'react';
import * as s from './style';
import Button from '../Button';
import TextField from '../TextField';
import Todo from '../../types/todo';
import useTodoUpdater from '../../hooks/services/useTodoUpdater';

interface EditModeTodoItemProps {
  todoInfo: Omit<Todo, 'userId'>;
  onSubmit: () => void;
  onCancel: () => void;
}

const EditModeTodoItem = ({
  todoInfo,
  onSubmit,
  onCancel,
}: EditModeTodoItemProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const updateTodo = useTodoUpdater();

  const handleSubmit = async () => {
    if (!inputRef.current) {
      return;
    }

    const editedTodo = inputRef.current.value;
    const result = await updateTodo({ ...todoInfo, todo: editedTodo });

    if (result) {
      onSubmit();
    }
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <>
      <TextField
        data-testid='modify-input'
        ref={inputRef}
        defaultValue={todoInfo.todo}
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
