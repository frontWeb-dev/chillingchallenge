import React, { useState} from "react";
import { View, Text } from "react-native";

import ImageUploader from "../components/imageUpload/ImageUploader";

const UserSettingScreen: React.FC = () => {
  const [imageSelected, setImageSelected] = useState("");

  return (
    <>
      <View>
        <Text>
          하이
        </Text>
        <ImageUploader
          setImageSelected={setImageSelected}
        />
      </View>
    </>
  );
};

export default UserSettingScreen;