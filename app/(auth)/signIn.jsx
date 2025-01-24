import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";

const SignIn = () => {
  const [form, setForm] = useState({
    password: "",
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {};
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="flex items-center justify-center min-h-[85vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-white text-2xl font-psemibold mt-4">
            Log in to aora
          </Text>
          <FormField
            title="email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-6"
            keyboardType="email-address"
          />

          <FormField
            title="password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-6"
          />

          <CustomButton
            title="sign in"
            handlePress={submit}
            containerStyles={"mt-7"}
            isLoading={isSubmitting}
          />

          <View className="flex-row items-center justify-center mt-6">
            <Text className="text-white text-xl font-pmedium">
              Don't have an account? {""}
            </Text>
            <Link
              href="/signup"
              className="text-secondary font-psemibold capitalize text-xl"
            >
              sign up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
