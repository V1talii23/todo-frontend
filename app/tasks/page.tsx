import TasksClient from "./Tasks.client";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getTasks } from "@/lib/api/api";

export default async function TasksPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["tasks"],
    queryFn: () => getTasks("", 1),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TasksClient />
    </HydrationBoundary>
  );
}
