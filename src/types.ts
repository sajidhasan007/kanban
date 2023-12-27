export type Id = string | number;

export type Column = {
  id: Id;
  title: string;
};

export type Task = {
  id: Id;
  columnId: Id;
  content: string;
};

export type ITask = {
  id: number;
  task: string;
  assigned_to: string;
  assignee: string;
  priority: string;
  due_date: string;
  completed: boolean;
  completed_at: string;
  created_at: string;
};
