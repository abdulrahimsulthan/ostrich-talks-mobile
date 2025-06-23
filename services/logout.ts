import { appState } from "@/store/appStore";
import { ZustandSet } from "@/types";
import { router } from "expo-router";

export default (set: ZustandSet<appState>) => async () => {
  set({ loading: true });
  try {
    set({ loggedIn: false });
    router.replace('/login')
  } catch (message) {
    console.error({ from: "logout", message });
  } finally {
    set({ loading: false });
  }
};