import { Lens, persistOptions } from "@dhmk/zustand-lens";
import { Store } from "./useStore";

export interface Test1 {
  test1: string | null;
  updateTest1: (value: string | null) => void;
  resetTest1: () => void;
}

export interface PersistedTest1 {
  test1: string | null;
}

export const test1State: Lens<Test1, Store> = (set) => ({
  test1: null,
  updateTest1: (value) => set({ test1: value }),
  resetTest1: () => set({ test1: null }),
  ...persistOptions({
    save: (state) => state,
    load: (persistedState) => persistedState,
  }),
});
