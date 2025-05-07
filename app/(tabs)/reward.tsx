import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import colors from '@/constants/colors'

const reward = () => {
  return (
    <ScrollView className='bg-background'>
      <View className='w-[90%] mx-auto mt-2'>

        {/* Weekly Challenge */}
        <View className='flex-row justify-between items-center my-2 w-full shadow-md rounded-lg p-4 bg-background'>
          <View className='w-[60%]'>
            <View className='mb-2'>
              <Text className='font-bold text-xl mb-1'>Weekly Challenge</Text>
              <View className='flex-row items-center'>
                <MaterialIcons className='mr-2' name="timelapse" size={20} color={colors.primary} />
                <Text className='text-sm text-gray-500'>4 DAYS</Text>
              </View>
            </View>

            <Text className='text-lg mb-2'>Earn 12 quest points</Text>

            {/* progress bar */}
            <View className='flex-1 h-6 bg-gray-300 rounded-full w-full justify-center items-center'>
              <Text className='text-textPrimary z-10'>3 / 12</Text>
              <View className='absolute left-0 h-6 bg-primary rounded-full ' style={{ width: '25%' }} >
              </View>
            </View>
          </View>

          <MaterialCommunityIcons className='mr-2' name="treasure-chest" size={100} color={colors.primary} />
        </View>

        {/* Friends Quest */}
        <View className='my-2 w-full'>
          <Text className='font-bold text-xl'>Friends Quest</Text>
          <Text className='text-sm text-gray-500'>3 DAYS</Text>
          <Text>Complete 5 lessons</Text>
          <Text>2 / 5</Text>
          <Text>You </Text>
          <Text>1 lession</Text>
          <Text>John Doe</Text>
          <Text>0 lessons</Text>
          <View className='flex-row justify-around'>
            <TouchableOpacity className='bg-primary px-4 py-2 rounded-md'>
              <Text className='text-white'>Nudge</Text>
            </TouchableOpacity>
            <TouchableOpacity className='bg-primary px-4 py-2 rounded-md'>
              <Text className='text-white'>Gift</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Daily Quests */}
        <View className='my-2 w-full'>
          <Text className='font-bold text-xl'>Daily Quests</Text>
          <Text className='text-sm text-gray-500'>50 MINUTES</Text>
          <View>
            <Text>Start a Streak</Text>
            <Text>1 / 1</Text>
          </View>
          <View>
            <Text>Complete 2 lessons</Text>
            <Text>1 / 2</Text>
          </View>
          <View>
            <Text>Score 90% or higher in 4 lessons</Text>
            <Text>1 / 4</Text>
          </View>
        </View>

      </View>
    </ScrollView>
  )
}

export default reward