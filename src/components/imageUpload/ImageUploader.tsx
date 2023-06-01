import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import * as ImagePicker from "expo-image-picker";

interface ImageUploaderProps {
  setImageSelected: (imageUri: string) => void;
  uploaderType: string;
  desc?: string;
}

const ImageUploader = ({ setImageSelected, uploaderType, desc }: ImageUploaderProps) => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [isImageUploaded, setIsImageUploaded] = useState<boolean>(false);

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
      await setImageUri(selectedAsset.uri);
      setImageSelected(selectedAsset.uri);
      setIsImageUploaded(true);
      console.log("imageUri: ", imageUri)
    }
  };

  return (
    <>
      <UploaderContainer>
        <PreviewImageContainer onPress={() => handleSelectImage()}>
          {isImageUploaded === false ? <></> : <UploadText>📷 사진 변경하기</UploadText>}
          <PreviewImage source={{ uri: imageUri }} uploaderType={uploaderType}/>
        </PreviewImageContainer>
      </UploaderContainer>
    </>
  );
};

export default ImageUploader;


// styled
const UploaderContainer = styled.View`
  width: 100%;
  flex: 1;
  display: flex;
  flexDirection: column;
  justifyContent: center;
  alignItems: center;
  margin-bottom: 100px;
`;

const PreviewImageContainer = styled.TouchableOpacity`
  activeOpacity: 0.8;
  display: flex;
  flexDirection: column;
  justifyContent: center;
  alignItems: center;
  gap: 10px;
`;

const PreviewImage = styled.Image`
  width: ${(props: {uploaderType: string}) => (props.uploaderType === "PROFILE" ? "100px" : "320px")};
  height: ${(props: {uploaderType: string}) => (props.uploaderType === "PROFILE" ? "100px" : "320px")};
  borderRadius: ${(props: {uploaderType: string}) => (props.uploaderType === "PROFILE" ? "100px" : "8px")};
  border: 1px solid grey;
`;

const UploadText = styled.Text`
  fontSize: 14px;
  fontFamily: "Medium";
  text-align: center;
  line-height: 24px;
`;