import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const View = SafeAreaView;

const SelectScreen: React.FC = () => {
  return (
    <View>
      <Text>
        미션 선택 화면입니당!
      </Text>
    </View>
  );
};

export default SelectScreen;