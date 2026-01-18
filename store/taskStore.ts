import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Status, TaskMutationProps } from "@/types/task";

const initialDraft = {
  title: "",
  description: "",
  priority: 1,
  status: "undone" as Status,
};

interface TaskDraft {
  draft: TaskMutationProps;
  setDraft: (note: TaskMutationProps) => void;
  clearDraft: () => void;
}

export const useTaskDraft = create<TaskDraft>()(
  persist(
    (set) => ({
      draft: initialDraft,
      setDraft: (task) => set(() => ({ draft: task })),
      clearDraft: () => set({ draft: initialDraft }),
    }),
    {
      name: "new-task",
      partialize: (task) => ({ draft: task.draft }),
    }
  )
);
