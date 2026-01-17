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

export default function TaskForm() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Create task +</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
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
                <Select defaultValue="">
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
                <Select defaultValue="undone">
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
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
