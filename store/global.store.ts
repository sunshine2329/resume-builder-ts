import create from "zustand";
import { devtools } from "zustand/middleware";
import { Status } from "../utils/constants";
import { GlobalStore } from "./types";

const useGlobalStore = create<GlobalStore>(
  devtools(
    (set) => ({
      init: false,
      isLoading: false,
      grayscaleFilter: false,
      saveStatus: Status.idle,
      setLoading: (value) => set({ isLoading: value }),
      setInit: (value) => set({ init: value }),
      toggleGrayscaleFilter: () =>
        set((state) => ({ grayscaleFilter: !state.grayscaleFilter })),
      setSaveStatus: (status) => set({ saveStatus: status }),
    }),
    "Global"
  )
);

export default useGlobalStore;
