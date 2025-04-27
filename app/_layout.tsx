import { Stack } from "expo-router";
import './global.css'
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export default function RootLayout() {
  const insets = useSafeAreaInsets();

  return <SafeAreaProvider>
    <View className="flex-1 bg-background" style={{
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right
      }}>
      <Stack screenOptions={{ headerShown: false }} >
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)/index" />
      </Stack>
    </View>
    <StatusBar style="dark" />
  </SafeAreaProvider>
}
