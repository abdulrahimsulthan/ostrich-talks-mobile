import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const reward = () => {
  return (
    <ScrollView className='bg-background'>
      <View className='w-[90%] mx-auto'>

        {/* Weekly Challenge */}
        <View className='my-2 w-full'>
          <Text className='font-bold text-xl'>Weekly Challenge</Text>
          <Text className='text-sm text-gray-500'>4 DAYS</Text>
          <Text>Earn 12 quest points</Text>
          <Text>3 / 12</Text>
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