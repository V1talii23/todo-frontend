"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMutation } from "@tanstack/react-query";
import { TaskMutationProps, Status } from "@/types/task";
import { createTask } from "@/lib/api/api";
import { useQueryClient } from "@tanstack/react-query";
import TaskSchema from "@/schemas/taskSchema";
import { useState } from "react";
import { toast } from "sonner";

export default function CreateTaskForm() {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (data: TaskMutationProps) => createTask(data),
  });

  const handleSubmit = (formData: FormData) => {
    const rawData = {
      title: (formData.get("title") as string).trim(),
      description: (formData.get("description") as string).trim(),
      priority: Number(formData.get("priority") as string),
      status: formData.get("status") as Status,
    };

    const result = TaskSchema.safeParse(rawData);

    if (!result.success) {
      toast.error("Please fill all the fields to create new task", {
        position: "top-center",
      });
      return;
    }

    mutate(result.data, {
      onSuccess: (data) => {
        console.log("Created task:", data);
        queryClient.invalidateQueries({ queryKey: ["tasks"] });
        // clearDraft();
        toast.success("Task created!", { position: "top-center" });
        setOpen(false);
      },
      onError: (error) => {
        console.log(error.message);
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Create task +</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action={handleSubmit}>
          <DialogHeader>
            <DialogTitle>New task</DialogTitle>
            <DialogDescription>
              Fill in the details below to add a new task and keep your work
              organized.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="title-1">Title</Label>
              <Input id="title-1" name="title" placeholder="Task title" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description-1">Description</Label>
              <Input
                id="description-1"
                name="description"
                placeholder="Description"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="checkout-Priority">Priority</FieldLabel>
                <Select name="priority" defaultValue="1">
                  <SelectTrigger id="checkout-Priority">
                    <SelectValue placeholder="Priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="6">6</SelectItem>
                    <SelectItem value="7">7</SelectItem>
                    <SelectItem value="8">8</SelectItem>
                    <SelectItem value="9">9</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                  </SelectContent>
                </Select>
              </Field>

              <Field>
                <FieldLabel htmlFor="checkout-Status">Status</FieldLabel>
                <Select name="status" defaultValue="undone">
                  <SelectTrigger id="checkout-Status">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="done">Done</SelectItem>
                    <SelectItem value="undone">Undone</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            </div>
          </div>
          <DialogFooter className="">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={isPending}>
              {isPending ? "Creating..." : "Create task"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
