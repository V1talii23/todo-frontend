"use client";

import { useQuery, keepPreviousData } from "@tanstack/react-query";
import SearchBox from "@/components/SearchBox/SearchBox";
import TasksList from "@/components/TaskList/TasksList";
import Error from "@/components/Error/Error";
import Loader from "@/components/Loader/Loader";
import FilterDropDownMenu from "@/components/DropdownMenu/DropdownMenu";
import { SortOrder } from "@/types/task";
import { Status } from "@/types/task";
import Paginations from "@/components/Pagination/Pagination";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { getTasks } from "@/lib/api/api";
import CreateTaskForm from "@/components/CreateTaskForm/CreateTaskForm";

export default function TasksClient() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState<Status>("undone");
  const [order, setOrder] = useState<SortOrder>("desc");
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
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-6">
      <header className="mb-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            My Tasks
          </h1>

          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between bg-white dark:bg-black rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <div className="w-full sm:w-64">
                <SearchBox onChange={handleSearchBox} value={search} />
              </div>
              <FilterDropDownMenu
                status={status}
                order={order}
                sortBy={sortBy}
                onOrderChange={setOrder}
                onStatusChange={setStatus}
                onSortByChange={setSortBy}
              />
            </div>
            <CreateTaskForm />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto">
        {data && data.tasks.length < 1 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No results found. Try adjusting your search.
            </p>
          </div>
        )}

        {isSuccess && (
          <div className="mb-8">
            <TasksList tasks={data.tasks} />
          </div>
        )}

        {data && data.tasks.length > 0 && (
          <div className="flex justify-center mt-8 bg-white dark:bg-black rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <Paginations
              handleChangePage={setPage}
              currentPage={page}
              pages={data?.totalPages || 1}
            />
          </div>
        )}
      </main>
    </div>
  );
}
