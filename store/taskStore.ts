import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TaskMutationProps } from "@/types/task";
import { Description } from "@radix-ui/react-dialog";

const initialDraft = {
  title: "",
  description: "",
  priority: 1,
  status: "undone",
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
      setDraft: (note) => set(() => ({ draft: note })),
      clearDraft: () => set({ draft: initialDraft }),
    }),
    {
      name: "new-note",
      partialize: (note) => ({ draft: note.draft }),
    }
  )
);
