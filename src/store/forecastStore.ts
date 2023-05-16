import { create } from "zustand";

type ForecastStore = {
  option: any;
  setOption: (data: any) => void;
};

export const foreCastStore = create<ForecastStore>((set) => ({
  option: {},
  setOption: (data: any) => set(() => ({ option: data })),
}));

export const forecastSelectors = {
  option: () => foreCastStore((state) => state.option),
  setOption: () => foreCastStore((state) => state.setOption),
};
