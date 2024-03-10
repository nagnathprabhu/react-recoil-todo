import { atom } from "recoil"

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const todoAtom = atom<Todo[]>({
  key: "todoAtom",
  default: []
})


