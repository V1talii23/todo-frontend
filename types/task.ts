interface Task {
  _id: string;
  title: string;
  description: string;
  priority: number;
  status: "undone" | "done";
  createdAt: string;
  updatedAt: string;
}

interface CreateTask {
  title: string;
  description: string;
  priority: number;
  status: "undone" | "done";
}

interface UpdateTask {
  title: string;
  description: string;
  priority: number;
  status: "undone" | "done";
}

interface HttpResponse {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  tasks: Task[];
}

export type Status = "done" | "undone" | "";
export type Priority = "asc" | "desc";
export { type Task, type CreateTask, type UpdateTask, type HttpResponse };
