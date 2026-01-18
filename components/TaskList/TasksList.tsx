"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Task } from "@/types/task";
import TaskItem from "../TaskItem/TaskItem";
import { deleteTask, updateTask } from "@/lib/api/api";
interface TasksListProps {
  tasks: Task[];
}

export default function TasksList({ tasks }: TasksListProps) {
  const queryClient = useQueryClient();
  const deleteTaskMutation = useMutation({
    mutationFn: (id: Task["_id"]) => deleteTask(id),
    onSuccess(id) {
      console.log("Deleted task:", id);
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const updateTaskMutation = useMutation({
    mutationFn: ({ id, currentStatus }: { id: string; currentStatus: string }) => {
      const newStatus = currentStatus === "done" ? "undone" : "done";
      return updateTask(id, { status: newStatus as "done" | "undone" });
    },
    onSuccess() {
      console.log("Updated task status");
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  return (
    <ul className="">
      {tasks.map((task) => (
        <TaskItem
          onCheckedChange={(id) =>
            updateTaskMutation.mutate({ id, currentStatus: task.status })
          }
          key={task._id}
          task={task}
          disabled={deleteTaskMutation.isPending || updateTaskMutation.isPending}
          onClick={deleteTaskMutation.mutate}
        />
      ))}
    </ul>
  );
}
