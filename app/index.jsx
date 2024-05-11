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
                    <View className="flex-row pt-5">
                        <Image 
                            source={images.logo} 
                            className="w-[60px] h-[40px]" 
                            resizeMode='contain' />
                        <Text className="text-white text-3xl font-psemibold pt-1">TIMELY</Text>
                    </View>
                    <Image 
                        source={images.cards} 
                        className="w-full max-w-[375px] h-[300px] mt-6" 
                        resizeMode='contain' />
                    <View className="relative mt-3">
                        <Text className="text-white text-3xl font-bold text-center">Workouts, When you {"\n"} want them with{' '}
                            <Text className="text-secondary">Timely</Text>
                        </Text>
                        <Image
                            source={images.line} 
                            className="absolute w-[90px] h-[13px] -bottom-2 right-1"
                            resizeMode='contain'
                        />
                    </View>
                    <Text className="mt-5 text-center font-pregular text-sm text-gray-100">
                        Optimize Your Fitness Routine{"\n"}Stay In Sync with Timely's Gym Schedule
                    </Text>
                    <PrimaryButton
                        title="Get Started"
                        // handlePress={() => { router.push("/sign-in") }}
                        handlePress={() => { router.push("/sign-in") }}
                        containerStyles="w-full mt-7 mb-10"
                    />
                </View>
            </ScrollView>
            <StatusBar backgroundColor='#161622' style='light'/>
        </SafeAreaView>
    );
}
