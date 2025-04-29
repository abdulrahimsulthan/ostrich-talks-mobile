import colors from "@/constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, View, Text } from "react-native";
import { useRouter } from "expo-router";

const buttons: {
  icon: "monetization-on" | "whatshot" | "favorite" | "sell";
  label: string;
  active: boolean;
  path: "/home/shop" | "/home/streak" | "/home/life" | "/home/plan";
}[] = [
    { icon: 'monetization-on', label: '1', active: true, path: "/home/shop" },
    { icon: 'whatshot', label: '2', active: false, path: "/home/streak" },
    { icon: 'favorite', label: '3', active: false, path: "/home/life" },
    { icon: 'sell', label: 'PRO', active: false, path: "/home/plan" },
   
  ];


export default function Index() {

  const router = useRouter()
  return (
    <View className="flex-1 items-center bg-background">
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

      {/* TODO: Lession Content */}
      <View className="flex-1 items-center justify-center w-full px-4">
        <Text className="text-textPrimary">Welcome to the Home Screen!</Text>
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
  );
}

