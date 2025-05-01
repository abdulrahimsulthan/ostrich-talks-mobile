import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import colors from '@/constants/colors'

const shop = () => {
  return (
    <ScrollView className='flex-1 bg-background'>
      <View className='bg-background items-center '>

        {/* CTA subscription */}
        <View className='w-[90%] jsutify-center items-center bg-background p-4 rounded-lg shadow-md mt-4'>
          <Text className='text-textPrimary text-2xl font-bold'>Pro</Text>
          <Text className='text-textSecondary text-base'>Unlock all features with a subscription</Text>
          <TouchableOpacity className='bg-primary rounded-lg p-4 mt-4 w-full'>
            <Text className='text-white text-center text-lg font-bold'>Try 1 week for Free</Text>
          </TouchableOpacity>
        </View>

        {/* Special offers */}
        <View className='flex-1 my-4 bg-background justify-center'>
          <View className='mb-2 w-[90%]'>
            <Text className='text-xl font-bold'>Special Offers</Text>
          </View>

          <View className='flex-row items-center justify-between p-6 rounded-lg shadow-md mb-2 w-[90%] gap-4'>
            <MaterialIcons name="lock" size={60} color={colors.textSecondary} />
            <View className='w-[75%]'>
              <Text className='font-bold text-lg'>Early Bird Chest</Text>
              <Text className='text-wrap'>Do a lession between 6:00 am and noon to unlock this chest.</Text>
              <Text className='text-lg'>Locked</Text>
            </View>
          </View>

          <View className='flex-row items-center justify-between p-6 rounded-lg shadow-md mb-2 w-[90%] gap-4'>
            <MaterialIcons name="lock" size={60} color={colors.textSecondary} />
            <View className='w-[75%]'>
              <Text className='font-bold text-lg'>Night Owl Chest</Text>
              <Text className='text-wrap'>Do a lession between 6:00 pm and midnight to unlock this chest.</Text>
              <Text className='text-lg'>Locked</Text>
            </View>
          </View>

          <View className='flex-row items-center justify-between p-6 rounded-lg shadow-md mb-2 w-[90%] gap-4'>
            <MaterialIcons name="lock-open" size={60} color={colors.textSecondary} />
            <View className='w-[75%]'>
              <Text className='font-bold text-lg'>Free Chest</Text>
              <Text className='text-wrap'>Watch an ad to earn up to 15 gems.</Text>
              <TouchableOpacity className='bg-primary rounded-md px-4 py-2 mt-2 '>
                <Text className='text-center text-white font-bold'>CLAIM CHEST</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>


      </View>



    </ScrollView>
  )
}

export default shop