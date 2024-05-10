import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import FormField from '../../custom-components/FormField'
import PrimaryButton from '../../custom-components/PrimaryButton'
import { images } from '../../constants'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignUp = () => {

  const [form, setForm] = useState({
    username: '',
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
                  title="Username"
                  value={form.username} 
                  placeholder="Your unique username"
                  handleChangeText={(e) => setForm({...form , username: e})}
                  otherStyle="mt-7"
                />
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
                <PrimaryButton title="Sign Up" containerStyles={"mt-6"}/>
                <Text className="mt-5 text-center justify-center flex-1 font-pregular text-sm text-gray-100">
                  Already have an account? <Link href="/sign-in"  className="text-secondary font-psemibold">Login</Link>
                </Text>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp