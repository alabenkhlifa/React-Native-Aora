import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

import {icons} from '../constants'

const SearchField = ({ value, placeholder, handleChangeText }) => {
  
    const [showPassword, setShowPassword] = useState(false)
    return (
          <View className="w-full h-16 px-4 border-2 border-black-200 bg-black-100 rounded-2xl focus:border-secondary-100 items-center flex-row space-x-4 ">
            <TextInput 
                className="flex-1 text-white text-base mt-0.5 font-pregular"
                value={value}
                placeholder={placeholder}
                placeholderTextColor='#CDCDE0'
                onChangeText={handleChangeText}
            />
            <TouchableOpacity>
              <Image source={icons.search} className="h-5 w-5" resizeMethod='contain'/>
            </TouchableOpacity>
          </View>
      )
    }
    
    export default SearchField