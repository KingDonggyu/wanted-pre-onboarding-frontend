import { ChangeEvent, FormEvent, useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import * as s from './style';
import Button from '../Button';
import TextField from '../TextField';
import useTodoAdder from '../../hooks/services/useTodoAdder';

const TodoAdder = () => {
  const [todo, setTodo] = useState('');
  const addTodo = useTodoAdder();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await addTodo({ todo });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  return (
    <s.Form method='post' onSubmit={handleSubmit}>
      <TextField
        data-testid='new-todo-input'
        value={todo}
        onChange={handleChange}
      />
      <Button data-testid='new-todo-add-button' type='submit' aria-label='추가'>
        <IoMdAdd size={30} />
      </Button>
    </s.Form>
  );
};

export default TodoAdder;
