import React from "react";
import { View } from "react-native";

interface MarginProps {
  props: number;
}

const Margin = ({ props }: MarginProps) => {
  return (
    <View
      style={{ marginTop: props }}
    />
  )
};

export default Margin;
