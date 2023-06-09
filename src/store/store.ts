import { create } from "zustand";

interface LongTextStore {
  texts: string[];
  addTexts: (text: string) => void;
  clearTexts: () => void;
}

export const useLongTextStore = create<LongTextStore>((set) => ({
  texts: [],
  addTexts: (text) => set((state) => ({ texts: [...state.texts, text] })),
  clearTexts: () => set({ texts: [] }),
}));
