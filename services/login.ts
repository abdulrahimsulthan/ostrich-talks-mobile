import { appState } from "@/store/appStore";
import { ZustandSet } from "@/types";

export default (set: ZustandSet<appState>) => async () => {
  set({ loading: true });
  try {
    set({ loggedIn: true });
  } catch (message) {
    console.error({ from: "login", message });
  } finally {
    set({ loading: false });
  }
};