import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {images} from '../constants';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router'
import PrimaryButton from '../custom-components/PrimaryButton';

export default function App() {
    return (
        <SafeAreaView className="bg-primary h-full flex-1">
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <View className="w-full items-center justify-center px-4 flex-1">
                    <Image 
                        source={images.logo} 
                        className="w-[130px] h-[84px]" 
                        resizeMode='contain' />
                    <Image 
                        source={images.cards} 
                        className="w-full max-w-[380px] h-[285]" 
                        resizeMode='contain' />
                    <View className="relative mt-5">
                        <Text className="text-white text-3xl font-bold text-center">Discover Endless Possibilities with{' '}
                            <Text className="text-secondary">Aora</Text>
                        </Text>
                        <Image
                            source={images.path} 
                            className="absolute w-[136px] h-[13px] -bottom-2 -right-8"
                            resizeMode='contain'
                        />
                    </View>
                    <Text className="mt-5 text-center font-pregular text-sm text-gray-100">
                        Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora
                    </Text>
                    <PrimaryButton
                        title="Continue with Email"
                        // handlePress={() => { router.push("/sign-in") }}
                        handlePress={() => { router.push("/home") }}
                        containerStyles="w-full mt-7 mb-10"
                    />
                </View>
            </ScrollView>
            <StatusBar backgroundColor='#161622' style='light'/>
        </SafeAreaView>
    );
}
