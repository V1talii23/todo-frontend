"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";

type Status = "done" | "undone" | "";
type Priority = "asc" | "desc";

interface FilterDropDownMenuProps {
  status: Status;
  priority: Priority;
  onStatusChange: (status: Status) => void;
  onPriorityChange: (priority: Priority) => void;
}

export default function FilterDropDownMenu({
  status,
  priority,
  onPriorityChange,
  onStatusChange,
}: FilterDropDownMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Filter Tasks</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>Filteres</DropdownMenuLabel>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>by priority</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuRadioGroup
                value={priority}
                onValueChange={(priority) => onPriorityChange(priority)}
              >
                <DropdownMenuRadioItem value="asc">
                  Low → High
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="desc">
                  High → Low
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

        <DropdownMenuSeparator />

        <DropdownMenuSub>
          <DropdownMenuSubTrigger> by status</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuRadioGroup
                value={status}
                onValueChange={(status) => onStatusChange(status)}
              >
                <DropdownMenuRadioItem value="">All</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="done">Done</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="undone">
                  Undone
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
