import React, { useState } from "react";
import styled from "styled-components/native";
import * as ImagePicker from "expo-image-picker";

interface ImageUploaderProps {
  setImageSelected: (imageUri: string) => void;
  uploaderType: string;
}

const ImageUploader = ({ setImageSelected, uploaderType }: ImageUploaderProps) => {
  const [imageUri, setImageUri] = useState<string | null>(null);

  const handleSelectImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission denied");
      return;
    }

    const result: ImagePicker.ImagePickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const selectedAsset = result.assets[0];
      setImageUri(selectedAsset.uri);
      setImageSelected(selectedAsset.uri);
    }
  };

  return (
    <>
      <UploaderContainer>
        <PreviewImageContainer onPress={handleSelectImage}>
          <PreviewImage source={{ uri: imageUri }} />
          {uploaderType === "PROFILE" ? <></> : <UploadText>사진을 업로드 해주세요!</UploadText>}
        </PreviewImageContainer>
      </UploaderContainer>
    </>
  );
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
  borderRadius: 100px;
  border: 1px solid grey;
`;

const UploadText = styled.Text`
  fontSize: 18px;
  fontFamily: "Medium";
`;