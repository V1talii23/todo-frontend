"use client";

import { useQuery, keepPreviousData } from "@tanstack/react-query";
import SearchBox from "@/components/SearchBox/SearchBox";
import TasksList from "@/components/TaskList/TasksList";
import Error from "@/components/Error/Error";
import Loader from "@/components/Loader/Loader";

// import Paginations from "@/components/Pagination/Pagination";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { Button } from "@/components/ui/button";
import { getTasks } from "@/lib/api/api";

export default function TasksClient() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const { data, isLoading, error, isSuccess, isFetching, refetch } = useQuery({
    queryKey: ["tasks", search, page],
    queryFn: () => getTasks(search, page),
    placeholderData: keepPreviousData,
    staleTime: 60 * 1000,
  });

  const handleSearchBox = useDebouncedCallback((task: string) => {
    setSearch(task);
    setPage(1);
  }, 1000);

  if (isLoading) return <Loader />;

  if (error || !data) return <Error refresh={refetch} disabled={isFetching} />;

  return (
    <div>
      <header className="">
        <SearchBox onChange={handleSearchBox} value={search} />
        {/* <Paginations pages={page} /> */}
        {/* <Button onClick={handleCreate}>Create Task +</Button> */}
      </header>
      {data && data.tasks.length < 1 && (
        <p> No results found. Try adjusting your search.</p>
      )}
      {isLoading && <Loader />}
      {isSuccess && <TasksList tasks={data.tasks} />}
    </div>
  );
}
