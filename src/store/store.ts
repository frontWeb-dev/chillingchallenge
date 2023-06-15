import { create } from "zustand";

interface ImageStore {
  uri: string;
  addUri: (uri: string) => void;
  clearUri: () => void;
}

interface TextStore {
  texts: string[];
  addTexts: (text: string) => void;
  clearTexts: () => void;
}

interface HappyStore {
  happy: string;
  addHappy: (happy: string) => void;
  clearHappy: () => void;
}

interface UserStore {
  user: {
    email?: string;
    nickname?: string;
  };
  setUser: (userInfo: { email: string; nickname: string }) => void;
}

export const useImageStore = create<ImageStore>((set) => ({
  uri: "",
  addUri: (uri) => set(() => ({ uri: uri })),
  clearUri: () => set({ uri: "" }),
}));

export const useTextStore = create<TextStore>((set) => ({
  texts: [],
  addTexts: (text) => set((state) => ({ texts: [...state.texts, text] })),
  clearTexts: () => set({ texts: [] }),
}));

export const useHappyStore = create<HappyStore>((set) => ({
  happy: "",
  addHappy: (happy) => set(() => ({ happy: happy })),
  clearHappy: () => set({ happy: "" }),
}));

export const useUserStore = create<UserStore>((set) => ({
  user: {},
  setUser: (userInfo) => {
    set((state) => ({ user: { ...userInfo } }));
  },
}));

export default useUserStore;
