import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import colors from '@/constants/colors'

const streak = () => {
  return (
  <ScrollView>
    <View className='bg-background items-center justify-center'>

      {/* streak banner */}
      <View className='flex-row items-center justify-between bg-primary p-4 rounded-lg shadow-md my-4 w-[90%]'>
        <View>
          <Text className='text-3xl text-white py-4'>1 Day Streak</Text>
          <Text className='text-white mb-1'> This is your longest streak, don't stop.</Text>
        </View>
        <MaterialIcons name="whatshot" size={40} color="white" />
      </View>

      {/* streak timer CTA for lessions*/}
      <View className='flex-row items-center justify-start p-4 rounded-lg shadow-md my-4 w-[90%]'>
        <Ionicons name="timer-outline" size={24} color="red" />
        <View className='ml-2 p-2'>
          <Text className='text-textPrimary'>3 hours until your streak resets!</Text>
          <Text className='text-textPrimary mt-2'>START LESSION</Text>
        </View>
      </View>

      {/* streak history */}
      <View className='flex-1 items-center justify-between bg-primary p-4 rounded-lg shadow-md my-4 w-[90%]'>
        <View className='w-full flex-row items-center justify-between'>
            <Text className='text-lg text-white'>Streak Calendar</Text>
           <MaterialIcons name="history" size={24} color="white" />
        </View>
        <View className='w-full flex-1 items-center justify-end bg-background mt-4 h-[275] p-3 shadow-md rounded-lg'>
          <View className='flex-row justify-end items-center w-full p-2'>
            <Text className='text-lg text-primary'>Last 7 days</Text>
            <MaterialIcons name="arrow-forward-ios" size={24} color={colors.primary} />
          </View>
        </View>
      </View>
     
      
    </View>
  </ScrollView>
  )
}

export default streak
