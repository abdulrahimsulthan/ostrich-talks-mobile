import { Stack, Tabs } from "expo-router";

export default function HomeLayout() {
    return (
        <Stack screenOptions={{ headerShown: true }}>
            <Stack.Screen name="index" options={{ headerShown: false} }/>

            <Stack.Screen name="streak" options={{
                presentation: "fullScreenModal",
                title: "Streak",
            }}/>
            <Stack.Screen name="shop" options={{
                presentation: "fullScreenModal",
                title: "Shop",
            }}/>
            <Stack.Screen name="life" options={{
                presentation: "fullScreenModal",
                title: "Life",
            }}/>
            <Stack.Screen name="plan" options={{
                presentation: "fullScreenModal",
                title: "Plan",
            }}/>
            <Stack.Screen name="score" options={{
                presentation: "fullScreenModal",
                title: "Score",
            }}/>
        </Stack>
    )
};
