import { View, Text } from 'react-native'
import React from 'react'

const score = () => {
    return (
        <View className='flex-1 bg-background items-center '>
            <View className='items-center justify-center my-4 py-4'>
                <View className='w-[90%] flex-row items-center justify-between px-4'>
                    <Text className='text-lg font-bold'>26</Text>
                    <View className='flex-1 mx-4 h-4 bg-gray-300 rounded-full'>
                        <View className='h-4 bg-primary rounded-full' style={{ width: '70%' }} />
                    </View>
                    <Text className='text-lg font-bold'>27</Text>
                </View>
                <Text className='text font-bold'>Your English Score is 26</Text>
                <Text className='text-xl font-bold'>More about Score</Text>
            </View>

        </View>
    )
}

export default score