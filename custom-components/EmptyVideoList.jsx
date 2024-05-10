import { View, Text, Image } from 'react-native'
import React from 'react'
import {images} from '../constants'
import PrimaryButton from '../custom-components/PrimaryButton'

const EmptyVideoList = () => {
  return (
    <View className="items-center px-9">
        <Image source={images.empty} className="w-[270px] h-[220px]" resizeMode='contain'/>
        <Text className="text-white text-xl font-psemibold">No Videos Found</Text>   
        <Text className="text-gray-100 text-sm font-pregular mt-1">Be the first one to upload a Video</Text> 
        <PrimaryButton title="Create Video" containerStyles={"w-full mt-6"}/>  
    </View>
  )
}

export default EmptyVideoList