import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

const world = () => {
  return (
    <ScrollView className='bg-background'>
      <View className='w-[90%] mx-auto'>
        {/* Conversation */}
        <View className='my-4 gap-4'>
          <Text className='text-xl '>Conversation</Text>
          <TouchableOpacity className='flex-row items-center justify-between bg-primary p-4 rounded-lg shadow-md'>
            <Text className='text-white'>Speak</Text>
            <MaterialIcons name='mic' color="white" size={24}/>
          </TouchableOpacity>
          <TouchableOpacity className='flex-row items-center justify-between bg-primary p-4 rounded-lg shadow-md'>
            <Text className='text-white'>Listen</Text>
            <MaterialIcons name='headphones' color="white" size={24}/>
          </TouchableOpacity>
        </View>

        {/* Your Collections */}
        <View className='my-4 gap-4'>
          <Text className='text-xl '>Your Collections</Text>
          <TouchableOpacity className='flex-row items-center justify-between bg-primary p-4 rounded-lg shadow-md'>
            <Text className='text-white'>Mistakes</Text>
            <MaterialIcons name='repeat' color="white" size={24}/>
          </TouchableOpacity>
          <TouchableOpacity className='flex-row items-center justify-between bg-primary p-4 rounded-lg shadow-md'>
            <Text className='text-white'>Stories</Text>
            <MaterialIcons name='book' color="white" size={24}/>
          </TouchableOpacity>
        </View>
        
      </View>
    </ScrollView >
  )
}

export default world