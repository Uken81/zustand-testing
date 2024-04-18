import { StateCreator } from "zustand";

export type Test1 = {
  test1: string | null;
  updateTest1: (value: string | null) => void;
  resetTest1: () => void;
};

export const createTest1Slice: StateCreator<Test1> = (set) => ({
  test1: null,
  updateTest1: (value) => set({ test1: value }),
  resetTest1: () => set({ test1: null }),
});
