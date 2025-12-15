import { create } from "zustand";

export const useStore = create((set) => ({
  counter: 0,
  increment: () => set((state: any) => ({ counter: state.counter + 1 })),
}));
