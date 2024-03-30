// type script object interface
export interface TodoItem {
  id: number;
  name: string;
  email: string;
  password: string;
  isCompleted: boolean;
}

// use of typescript interface with todoItem
export const todoData: TodoItem[] = [
  {
    id: 1,
    name: '<NAME>',
    email: '<EMAIL>',
    password: '<PASSWORD>',
    isCompleted: true,
  },
  {
    id: 2,
    name: '<NAME>',
    email: '<EMAIL>',
    password: '<PASSWORD>',
    isCompleted: false,
  },
  {
    id: 3,
    name: '<NAME>',
    email: '<EMAIL>',
    password: '<PASSWORD>',
    isCompleted: false,
  },
];

// save data interface
