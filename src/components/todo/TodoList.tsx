
import { useRecoilValue } from 'recoil';
import { filteredTodoListState, completedTodoListState } from '../../recoil/todo';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const todoList = useRecoilValue(filteredTodoListState);
  const completedTodo = useRecoilValue(completedTodoListState);
  return <div>
    {todoList.length && <h4> Pending Items</h4> || ''}
    {todoList.map(todo => (
      <TodoItem {...todo} />
    ))}
    {completedTodo.length && <h4> Completed Items</h4> || ''}
    {completedTodo.map(todo => (
      <TodoItem {...todo} />
    ))}
  </div>

}
export default TodoList