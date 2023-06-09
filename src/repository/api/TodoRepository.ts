import Todo from '../../types/todo';
import HttpClient from './HttpClient';

class TodoRepository extends HttpClient {
  async add({ todo }: Pick<Todo, 'todo'>) {
    const { data } = await this.axiosInstance.post<Todo>('/todos', { todo });
    return data;
  }
}

export default TodoRepository;
