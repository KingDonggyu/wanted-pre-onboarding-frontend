import Todo from '../../types/todo';
import HttpClient from './HttpClient';

class TodoRepository extends HttpClient {
  async add({ todo }: Pick<Todo, 'todo'>) {
    const { data } = await this.axiosInstance.post<Todo>('/todos', { todo });
    return data;
  }

  async complete({ id, todo, isCompleted }: Omit<Todo, 'userId'>) {
    const { data } = await this.axiosInstance.put<Todo>(`/todos/${id}`, {
      todo,
      isCompleted,
    });

    return data;
  }

  async delete({ id }: Pick<Todo, 'id'>) {
    await this.axiosInstance.delete(`/todos/${id}`);
  }
}

export default TodoRepository;
