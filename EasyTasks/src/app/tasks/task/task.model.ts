export type Task = {
  id: string;
  title: string;
  userId: string;
  summary: string;
  dueDate: string;
};

export type NewTaskData = { title: string; summary: string; date: string };
