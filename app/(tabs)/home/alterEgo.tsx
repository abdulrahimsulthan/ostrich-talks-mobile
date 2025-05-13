import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'

const user = {
    alterEgo: {
        growth: {
            level: 1,
            title: ["", "Seeker", "Explorer", "Builder", "Connector", "Doer", "Challenger", "Mentor", "Strategist", "Visionary", "Legacy Maker"]
        },
        characters: [
            {
                name: 'Heart Forge',
                type: 'Home',
                completed: 2,
                total: 10,
            },
            {
                name: 'Echo Flare',
                type: 'Social',
                completed: 4,
                total: 10,
            },
            {
                name: 'Task Born',
                type: 'Office',
                completed: 1,
                total: 10,
            },
            {
                name: 'Mind Spire',
                type: 'Leadership',
                completed: 4,
                total: 10,
            }
        ]

    }
}

const alterEgo = () => {
    const { characters, growth } = user.alterEgo
    const { total, completed } = characters.reduce((acc, item) => ({
        completed: acc.completed + item.completed,
        total: acc.total + item.total
    }), { completed: 0, total: 0 })
    const levelOffset = Math.ceil(total / characters.length)
    const level = Math.floor(completed / levelOffset) + 1
    const levelMod = completed % levelOffset
    const levelPercentage = (levelMod == levelOffset ? levelOffset : levelMod) / levelOffset * 100

    console.log({ total, completed, levelOffset, level, levelMod, levelPercentage })
    return (
        <ScrollView className='bg-background'>
            <View className='flex-1 bg-background w-[90%] mx-auto '>
                {/* Alter Egos Header */}
                <View className='items-center justify-center gap-2 my-4 py-4'>
                    <Image source={require('@/assets/avatars/penguin.png')} style={{ width: 100, height: 120, borderRadius: 20 }} />
                    <View className='w-[90%] flex-row items-center justify-between px-4'>
                        <Text className='font-bold'>{level}</Text>
                        <View className='flex-1 mx-4 h-4 bg-gray-300 rounded-full'>
                            <View className='h-4 bg-primary rounded-full' style={{ width: `${levelPercentage}%` }} />
                        </View>
                        <Text className='font-bold'>{level + 1}</Text>
                    </View>
                    <Text className=''>Your Level is {level}</Text>
                    <Text className='text-lg font-bold'>You are a {growth.title[level]}</Text>
                </View>

                <View>
                    <Text className='text-xl font-bold'>Your Alter Egos</Text>
                </View>
                {/* Alter Egos List */}
                {user.alterEgo.characters.map(({ name, type, completed, total }, key) =>
                    <View className='w-[90%] flex-row justify-start items-center mx-auto gap-2 my-4' key={key}>
                        <Image source={require('@/assets/avatars/penguin.png')} style={{ width: 70, height: 70, borderRadius: 15 }} />
                        <View className='justify-center w-[75%] gap-3 p-2'>
                            <Text className='font-semibold'>{name} ( {type} )</Text>
                            <View className='h-4 bg-gray-300 rounded-full'>
                                <View className='h-4 bg-primary rounded-full' style={{ width: `${(completed / total) * 100}%` }} />
                            </View>
                        </View>
                    </View>
                )}

            </View>
        </ScrollView>

    )
}

export default alterEgo