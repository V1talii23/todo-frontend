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
    <Item
      id={_id}
      variant="outline"
      className="group hover:shadow-md transition-all"
    >
      <ItemContent className="flex-1">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <ItemTitle className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              {title}
            </ItemTitle>
            <ItemDescription className="text-gray-600 dark:text-gray-400 mb-3">
              {description}
            </ItemDescription>
            <div className="flex items-center gap-4">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${
                  priority >= 8
                    ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                    : priority >= 5
                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                    : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                }`}
              >
                Priority: {priority}
              </span>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${
                  status === "done"
                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                    : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400"
                }`}
              >
                {status === "done" ? "✓ Done" : "○ Undone"}
              </span>
            </div>
          </div>
        </div>
      </ItemContent>
      <ItemActions className="flex items-center gap-3">
        <Label className="flex items-center gap-2 cursor-pointer">
          <Checkbox
            checked={status === "done"}
            onCheckedChange={() => onCheckedChange(task._id)}
            disabled={disabled}
            className="w-5 h-5"
          />
        </Label>
        <Button
          onClick={() => onClick(task._id)}
          disabled={disabled}
          variant="outline"
          size="sm"
          className="opacity-0 group-hover:opacity-100 transition-opacity"
        >
          Delete
        </Button>
      </ItemActions>
    </Item>
  );
}
