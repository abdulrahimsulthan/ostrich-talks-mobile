import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Profile from "@/assets/avatars/profile.svg"

const profile = () => {
  return (
    <ScrollView className='flex-1 bg-background'>
      {/* Header */}
      <View className='flex-1 items-center justify-center mt-4 mb-2 p-4 bg-background'>
        <View className='h-40  w-40 rounded-full shadow-lg items-center justify-center'>
          <Profile width={100} height={100} />
        </View>
        <Text className="my-2">John Doe</Text>
        <Text>Joined on 28 Apr 2025</Text>
      </View>

    </ScrollView>
  )
}

export default profile