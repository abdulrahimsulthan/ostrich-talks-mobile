import colors from "@/constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function HomeLayout() {
    const shopRight = () =>
        <View className="flex-row items-center justify-center gap-2">
            <MaterialIcons name="diamond" size={20} color={colors.primary} />
            <Text className="text-textSecondary">100</Text>
        </View>


    return (
        <Stack screenOptions={{ headerShown: true }}>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="streak" options={{
                presentation: "fullScreenModal",
                title: "Streak",
            }} />
            <Stack.Screen name="shop" options={{
                presentation: "fullScreenModal",
                title: "Shop",
                headerRight: shopRight,
            }} />
            <Stack.Screen name="heart" options={{
                presentation: "fullScreenModal",
                title: "Hearts",
            }} />
            <Stack.Screen name="plan" options={{
                presentation: "fullScreenModal",
                title: "Plan",
            }} />
            <Stack.Screen name="score" options={{
                presentation: "fullScreenModal",
                title: "Score",
            }} />
        </Stack>
    )
};
