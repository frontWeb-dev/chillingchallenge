import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";

const DotAnimation = () => {
  const color1 = useRef(new Animated.Value(0)).current;
  const color2 = useRef(new Animated.Value(0)).current;
  const color3 = useRef(new Animated.Value(0)).current;

  const animateDots = () => {
    const loopAnimation = () => {
      Animated.sequence([
        Animated.timing(color1, {
          toValue: 0.5,
          duration: 250,
          useNativeDriver: false,
        }),
        Animated.timing(color2, {
          toValue: 1,
          duration: 250,
          useNativeDriver: false,
        }),
        Animated.timing(color2, {
          toValue: 0.5,
          duration: 250,
          useNativeDriver: false,
        }),
        Animated.timing(color3, {
          toValue: 1,
          duration: 250,
          useNativeDriver: false,
        }),
        Animated.timing(color3, {
          toValue: 0.5,
          duration: 250,
          useNativeDriver: false,
        }),
        Animated.timing(color1, {
          toValue: 1,
          duration: 250,
          useNativeDriver: false,
        }),
      ]).start(() => {
        loopAnimation(); // 애니메이션 반복 실행
      });
    };

    loopAnimation(); // 초기 애니메이션 실행
  };

  useEffect(() => {
    animateDots();
  }, []);

  const dotColor1 = color1.interpolate({
    inputRange: [0, 1],
    outputRange: ["#e5e5e5", "#909090"],
  });

  const dotColor2 = color2.interpolate({
    inputRange: [0, 1],
    outputRange: ["#e5e5e5", "#909090"],
  });

  const dotColor3 = color3.interpolate({
    inputRange: [0, 1],
    outputRange: ["#e5e5e5", "#909090"],
  });

  return (
    <View style={styles.wrapper}>
      <Animated.View style={[styles.dot, { backgroundColor: dotColor1 }]} />
      <Animated.View style={[styles.dot, { backgroundColor: dotColor2 }]} />
      <Animated.View style={[styles.dot, { backgroundColor: dotColor3 }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 77,
    height: 36,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 7,
  },
});

export default DotAnimation;
