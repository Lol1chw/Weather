import { create } from "zustand";

type loadingStore = {
    isLoading: boolean;
    setLoading: (value: boolean) => void
}

export const loadingStore = create<loadingStore>((set) => ({
  isLoading: true,
  setLoading: (value: boolean) => set(() => ({isLoading: value}))
}));

export const loadingSelectors = {
    isLoading: () => loadingStore((state) => state.isLoading),
    setLoading: () => loadingStore((state)=> state.setLoading)
}