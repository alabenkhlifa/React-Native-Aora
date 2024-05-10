import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import {icons, images} from '../../constants'
import SearchField from '../../custom-components/SearchField'

const Home = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={[{id: 1}, {id: 2}, {id: 3}]}
        keyExtractor={(item) => item.id}
        renderItem={({item}) =>
          <Text className="text-white text-3xl">{item.id}</Text>
        }
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between flex-row items-start mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">Welcome Back!</Text>
                <Text className="text-2xl text-white font-psemibold">Ala</Text>
              </View>
              <View>
                <Image className="mt-1.5 h-10 w-9" resizeMode='contain' source={images.logoSmall}/>
              </View>
            </View>
            <SearchField placeholder={"Search for a video topic"}/>
            <View>
              <Text className="font-pregular text-gray-100 mt-9">Trending Videos</Text>
            </View>
          </View>
        )}
      />
      <View>
        <Text className="text-white">Home</Text>
      </View>
    </SafeAreaView>
  )
}

export default Home