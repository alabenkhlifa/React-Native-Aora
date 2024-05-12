import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import {icons, images} from '../../constants'
import SearchField from '../../custom-components/SearchField'
import LatestVideos from '../../custom-components/LatestVideos'
import EmptyVideoList from '../../custom-components/EmptyVideoList'

const Home = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={[]}
        keyExtractor={(item) => item.id}
        renderItem={ ({item}) => <Text className="text-white text-3xl">{item.id}</Text> }
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between flex-row items-start mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">Welcome Back!</Text>
                <Text className="text-2xl text-white font-psemibold">Ala</Text>
              </View>
              <View>
                <Image className="mt-1.5 h-12 w-12" resizeMode='contain' source={images.logo}/>
              </View>
            </View>
            <SearchField placeholder={"Search for a trainer or training"}/>
            <View className="pt-5">
              <Text className="font-pregular text-gray-100">Upcoming Trainings</Text>
              {/* <LatestVideos posts={[{id: 1} , {id: 2}, {id: 3}]} /> */}
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyVideoList/>
        )}
      />
      <View>
      </View>
    </SafeAreaView>
  )
}

export default Home