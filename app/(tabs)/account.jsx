import { View, Text, FlatList, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images, icons } from '../../constants'

const CalendarIcon = () => {
  return (
    <Image source={icons.calendar} className="w-4 h-4" resizeMode='contain' style={{ tintColor: "#E8F288"}}/>
  )
}

const CreditCardIcon = () => {
  return (
    <Image source={icons.credit_card} className="w-4 h-4" resizeMode='contain' style={{ tintColor: "#E8F288"}}/>
  )
}

const account = () => {
  const data = [{ name: "Start", value: "12 May 2024" }, { name: "End", value: "12 May 2025" }, { name: "Type", value: "All" }]
  return (
    <SafeAreaView className="h-full w-full bg-primary flex-1">
      <ScrollView>
        <View className="w-full items-center px-4 mt-7">
          <Image source={images.thumbnail} resizeMode='cover' className="w-[150px] h-[150px] border-2 rounded-full border-secondary-100"/>
            <Text className="text-white text-3xl font-pregular mt-4">Ala <Text className="font-psemibold">BEN KHALIFA</Text></Text>
          </View>
        <View className="w-full bg-secondary-200 h-12 mt-10 justify-center">
          <Text className="text-lg font-psemibold text-primary ml-4">
            Membership
          </Text>
        </View>
        <View className="w-full flex-row items-center px-4 h-14">
                <CalendarIcon />
                <Text className="text-gray-100 flex-1 text-lg ml-2">Start</Text>
                <Text className="text-white text-lg">12 May 2024</Text>
        </View>
        <View className="border-[0.5px] border-secondary-200 mx-4"></View>
        <View className="w-full flex-row items-center px-4 h-14">
                <CalendarIcon />
                <Text className="text-gray-100 flex-1 text-lg ml-2">End</Text>
                <Text className="text-white text-lg">12 May 2025</Text>
        </View>
        <View className="border-[0.5px] border-secondary-200 mx-4"></View>
        <View className="w-full flex-row items-center px-4 h-14">
                <CreditCardIcon />
                <Text className="text-gray-100 flex-1 text-lg ml-1.5">Type</Text>
                <Text className="text-white text-lg">All</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
// CIN / Full Name / Birth Day / Address / PHONE
// Start Date / End date / PRICE
export default account

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 75
  },
});