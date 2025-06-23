import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import appStore from '@/store/appStore'

const login = () => {
  const {login} = appStore()
  return (
    <View className='flex-1 justify-center items-center'>
      <TouchableOpacity 
        className='bg-primary px-4 py-2 rounded'
        onPress={login}
      >
        <Text>login</Text>
      </TouchableOpacity>
      
    </View>
  )
}

export default login