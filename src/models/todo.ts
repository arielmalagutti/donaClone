export type TodoList = {
  icon?: string;
  id: string;
  name: string;
  todos?: Todo[];
};

export type Todo = {
  id: string;
  todoListId: string;

  isComplete: boolean;
  description: string;

  createdAt: string;
  completedAt?: string | null;
};
