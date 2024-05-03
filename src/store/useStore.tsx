import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { mountStoreDevtool } from "simple-zustand-devtools";
import { lens, withLenses } from "@dhmk/zustand-lens";
import { Test1, test1State } from "./test1State.ts";
import { Test2, test2State } from "./test2State.ts";

export interface Store {
  test1State: Test1;
  test2State: Test2;
}

export const useStore = create<Store>()(
  persist(
    withLenses({
      test1State: lens<Test1, Store>(test1State),
      test2State: lens<Test2, Store>(test2State),
    }),
    {
      name: "state-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

mountStoreDevtool("Store", useStore);
