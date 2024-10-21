import { ThemeProvider } from "@/context/Theme.context";
import { Stack } from "expo-router";

const options = {
  headerShown: false,
};

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="index" options={options} />
        <Stack.Screen name="+not-found" options={options} />
      </Stack>
    </ThemeProvider>
  );
}
