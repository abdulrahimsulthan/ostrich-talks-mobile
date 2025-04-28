import { useEffect } from "react";
import requestUserPermission from "../../services/firebase/requestUserPermission";
import colors from "@/constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, View, Text } from "react-native";

 const buttons: { icon: "monetization-on" | "whatshot" | "favorite"; label: string, active: boolean }[] = [
    { icon: 'monetization-on', label: '1', active: true },
    { icon: 'whatshot', label: '2', active: false },
    { icon: 'favorite', label: '3', active: false },
  ];


export default function Index() {
  useEffect(() => {
    requestUserPermission()
  }, [])

  return (
    <View className="flex-1 items-center bg-background">
      <View className="flex-row w-full py-4 justify-around">
        {buttons.map((button, index) => (
          <TouchableOpacity
            key={index}
            className="flex-row items-center justify-center p-2 rounded-md"
          >
            <MaterialIcons name={button.icon} size={24} color={colors.primary}/>
            <Text className="text-blue-500 ml-2">{button.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

