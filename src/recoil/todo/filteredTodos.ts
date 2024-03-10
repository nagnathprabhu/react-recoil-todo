import { selector } from 'recoil';
import { todoAtom, Todo } from './atom';

export const filteredTodoListState = selector<Todo[]>({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const todoList = get(todoAtom);
    return todoList.filter(todo => !todo.completed);
  }
});