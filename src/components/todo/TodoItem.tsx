import { Todo } from '../../recoil/todo';
import { useRecoilState } from 'recoil';
import todoAtom from '../../recoil/todo';

const TodoItem: React.FC<Todo> = ({ id, completed, text }: Todo) => {
  const [todos, setTodos] = useRecoilState(todoAtom);
  const toggleTodoCompletion = (id: number): void => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  return <div key={id}>
    <input
      type="checkbox"
      checked={completed}
      onChange={() => toggleTodoCompletion(id)}
    />
    <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {text}
    </span>
  </div>
}

export default TodoItem