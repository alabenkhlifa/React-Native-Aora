import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import { images } from '../../constants'
import FormField from '../../custom-components/FormField'
import PrimaryButton from '../../custom-components/PrimaryButton'
import { Link, router } from 'expo-router'

const SignIn = () => {

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  return (
    <SafeAreaView className="bg-primary h-full">
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View className="w-full px-6 h-full justify-center">
              <View className="flex-row justify-center">
                <Image 
                  source={images.logo} 
                  className="w-[60px] h-[40px]" 
                  resizeMode='contain' />
                <Text className="text-white text-3xl font-psemibold pt-1">TIMELY</Text>
              </View>
                <Text className="text-2xl text-white mt-10 font-psemibold">
                  Sign in
                </Text>
                <FormField 
                  title="Email / Phone Number"
                  value={form.email} 
                  placeholder="Enter your Email or Phone Number"
                  handleChangeText={(e) => setForm({...form , email: e})}
                  otherStyle="mt-7"
                  keyboardType="email-address"
                />
                <FormField 
                  title="Password"
                  value={form.password} 
                  placeholder="Enter your password"
                  handleChangeText={(e) => setForm({...form , password: e})}
                  otherStyle="mt-7"
                />
                <Text className="mt-[18px] text-right font-pregular text-sm text-gray-100">
                  Forgot password?
                </Text>
                <PrimaryButton title="Log In" containerStyles={"mt-5"} handlePress={() => {router.push("/home")}}/>
                <Text className="mt-[18px] text-center justify-center font-pregular text-sm text-gray-100">
                  If you don't have an account{"\n"}Please contact your <Text className="font-psemibold">Gym Administrator</Text>
                </Text>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn