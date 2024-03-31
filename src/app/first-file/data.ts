// type script object interface
export interface TodoItem {
  id: string;
  todo: string;
  isCompleted: boolean;
}

// use of typescript interface with todoItem
export const todoData: TodoItem[] = [
  {
    id: '1',
    todo: '<NAME>',
    isCompleted: true,
  },
  {
    id: '2',
    todo: '<NAME>',
    isCompleted: false,
  },
  {
    id: '3',
    todo: '<NAME>',
    isCompleted: false,
  },
];

// save data interface
