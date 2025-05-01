import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Profile from "@/assets/avatars/profile.svg"
import { MaterialIcons } from '@expo/vector-icons'

const profile = () => {
  return (
    <ScrollView className='flex-1 bg-background'>
      <View className='flex-1 w-full items-center justify-center bg-background'>

        {/* Header */}
        <View className='flex-1 items-center justify-center mt-4 mb-2 p-4 bg-background'>
          <View className='h-40  w-40 rounded-full shadow-lg items-center justify-center'>
            <Profile width={100} height={100} />
          </View>
          <Text className="my-2">John Doe</Text>
          <Text>Joined on 28 Apr 2025</Text>
        </View>

        {/* Social */}
        <View className='w-[90%] flex-1 items-center justify-center my-2 bg-background shadow-md rounded-xl p-4'>
          {/* followers */}
          <View className='flex-row items-center justify-around w-full'>
            <View className='flex-row items-center justify-center gap-4'>
              <Text className='font-bold'>100</Text>
              <Text>Followers</Text>
            </View>
            <View className='flex-row items-center justify-center gap-4'>
              <Text className='font-bold'>50</Text>
              <Text>Following</Text>
            </View>
          </View>

          {/* Add Friends button */}
          <View className='flex-row items-center justify-around w-full mt-4'>
            <TouchableOpacity className='flex-row bg-primary rounded-full px-4 py-3 w-[60%] justify-center items-center gap-4'>
              <MaterialIcons name="person-add" size={24} color="white" />
              <Text className='text-white text-center'>Add Friends</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <MaterialIcons className='px-4 py-3 bg-primary rounded-full' name="share" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </ScrollView>
  )
}

export default profile