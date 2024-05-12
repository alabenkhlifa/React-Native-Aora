import { View, Text, Image } from 'react-native'
import React from 'react'
import {images} from '../constants'
import PrimaryButton from '../custom-components/PrimaryButton'

const EmptyVideoList = () => {
  return (
    <View className="items-center px-9">
        <Image source={images.empty} className="w-[270px] h-[220px]" resizeMode='contain'/>
        <Text className="text-white text-xl text-center font-psemibold">No upcoming trainings</Text>   
        <Text className="text-gray-100 text-center text-sm font-pregular mt-1">You'll see upcoming trainings once your Gym Administrator adds some.</Text> 
    </View>
  )
}

export default EmptyVideoList