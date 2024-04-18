import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

import { Test2, createTest2Slice } from "./test2Slice.tsx";
import { Test1, createTest1Slice } from "./test1slice.tsx";
import { mountStoreDevtool } from "simple-zustand-devtools";

export const useBoundStore = create<Test1 & Test2>()(
  persist(
    (...a) => ({
      ...createTest1Slice(...a),
      ...createTest2Slice(...a),
    }),
    {
      name: "state-storage",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({ test1: state.test1, test2: state.test2 }),
    }
  )
);

mountStoreDevtool("Store", useBoundStore);
