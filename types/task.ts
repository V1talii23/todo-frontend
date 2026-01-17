interface Task {
  _id: string;
  title: string;
  description: string;
  priority: number;
  status: "undone" | "done";
  createdAt: string;
  updatedAt: string;
}

interface TaskMutationProps {
  title: string;
  description: string;
  priority: number;
  status: "undone" | "done";
}

interface UpdateTaskProps {
  title?: string;
  description?: string;
  priority?: number;
  status?: "undone" | "done";
}

interface HttpResponse {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  tasks: Task[];
}

export type Status = "done" | "undone" | "";
export type SortOder = "asc" | "desc";

export {
  type Task,
  type TaskMutationProps,
  type HttpResponse,
  type UpdateTaskProps,
};
