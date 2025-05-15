import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import storage from "./storage";

interface userState {
  name: string;
  setName: (name: string) => void;
}

const userStore = create<userState>()(
    persist(
      (set) => ({
        name: "",
        setName: (name: string) => set({ name }),
      }),
      {
        name: "user-store",
        storage: createJSONStorage(() => ({
          getItem: (key) => storage.getString(key) ?? null,
          setItem: (key, value) => storage.set(key, value),
          removeItem: (key) => storage.delete(key),
        })),
      }
    )
);

export default userStore;
