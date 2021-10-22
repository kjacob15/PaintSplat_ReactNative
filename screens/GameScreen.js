import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const dirs = ["L", "T"];
let left;
let right;
let top;
let bottom;

const GameScreen = () => {
  //console.log(windowHeight, windowWidth);
  const [randDir, setRandDir] = useState(0);
  const [count, setCount] = useState(0);
  const [left, setLeft] = useState();
  const [top, setTop] = useState();
  const [time, setTime] = useState(Date.now());
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("random direction", randDir);
      console.log("random index", Math.floor(Math.random() * dirs.length));
      setRandDir(dirs[Math.floor(Math.random() * dirs.length)]);
      setTime(Date.now());
    }, 1);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const boundaryCheck = () => {};

  return (
    <View>
      <View removeClippedSubviews={false} style={styles.gameBoard}></View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  gameBoard: {
    height: 200,
    width: 200,
    borderWidth: 2,
    top: 50,
    left: 100,
  },
});
