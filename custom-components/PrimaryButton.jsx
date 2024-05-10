import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const PrimaryButton = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
        <TouchableOpacity 
            onPress={handlePress} 
            activeOpacity={0.7} 
            disabled={isLoading}
            className={`bg-secondary rounded-xl min-h-[62] justify-center items-center ${isLoading ? 'opacity-50' : ''} ${containerStyles}`}
        >
            <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
                {title}
            </Text>
        </TouchableOpacity>
  )
}

export default PrimaryButton