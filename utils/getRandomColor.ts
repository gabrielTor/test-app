import { COLOR_SCHEMES, Theme } from "@/constants/Colors";

export const getRandomColor = (previousTheme: Theme): Theme => {
  let randomIndex: number;

  do {
    randomIndex = Math.floor(Math.random() * COLOR_SCHEMES.length);
  } while (COLOR_SCHEMES[randomIndex].background === previousTheme.background);

  return COLOR_SCHEMES[randomIndex];
};
