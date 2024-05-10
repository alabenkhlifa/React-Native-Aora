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
            <View className="w-full px-6 mt-10">
                <Image source={images.logo} resizeMode='contain' className="w-[115] h-[35]"/>
                <Text className="text-2xl text-white mt-10 font-psemibold">
                  Sign in
                </Text>
                <FormField 
                  title="Email"
                  value={form.email} 
                  placeholder="Enter your email address"
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
                  Don't have an account? <Link href="/sign-up"  className="text-secondary font-psemibold">SignUp</Link>
                </Text>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn