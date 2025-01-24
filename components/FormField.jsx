import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`${otherStyles} w-full px-5`}>
      <Text className={`text-base text-gray-100 font-pmedium capitalize `}>
        {title}
      </Text>
      <View className="border-b border-black-1200 py-2 bg-black-100 h-16 px-4 w-full rounded-2xl focus:border-secondary items-center flex-row">
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={handleChangeText}
          placeholderTextColor={"#7B7B8B"}
          {...props}
          secureTextEntry={title === "password" && !showPassword}
          className="text-white flex-1 pr-2"
        />
        {title === "password" && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            className="ml-2"
          >
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              resizeMode="contain"
              className="w-6 h-6"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
