import { useEffect } from "react";
import requestUserPermission from "../../services/firebase/requestUserPermission";
import { View } from "react-native";

import Head from "@/components/heads";

export default function Index() {
  useEffect(() => {
    requestUserPermission()
  }, [])

  return (
    <View className="flex-1 items-center bg-background">
      <Head />
    </View>
  );
}

