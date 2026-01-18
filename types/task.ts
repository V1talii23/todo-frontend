export type Status = "done" | "undone";
export type SortOrder = "asc" | "desc";

interface Task {
  _id: string;
  title: string;
  description: string;
  priority: number;
  status: Status;
  createdAt: string;
  updatedAt: string;
}

interface TaskMutationProps {
  title: string;
  description: string;
  priority: number | string;
  status: Status;
}

interface UpdateTaskProps {
  title?: string;
  description?: string;
  priority?: number;
  status?: Status;
}

interface HttpResponse {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  tasks: Task[];
}

export {
  type Task,
  type TaskMutationProps,
  type HttpResponse,
  type UpdateTaskProps,
};
