import { Link } from "expo-router";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ui/ThemedText";
import { ThemedView } from "@/components/ui/ThemedView";
import { useTheme } from "@/context/Theme.context";

export default function NotFoundScreen() {
  const { theme } = useTheme();
  return (
    <ThemedView style={styles().container}>
      <ThemedText style={styles().mainText}>
        This screen doesn't exist.
      </ThemedText>
      <Link href="/" style={styles(theme.buttonBg).link}>
        <ThemedText>Go to home screen!</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = (buttonBg?: string) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
    },
    link: {
      marginTop: 15,
      padding: 15,
      backgroundColor: buttonBg,
      borderRadius: 15,
      fontWeight: 600,
    },
    mainText: {
      fontSize: 20,
    },
  });
