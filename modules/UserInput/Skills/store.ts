import create from "zustand";
import { devtools } from "zustand/middleware";
import { SkillDataObject } from "./types";

const updateArray = (
  array: Array<SkillDataObject>,
  index: number,
  obj: SkillDataObject
) => [...array.slice(0, index), obj, ...array.slice(index + 1)];

interface SkillStore {
  format: "CATEGORIES" | "TAGS",
  isDisabled: boolean;
  toggleDisabled: () => void;
  toggleFormat: () => void;
  data: Array<SkillDataObject>;
  add: (obj: SkillDataObject) => void;
  update: (index: number, key: string, value: any) => void;
}

const useSkillStore = create<SkillStore>(
  devtools(
    (set, get) => ({
      format: "CATEGORIES",
      isDisabled: false,
      toggleDisabled: () => set((state) => ({ isDisabled: !state.isDisabled })),
      toggleFormat: () => set((state) => ({format: state.format === "CATEGORIES" ? "TAGS" : "CATEGORIES"})),
      data: [],
      add: (obj) => set((state) => ({ data: [...state.data, obj] })),
      //Updates an object at a particular index with a key and value pair.
      update: (index, key, value) => {
        const obj = { ...get().data[index], [key]: value };
        set((state) => ({ data: updateArray(state.data, index, obj) }));
      },
    }),
    "Skills"
  )
);

export default useSkillStore;