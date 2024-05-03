import { Lens } from "@dhmk/zustand-lens";
import { Store } from "./useStore";

export type Test2 = {
  test2: string | null;
  updateTest2: (value: string | null) => void;
  resetTest2: () => void;
};

export const test2State: Lens<Test2, Store> = (set) => ({
  test2: null,
  updateTest2: (value) => set({ test2: value }),
  resetTest2: () => set({ test2: null }),
});
