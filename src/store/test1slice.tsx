import { Lens, Setter } from "@dhmk/zustand-lens";
import { StateCreator } from "zustand";
import { Store } from "./useStore";

export type Test1 = {
  test1: string | null;
  updateTest1: (value: string | null) => void;
  resetTest1: () => void;
};

export const test1State: Lens<Test1, Store> = (set) => ({
  test1: null,
  updateTest1: (value) => set({ test1: value }),
  resetTest1: () => set({ test1: null }),
});
