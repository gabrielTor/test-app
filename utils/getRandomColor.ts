import { COLOR_SCHEMES } from "@/constants/Colors";

export const getRandomColor = (): { background: string; text: string } => {
  const randomIndex: number = Math.floor(Math.random() * COLOR_SCHEMES.length);

  return COLOR_SCHEMES[randomIndex];
};
