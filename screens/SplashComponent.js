import React from "react";
import { View } from "react-native";

const SplashComponent = (props) => {
  const color = props.color || "red";
  return (
    <View
      style={{
        height: "25%",
        width: "25%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          height: "70%",
          width: "70%",
          borderRadius: 999,
          backgroundColor: color,
        }}
      ></View>
    </View>
  );
};

export default SplashComponent;
