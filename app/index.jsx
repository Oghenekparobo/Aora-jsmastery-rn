import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../constants/images";
import CustomButton from "@/components/CustomButton";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";

const App = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 items-center justify-center">
          <Image
            source={images.logo}
            className="w-[320px] h-[84px]"
            resizeMethod="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5 items-center justify-center w-full">
            <Text className="text-4xl text-white max-w-sm text-center capitalize">
              discover endless possibilities with{" "}
              <Text className="text-secondary-200">aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[190px] h-[15px] -bottom-2 absolute -right-3"
              resizeMode="contain"
            />
          </View>
          <Text className="text-white capitalize text-xl text-center px-4 mt-5">
            where creativity meets innovation: embark on a journey to create
            with aora
          </Text>

          <View className="items-center justify-center px-4">
            <CustomButton
              title="Continue with email"
              handlePress={() => {
                router.push("/signIn");
              }}
              containerStyles="w-full mt-7"
            />
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default App;
