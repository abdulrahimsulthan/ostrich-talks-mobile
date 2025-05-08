import colors from "@/constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, View, Text, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const buttons: {
  icon: "monetization-on" | "whatshot" | "favorite" | "sell" | "score";
  label: string;
  active: boolean;
  path: "/home/shop" | "/home/streak" | "/home/heart" | "/home/plan" | "/home/score";
}[] = [
    { icon: 'score', label: '26', active: false, path: "/home/score" },
    { icon: 'monetization-on', label: '1', active: false, path: "/home/shop" },
    { icon: 'whatshot', label: '2', active: false, path: "/home/streak" },
    { icon: 'favorite', label: '3', active: false, path: "/home/heart" },
    { icon: 'sell', label: 'PRO', active: true, path: "/home/plan" },
  ];


export default function Index() {

  const router = useRouter()
  return (
    <SafeAreaView className="bg-background">
      {/* Navbar */}
      <View className="flex-row w-full py-4 justify-around">
        {buttons.map((button, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => { router.push(button.path) }}
            className="flex-row items-center justify-center p-2 rounded-md"
          >
            <MaterialIcons name={button.icon} size={24} color={colors.primary} />
            <Text className="text-textSecondary ml-2">{button.label}</Text>
            {button.active && (
              <View className="absolute w-2 h-2 bg-primaryDark rounded-full top-0 right-0" />
            )}
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-1 items-center  bg-background h-screen-safe">
          {/* TODO: Motivative banner */}
          <View className="w-[90%] h-20 bg-primary rounded-md flex-row items-center justify-between px-4">
            <View>
              <Text className="text-white text-lg">Fiery Streak!</Text>
              <Text className="text-white">1 more lesson to get a hotter streak!</Text>
            </View>
            <MaterialIcons name="whatshot" size={24} color="white" />
          </View>

          {/* TODO: Lession Content */}
          <View className="flex-1 items-center justify-center w-full px-4">
            <Text className="text-textPrimary">Welcome to Ostrich Talks!</Text>
            <Text className="text-textSecondary">This is where you can find your lessons.</Text>
            <Text className="text-textSecondary">Click on the buttons below to mock levels.</Text>

            <View className="w-full flex-row justify-around items-center mt-4" >
              <TouchableOpacity>
                <Text className="text-white bg-primary border border-border rounded-md px-4 py-2 ">Start Lession</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text className="text-white bg-primary rounded-md px-4 py-2 ">End Lession</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

    </SafeAreaView>

  );
}

