
import TodoList from "./TodoList"
import AddTodo from "./AddTodo"
const TodoContainer: React.FC = () => <div className="todo-container">
  <h1>Todo List</h1>
  <TodoList />
  <AddTodo />
</div>
export default TodoContainer