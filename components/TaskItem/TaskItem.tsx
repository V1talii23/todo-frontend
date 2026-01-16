import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { Task } from "@/types/task";
import { Button } from "@/components/ui/button";

interface TaskItemProps {
  task: Task;
  onClick: (id: string) => void;
  disabled: boolean;
}

export default function TaskItem({ task, disabled, onClick }: TaskItemProps) {
  const { _id, title, description, priority, status } = task;
  return (
    <Item id={_id} variant="outline">
      <ItemContent>
        <ItemTitle>{title}</ItemTitle>
        <ItemDescription>{description}</ItemDescription>
        <ItemDescription>Priority: {priority}</ItemDescription>
        <ItemDescription>Status: {status}</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline" size="sm">
          View more
        </Button>
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
