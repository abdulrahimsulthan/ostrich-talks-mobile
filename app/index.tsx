import { PermissionsAndroid, Text, View } from "react-native";
import messaging from '@react-native-firebase/messaging'
import { useEffect } from "react";

const requestUserPermission = async () => {
  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS)
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    const token = await messaging().getToken()
    console.log('FCM token ', token)
  }
};

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
