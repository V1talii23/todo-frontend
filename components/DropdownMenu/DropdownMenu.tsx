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
import { Status, SortOrder } from "@/types/task";

interface FilterDropDownMenuProps {
  status: Status | "";
  order: SortOrder;
  sortBy: string;
  onStatusChange: (status: Status) => void;
  onOrderChange: (order: SortOrder) => void;
  onSortByChange: (sortBy: string) => void;
}

export default function FilterDropDownMenu({
  status,
  order,
  sortBy,
  onOrderChange,
  onStatusChange,
  onSortByChange,
}: FilterDropDownMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Filter Tasks</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>Filters</DropdownMenuLabel>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Sort Direction</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuRadioGroup
                value={order}
                onValueChange={(order: SortOrder) => onOrderChange(order)}
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
          <DropdownMenuSubTrigger>Sort Field</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuRadioGroup
                value={sortBy}
                onValueChange={(sortBy) => onSortByChange(sortBy)}
              >
                <DropdownMenuRadioItem value="createdAt">
                  Created Date
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="updatedAt">
                  Updated Date
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="priority">
                  Priority
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

        <DropdownMenuSeparator />

        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Status Filter</DropdownMenuSubTrigger>
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
