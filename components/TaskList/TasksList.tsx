"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Task } from "@/types/task";
import TaskItem from "../TaskItem/TaskItem";
import { deleteTask } from "@/lib/api/api";
interface TasksListProps {
  tasks: Task[];
}

export default function TasksList({ tasks }: TasksListProps) {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (id: Task["_id"]) => deleteTask(id),
    onSuccess(id) {
      console.log("Deleted task:", id);
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  return (
    <ul className="">
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          disabled={isPending}
          onClick={mutate}
        />
      ))}
    </ul>
  );
}
