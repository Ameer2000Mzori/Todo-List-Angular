// type script object interface
interface TodoItem {
  id: number;
  name: string;
  email: string;
  password: string;
}

// use of typescript interface with todoItem
export const todoData: TodoItem[] = [
  {
    id: 1,
    name: '<NAME>',
    email: '<EMAIL>',
    password: '<PASSWORD>',
  },
  {
    id: 2,
    name: '<NAME>',
    email: '<EMAIL>',
    password: '<PASSWORD>',
  },
  {
    id: 3,
    name: '<NAME>',
    email: '<EMAIL>',
    password: '<PASSWORD>',
  },
];
