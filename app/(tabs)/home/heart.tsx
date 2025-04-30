import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import colors from '@/constants/colors'

interface Heart {
  id: number;
  icon: "favorite";
  color: string;
}

const getHearts = (): Heart[] => {
  const currHeart = 3;
  const maxHeart = 5;
  return Array.from({ length: maxHeart }, (_, i) => ({
      id: i,
      icon: 'favorite',
      color: i < currHeart ? colors.primary : colors.textPrimary,
    }
  ))
}

const Heart = () => {
  return (
    <ScrollView className='flex-1 bg-background'>
      <View className='bg-background items-center justify-center'>
        {/* Heart Banner */}
        <View className='items-center justify-center py-4'>
          <MaterialIcons name='favorite' size={175} color={colors.primary} />
          <Text className='text-textPrimary text-2xl'>Hearts</Text>
        </View>

        {/* Heart Counter */}
        <View className='items-center justify-between rounded-lg shadow-md p-4 my-4 w-[90%]'>
          <Text className='p-2 mb-2 '>You get 5 free Hearts everyday</Text>
          <View className='flex-row  w-[90%] items-center justify-around p-2 mb-2'>
            {
              getHearts().map((item) => (
                <MaterialIcons name={item.icon} size={24} color={item.color} key={item.id}/>
              ))
            }
          </View>
        </View>

        {/* Refill Hearts */}
        <TouchableOpacity>
          <View className='flex-row justify-between items-center rounded-lg bg-primary p-6 my-4 w-[90%]'>
            <View className='flex-row items-center'>
              <MaterialIcons name='favorite' size={24} color="white" />
              <Text className='text-xl text-white ml-2'>Refill Hearts</Text>
            </View>
            <View className='flex-row items-center justify-center'>
              <MaterialIcons name='diamond' size={24} color="white" />
              <Text className='text-xl text-white ml-2'>300</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Unlimited Hearts CTA subscription pro */}
        <TouchableOpacity>
          <View className='flex-row justify-between items-center rounded-lg bg-primary p-6 my-4 w-[90%]'>
            <View className='flex-row items-center'>
              <MaterialIcons name='favorite' size={24} color="white" />
              <Text className='text-xl text-white ml-2'>GET Unlimited Hearts</Text>
            </View>
            <MaterialIcons name='diamond' size={24} color="white" />
          </View>
        </TouchableOpacity>

        {/* Earn Hearts */}
        <TouchableOpacity>
          <View className='flex-row justify-between items-center rounded-lg bg-primary p-6 my-4 w-[90%]'>
            <View className='flex-row items-center'>
              <MaterialIcons name='favorite' size={24} color="white" />
              <Text className='text-xl text-white ml-2'>Watch ad to earn Hearts</Text>
            </View>
            <View />
          </View>
        </TouchableOpacity>


      </View>
    </ScrollView>
  )
}

export default Heart