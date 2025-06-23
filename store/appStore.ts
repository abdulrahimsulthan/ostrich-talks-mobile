import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import storage from "./storage";
import login from "@/services/login";
import sync from "@/services/sync";
import logout from "@/services/logout";

export interface appState {
  loading: boolean;
  loggedIn: boolean;
  isSyncing: boolean;
  lastSynced: number;
  onboardingComplete: boolean;
  completeOnboarding: () => void;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  sync: () => void;
}

const appStore = create<appState>()(
  persist(
    (set) => ({
      loading: false,
      loggedIn: false,
      isSyncing: false,
      lastSynced: 0,
      onboardingComplete: false,
      completeOnboarding: () => set({ onboardingComplete: true }),
      login: login(set),
      logout: logout(set),
      sync: sync(set),
    }),
    {
      name: "app-store",
      storage: createJSONStorage(() => ({
        getItem: (key) => storage.getString(key) ?? null,
        setItem: (key, value) => storage.set(key, value),
        removeItem: (key) => storage.delete(key),
      })),
    }
  )
);

export default appStore;
