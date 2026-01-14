"use client";

import Task from "@/types/task";

interface TasksListProps {
  tasks: Task[];
}

export default function TasksList({ tasks }: TasksListProps) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <p>{task.priority}</p>
          <p>{task.status}</p>
        </li>
      ))}
    </ul>
  );
}
