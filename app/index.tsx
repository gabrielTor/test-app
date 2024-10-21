import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/ui/ThemedText";
import { ThemedView } from "@/components/ui/ThemedView";
import { ToggleView } from "@/components/ToggleView";

export default function HomeScreen() {
  return (
    <ToggleView>
      <ThemedView>
        <ThemedText style={styles.welcome}>👋 Hello there</ThemedText>
        <ThemedText style={styles.helperText}>
          Click on any part of the screen to see the theme change!
        </ThemedText>
      </ThemedView>
    </ToggleView>
  );
}

const styles = StyleSheet.create({
  welcome: { fontSize: 30, textAlign: "center" },
  helperText: { fontSize: 15, marginTop: 10 },
});
