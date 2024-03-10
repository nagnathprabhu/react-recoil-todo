import { selector } from 'recoil';
import { todoAtom, Todo } from './atom';

export const completedTodoListState = selector<Todo[]>({
  key: 'completedTodoListState',
  get: ({ get }) => {
    const todoList = get(todoAtom);
    return todoList.filter(todo => todo.completed);
  },
  set: ({ set }, newValue: any) => {
    set(todoAtom, prevList =>
      prevList.map(todo =>
        newValue.find((newTodo: any) => newTodo.id === todo.id) || todo
      )
    );
  },
});