import { create } from "zustand";

type Store = {
  options: [];
  setOptions: (uniqueOptions: any) => void;
  city: string;
  setCity: (value: string) => void;
  inputValue: string;
  setInputValue: (element: any) => void;
  weather: any;
  setWeather: (data: any) => void;
  isCelsius: boolean;
  toggleFormat: () => void;
};

export const useStore = create<Store>((set) => ({
  city: "auto:ip",
  setCity: (value: string) => set(() => ({ city: value })),
  options: [],
  setOptions: (uniqueOptions: any) => set(() => ({ options: uniqueOptions })),
  inputValue: "",
  setInputValue: (element: any) => set(() => ({ inputValue: element })),
  weather: {},
  setWeather: (data: any) => set(() => ({ weather: data })),
  isCelsius: true,
  toggleFormat: () => set((state) => ({ isCelsius: !state.isCelsius })),
}));

export const selectors = {
  city: () => useStore((state) => state.city),
  setCity: () => useStore((state) => state.setCity),

  options: () => useStore((state) => state.options),
  setOptions: () => useStore((state) => state.setOptions),

  inputValue: () => useStore((state) => state.inputValue),
  setInputValue: () => useStore((state) => state.setInputValue),

  weather: () => useStore((state) => state.weather),
  setWeather: () => useStore((state) => state.setWeather),

  isCelsius: () => useStore((state) => state.isCelsius),
  toggleFormat: () => useStore((state) => state.toggleFormat),
};

export type { Store };
