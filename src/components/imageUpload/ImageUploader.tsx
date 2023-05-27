import React, { useState } from "react";
import styled from "styled-components/native";
import * as ImagePicker from "expo-image-picker";

interface ImageUploaderProps {
  setImageSelected: (imageUri: string) => void;
}

const ImageUploader = ({ setImageSelected }: ImageUploaderProps) => {
  // const [imageUri, setImageUri] = useState<string | null>(null);
  const [imageUri, setImageUri] = useState("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fimage-preview-icon-picture-placeholder-vector-31284806&psig=AOvVaw1UX0CB4MCuZ3VS4TJiNkjF&ust=1685254870550000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOi-7ODtlP8CFQAAAAAdAAAAABAE");

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
      setImageSelected(result.uri);
    }
  };

  return (
    <>
      <UploaderContainer>
        <PreviewImageContainer
          onPress={() => handleSelectImage()}
        >
          <PreviewImage source={imageUri}/>
          <UploadText>
            사진을 업로드 해주세요!
          </UploadText>
        </PreviewImageContainer>
      </UploaderContainer>
    </>
  )
};

export default ImageUploader;

// styled
const UploaderContainer = styled.View`
  width: 100%;
  display: flex;
  flexDirection: column;
  justifyContent: center;
  alignItems: center;
`;

const PreviewImageContainer = styled.TouchableOpacity`
  width: 100%;
  activeOpacity: 0.8;
  display: flex;
  flexDirection: column;
  justifyContent: center;
  alignItems: center;
  gap: 5px;
`;

const PreviewImage = styled.Image`
  width: 100px;
  height: 100px;
  borderRadius: 12px;
`;

const UploadText = styled.Text`
  fontSize: 18px;
  fontFamily: "Medium";
`;