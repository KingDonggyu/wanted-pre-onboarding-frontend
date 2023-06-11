import { FormEvent, useRef } from 'react';
import { IoMdAdd } from 'react-icons/io';
import * as s from './style';
import Button from '../Button';
import TextField from '../TextField';
import useTodoAdder from '../../hooks/services/useTodoAdder';

const TodoAdder = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const addTodo = useTodoAdder();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!inputRef.current) {
      return;
    }
    await addTodo({ todo: inputRef.current.value });
    inputRef.current.value = '';
  };

  return (
    <s.Form method='post' onSubmit={handleSubmit}>
      <TextField data-testid='new-todo-input' ref={inputRef} />
      <Button data-testid='new-todo-add-button' type='submit' aria-label='추가'>
        <IoMdAdd size={30} />
      </Button>
    </s.Form>
  );
};

export default TodoAdder;
