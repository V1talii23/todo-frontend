import axios from "axios";
import {
  Task,
  HttpResponse,
  CreateTask,
  UpdateTask,
  Priority,
  Status,
} from "@/types/task";
const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL: baseUrl,
});

interface GetTasksParams {
  search: string;
  page: number;
  status?: "undone" | "done" | "";
  priority?: "asc" | "desc";
}

const getTasks = async ({ search, page, status, priority }: GetTasksParams) => {
  const params: Record<string, string | number> = {
    search,
    page,
    sortOrder: priority as Priority,
  };
  if (status === "done" || status || "undone") {
    params.status = status as Status;
  }

  const { data } = await api.get<HttpResponse>("/tasks", { params });
  return data;
};

const getTaskById = async (id: string) => {
  const { data } = await api.get<HttpResponse>(`/tasks/${id}`, {});
  return data;
};

const createTask = async (task: CreateTask) => {
  const { data } = await api.post<Task>("/tasks", task);
  return data;
};

const updateTask = async (id: string, updates: UpdateTask) => {
  const { data } = await api.patch<Task>(`/tasks/${id}`, updates);
  return data;
};

const deleteTask = async (id: string) => {
  const { data } = await api.delete<Task>(`/tasks/${id}`);
  return data;
};

export { getTasks, getTaskById, createTask, deleteTask, updateTask };
