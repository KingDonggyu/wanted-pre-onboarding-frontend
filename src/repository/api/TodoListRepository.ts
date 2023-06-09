import HttpClient from './HttpClient';
import Todo from '../../types/todo';

class TodoListRepository extends HttpClient {
  async get() {
    const { data } = await this.axiosInstance.get<Todo[]>('/todos');
    return data;
  }
}

export default TodoListRepository;
