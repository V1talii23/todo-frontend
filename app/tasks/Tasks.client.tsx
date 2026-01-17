"use client";

import { useQuery, keepPreviousData } from "@tanstack/react-query";
import SearchBox from "@/components/SearchBox/SearchBox";
import TasksList from "@/components/TaskList/TasksList";
import Error from "@/components/Error/Error";
import Loader from "@/components/Loader/Loader";
import FilterDropDownMenu from "@/components/DropdownMenu/DropdownMenu";
import { SortOder } from "@/types/task";
import { Status } from "@/types/task";
// import Paginations from "@/components/Pagination/Pagination";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { getTasks } from "@/lib/api/api";
import CreateTaskForm from "@/components/CreateTaskForm/CreateTaskForm";

export default function TasksClient() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState<Status>("undone");
  const [order, setOrder] = useState<SortOder>("desc");
  const [sortBy, setSortBy] = useState<string>("createdAt");

  const { data, isLoading, error, isSuccess, isFetching, refetch } = useQuery({
    queryKey: ["tasks", search, page, status, order, sortBy],
    queryFn: () => getTasks({ search, page, status, order, sortBy }),
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
    <div className="flex flex-coluns min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <header className="">
        <div className="grid grid-cols-3 gap-4">
          <SearchBox onChange={handleSearchBox} value={search} />
          <FilterDropDownMenu
            status={status}
            order={order}
            sortBy={sortBy}
            onOrderChange={setOrder}
            onStatusChange={setStatus}
            onSortByChange={setSortBy}
          />
          <CreateTaskForm />
        </div>
        {/* <Paginations pages={page} /> */}
      </header>
      {data && data.tasks.length < 1 && (
        <p> No results found. Try adjusting your search.</p>
      )}
      {isLoading && <Loader />}
      {isSuccess && <TasksList tasks={data.tasks} />}
    </div>
  );
}
