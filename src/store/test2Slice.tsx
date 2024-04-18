import { StateCreator } from "zustand";

export type Test2 = {
  test2: string | null;
  updateTest2: (value: string | null) => void;
  resetTest2: () => void;
};

export const createTest2Slice: StateCreator<Test2> = (set) => ({
  test2: null,
  updateTest2: (value) => set({ test2: value }),
  resetTest2: () => set({ test2: null }),
});
