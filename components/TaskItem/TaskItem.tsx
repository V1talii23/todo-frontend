import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { Task } from "@/types/task";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components//ui/checkbox";
import { Label } from "../ui/label";
interface TaskItemProps {
  task: Task;
  onClick: (id: string) => void;
  disabled: boolean;
  onCheckedChange: (id: string) => void;
}

export default function TaskItem({
  task,
  disabled,
  onClick,
  onCheckedChange,
}: TaskItemProps) {
  const { _id, title, description, priority, status } = task;
  return (
    <Item id={_id} variant="outline">
      <ItemContent>
        <ItemTitle>{title}</ItemTitle>
        <ItemDescription>{description}</ItemDescription>
        <ItemDescription>Priority: {priority}</ItemDescription>
        <Label>
          <ItemDescription>Completed</ItemDescription>
          <Checkbox
            className="ml-2"
            checked={status === "done"}
            onCheckedChange={() => onCheckedChange(task._id)}
          />
        </Label>
      </ItemContent>
      <ItemActions>
        <Button
          onClick={() => onClick(task._id)}
          disabled={disabled}
          variant="outline"
          size="sm"
        >
          Delete
        </Button>
      </ItemActions>
    </Item>
  );
}
