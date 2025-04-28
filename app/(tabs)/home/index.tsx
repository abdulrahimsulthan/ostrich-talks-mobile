import colors from "@/constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, View, Text } from "react-native";
import { useRouter } from "expo-router";

 const buttons: { 
  icon: "monetization-on" | "whatshot" | "favorite"; 
  label: string;
  active: boolean;
  path: "/home/shop" | "/home/streak" | "/home/life";
}[] = [
    { icon: 'monetization-on', label: '1', active: true, path: "/home/shop" },
    { icon: 'whatshot', label: '2', active: false, path: "/home/streak" },
    { icon: 'favorite', label: '3', active: false, path: "/home/life" },
  ];


export default function Index() {

  const router = useRouter()
  return (
    <View className="flex-1 items-center bg-background">
      <View className="flex-row w-full py-4 justify-around">
        {buttons.map((button, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {router.push(button.path)}}
            className="flex-row items-center justify-center p-2 rounded-md"
          >
            <MaterialIcons name={button.icon} size={24} color={colors.primary}/>
            <Text className="text-textSecondary ml-2">{button.label}</Text>
            {button.active && (
              <View className="absolute w-2 h-2 bg-primaryDark rounded-full top-0 right-0" />
            )}
          </TouchableOpacity>
        ))}
      </View>
      
    </View>
  );
}

