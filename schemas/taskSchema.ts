import { z } from "zod";

const TaskSchema = z.object({
  title: z.string().min(3, "Title should have at leat 3 characters"),
  description: z
    .string()
    .min(3, "Description should have at least 3 characters"),
  priority: z.number().min(1).max(10),
  status: z.enum(["done", "undone"]),
});

export default TaskSchema;
