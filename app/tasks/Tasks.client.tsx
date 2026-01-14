"use client";

import { useQuery, keepPreviousData } from "@tanstack/react-query";
import SearchBox from "@/components/SearchBox/SearchBox";
import TasksList from "@/components/TasksList/TasksList";
// import Paginations from "@/components/Pagination/Pagination";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { getTasks } from "@/lib/api/api";

export default function TasksClient() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const { data, isLoading, error, isSuccess } = useQuery({
    queryKey: ["tasks", search, page],
    queryFn: () => getTasks(search, page),
    placeholderData: keepPreviousData,
    staleTime: 60 * 1000,
  });

  const handleSearchBox = useDebouncedCallback((task: string) => {
    setSearch(task);
    setPage(1);
    console.log(task);
  }, 1000);

  return (
    <div>
      <header>
        <SearchBox onChange={handleSearchBox} value={search} />
      </header>

      {isSuccess && <TasksList tasks={data.tasks} />}
    </div>
  );
}
