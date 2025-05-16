import colors from "@/constants/colors";
import overviewStore from "@/store/overviewStore";
import { MaterialIcons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function HomeLayout() {
    const {feathers} = overviewStore()
    const shopRight = () =>
        <View className="flex-row items-center justify-center gap-2">
            <MaterialIcons name="monetization-on" size={24} color={colors.primary} />
            <Text className="text-textSecondary font-bold text-lg">{feathers}</Text>
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
            <Stack.Screen name="willpower" options={{
                presentation: "fullScreenModal",
                title: "Will Power",
            }} />
            <Stack.Screen name="plan" options={{
                presentation: "fullScreenModal",
                title: "Plan",
            }} />
            <Stack.Screen name="alterEgo" options={{
                presentation: "fullScreenModal",
                title: "Alter Egos",
            }} />
        </Stack>
    )
};
