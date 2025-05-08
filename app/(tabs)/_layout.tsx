import { Tabs } from 'expo-router';
import colors from '@/constants/colors';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';


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
                name="practice"
                options={{
                    title: 'Practice',
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="dumbbell" size={24} color={color}/>
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
                name="quest"
                options={{
                    title: 'Quest',
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="treasure-chest" size={28} color={color} />
                }} />
            
        </Tabs>
    );
}
