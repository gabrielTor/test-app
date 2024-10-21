import { COLOR_SCHEMES, Theme } from "@/constants/Colors";

export const getRandomColor = (): Theme => {
  const randomIndex: number = Math.floor(Math.random() * COLOR_SCHEMES.length);

  return COLOR_SCHEMES[randomIndex];
};
