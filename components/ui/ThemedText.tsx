import { useTheme } from "@/context/Theme.context";
import { Text, type TextProps } from "react-native";

export function ThemedText({ style, ...props }: TextProps) {
  const { theme } = useTheme();

  return <Text style={[{ color: theme.text }, style]} {...props} />;
}
