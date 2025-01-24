import { Text, TouchableOpacity } from "react-native";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      className={`bg-secondary rounded-xl flex justify-center items-center py-4  my-4 ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      style={{ paddingHorizontal: 16 }} // Ensure horizontal padding for spacing
      disabled={isLoading}
      onPress={handlePress}
    >
      <Text
        className={`text-primary font-psemibold text-xl text-center capitalize ${textStyles}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
