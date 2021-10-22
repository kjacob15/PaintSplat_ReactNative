import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import SplashComponent from "./SplashComponent";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const GameScreen = () => {
  //console.log(windowHeight, windowWidth);
  const [left, setLeft] = useState(200);
  const [top, setTop] = useState(200);
  const [time, setTime] = useState(Date.now());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(Date.now());
      boundaryCheck();
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const boundaryCheck = () => {
    setLeft(Math.floor(Math.random() * 200));
    setTop(Math.floor(Math.random() * 600));

    if (Math.abs(windowWidth - left) <= 0) {
      setLeft(left * -1);
    }
    if (Math.abs(windowHeight - top) <= 0) {
      setTop(top * -1);
    }
  };

  return (
    <View>
      <View
        style={{
          borderWidth: 2,
          height: 200,
          width: 200,
          top: top,
          left: left,
          alignContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <SplashComponent tile="00" />
        <SplashComponent tile="01" />
        <SplashComponent tile="02" />
        <SplashComponent tile="03" />
        <SplashComponent tile="10" />
        <SplashComponent tile="11" />
        <SplashComponent tile="12" />
        <SplashComponent tile="13" />
        <SplashComponent tile="20" />
        <SplashComponent tile="21" />
        <SplashComponent tile="22" />
        <SplashComponent tile="23" />
        <SplashComponent tile="30" />
        <SplashComponent tile="31" />
        <SplashComponent tile="32" />
        <SplashComponent tile="33" />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  gameBoard: {
    height: 200,
    width: 200,
    borderWidth: 2,
    // top:{top},
    // left: {left}
  },
});
