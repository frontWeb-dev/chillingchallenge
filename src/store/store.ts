import { create } from "zustand";

interface LongTextStore {
  texts: string[];
  addTexts: (text: string) => void;
  clearTexts: () => void;
}

interface ShortTextStore {
  text: string;
  addText: (text: string) => void;
  clearText: () => void;
}

export const useLongTextStore = create<LongTextStore>((set) => ({
  texts: [],
  addTexts: (text) => set((state) => ({ texts: [...state.texts, text] })),
  clearTexts: () => set({ texts: [] }),
}));

export const useShortTextStore = create<ShortTextStore>((set) => ({
  text: "",
  addText: (text) => set(() => ({ text: text })),
  clearText: () => set({ text: "" }),
}));
