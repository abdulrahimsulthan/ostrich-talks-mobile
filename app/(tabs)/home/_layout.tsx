import { Stack, Tabs } from "expo-router";

export default function HomeLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="streak" options={{
                presentation: "formSheet",
            }}/>
            <Stack.Screen name="shop" options={{
                presentation: "formSheet",
            }}/>
            <Stack.Screen name="life" options={{
                presentation: "formSheet",
            }}/>
            <Stack.Screen name="plan" options={{
                presentation: "formSheet",
            }}/>
        </Stack>
    )
};
