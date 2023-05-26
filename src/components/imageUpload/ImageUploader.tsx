import React, { useState } from "react";
import styled from "styled-components/native";
import * as ImagePicker from "expo-image-picker";

interface ImageUploaderProps {
  onImageSelected: (imageUri: string) => void;
}

const ImageUploader = ({ onImageSelected }: ImageUploaderProps) => {
  const [imageUri, setImageUri] = useState<string | null>(null);

  const handleSelectImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission denied");
      return;
    }

    const result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.uri);
      onImageSelected(result.uri);
    }
  };

  return (
    <>

    </>
  )
};

export default ImageUploader;
