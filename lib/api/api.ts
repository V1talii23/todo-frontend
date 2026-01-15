import axios from "axios";
import { Task, HttpResponse, CreateTask, UpdateTask } from "@/types/task";
const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL: baseUrl,
});

const getTasks = async (search: string, page: number) => {
  const { data } = await api.get<HttpResponse>("/tasks", {
    params: { search, page },
  });
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
