import { useEffect } from "react";
import requestUserPermission from "../services/firebase/requestUserPermission";
import { Text, View } from "react-native";

export default function Index() {
  useEffect(() => {
    requestUserPermission()
  }, [])

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-5xl text-dark-200 font-bold">Welcome!</Text>
    </View>
  );
}
  