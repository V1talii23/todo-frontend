import axios from "axios";
import {
  Task,
  HttpResponse,
  TaskMutationProps,
  SortOrder,
  Status,
  UpdateTaskProps,
} from "@/types/task";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL: baseUrl,
});

interface GetTasksParams {
  search: string;
  page: number;
  status?: Status;
  order?: SortOrder;
  sortBy?: string;
}

const getTasks = async ({
  search,
  page,
  status,
  order,
  sortBy,
}: GetTasksParams) => {
  const params: Record<string, string | number> = {
    search,
    page,
    sortOrder: order as SortOrder,
    sortBy: sortBy || "createdAt",
    perPage: 9,
    status: status || "all",
  };

  const { data } = await api.get<HttpResponse>("/tasks", { params });
  return data;
};

const getTaskById = async (id: string) => {
  const { data } = await api.get<HttpResponse>(`/tasks/${id}`, {});
  return data;
};

const createTask = async (task: TaskMutationProps) => {
  const { data } = await api.post<Task>("/tasks", task);
  return data;
};

const updateTask = async (id: string, updates: UpdateTaskProps) => {
  const { data } = await api.patch<Task>(`/tasks/${id}`, updates);
  return data;
};

const deleteTask = async (id: string) => {
  const { data } = await api.delete<Task>(`/tasks/${id}`);
  return data;
};

export { getTasks, getTaskById, createTask, deleteTask, updateTask };
