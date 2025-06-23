import { appState } from "@/store/appStore";
import { ZustandSet } from "@/types";
import { router } from "expo-router";

export default (set: ZustandSet<appState>) => async () => {
  set({ loading: true });
  try {
    set({ loggedIn: true });
    router.replace('/home')
  } catch (message) {
    console.error({ from: "login", message });
  } finally {
    set({ loading: false });
  }
};