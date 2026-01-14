interface Task {
  _id: string;
  title: string;
  description: string;
  priority: number;
  status: "undone" | "done";
  createdAt: string;
  updatedAt: string;
}

export default Task;
