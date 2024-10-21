import { useTheme } from "@/context/Theme.context";
import { View, type ViewProps } from "react-native";

export function ThemedView({ style, ...props }: ViewProps) {
  const { theme } = useTheme();

  return (
    <View style={[{ backgroundColor: theme.background }, style]} {...props} />
  );
}
