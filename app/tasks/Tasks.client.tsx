"use client";

import { useQuery, keepPreviousData } from "@tanstack/react-query";
import SearchBox from "@/components/SearchBox/SearchBox";
import TasksList from "@/components/TasksList/TasksList";
import Error from "@/components/Error/Error";
import Loader from "@/components/Loader/Loader";

import Paginations from "@/components/Pagination/Pagination";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { getTasks } from "@/lib/api/api";
import { Button } from "@/components/ui/button";

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

  if (error || !data)
    return (
      <div className="">
        <p>Oops! We cound&apos;t load your tasks.</p>
        <p>Please check your connection and try again.</p>
        <Button
          type="button"
          onClick={() => refetch}
          disabled={isFetching}
          variant="outline"
        >
          {isFetching ? "Trying..." : "Try again"}
        </Button>
      </div>
    );

  return (
    <div>
      <header className="">
        <SearchBox onChange={handleSearchBox} value={search} />
        <Paginations />
      </header>
      {data && data.tasks.length < 1 && <Error />}
      {isLoading && <Loader />}
      {isSuccess && <TasksList tasks={data.tasks} />}
    </div>
  );
}
