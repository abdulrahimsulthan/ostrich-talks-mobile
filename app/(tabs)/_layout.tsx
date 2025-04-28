import { Tabs } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import colors from '@/constants/colors';


export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false, 
            tabBarActiveTintColor: colors.primaryDark, 
            tabBarInactiveTintColor: colors.textSecondary, 
            tabBarLabelStyle: { fontSize: 12 }, 
            tabBarStyle: { 
                backgroundColor: colors.background, 
                height: 80, 
                paddingBottom: 10, 
                paddingTop: 10 
            }
        }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <MaterialIcons size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => <MaterialIcons size={28} name="person" color={color} />
                }} />
            <Tabs.Screen
                name="league"
                options={{
                    title: 'League',
                    tabBarIcon: ({ color }) => <MaterialIcons size={28} name="leaderboard" color={color} />
                }} />
            <Tabs.Screen
                name="reward"
                options={{
                    title: 'Reward',
                    tabBarIcon: ({ color }) => <MaterialIcons size={28} name="star" color={color} />
                }} />
            <Tabs.Screen
                name="feed"
                options={{
                    title: 'Feed',
                    tabBarIcon: ({ color }) => <MaterialIcons size={28} name="notifications" color={color} />
                }} />
        </Tabs>
    );
}
