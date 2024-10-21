import { ThemedText } from "@/components/ui/ThemedText";
import { ThemedView } from "@/components/ui/ThemedView";
import { ToggleView } from "@/components/ToggleView";

export default function HomeScreen() {
  return (
    <ToggleView>
      <ThemedView>
        <ThemedText>👋 Hello there</ThemedText>
      </ThemedView>
    </ToggleView>
  );
}
