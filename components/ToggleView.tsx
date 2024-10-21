import { useTheme } from "@/context/Theme.context";
import { ReactNode } from "react";
import { Pressable, StyleSheet } from "react-native";

type Props = {
  children: ReactNode;
};

export function ToggleView({ children }: Props) {
  const { toggleTheme, theme } = useTheme();

  return (
    <Pressable style={styles(theme.background).container} onPress={toggleTheme}>
      {children}
    </Pressable>
  );
}

const styles = (backgroundColor: string) =>
  StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      backgroundColor,
    },
  });
