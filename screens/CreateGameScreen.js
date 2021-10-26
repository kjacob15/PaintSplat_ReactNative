import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { setRoom } from "../slices/roomSlice";

import {
  setPlayer,
  setOpponent,
  setPlayerColor,
  setOpponentColor,
  setOpponentDisplayName,
  selectPlayerDisplayName,
} from "../slices/playerSlice";

import { database } from "../fire";
import { TouchableOpacity } from "react-native-gesture-handler";

const CreateGameScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const playerDisplayName = useSelector(selectPlayerDisplayName);

  function getRandomString(length) {
    var randomChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var result = "";
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(
        Math.floor(Math.random() * randomChars.length)
      );
    }
    return result;
  }
  const [randomCode, setRandomCode] = useState(getRandomString(4));
  const update = {
    isActive: "true",
    p1DisplayName: playerDisplayName,
    p2DisplayName: "",
  };
  database.ref("/" + randomCode).update(update);

  database.ref("/" + randomCode + "/p2DisplayName").on("value", (snapshot) => {
    const p2Name = snapshot.val();
    if (p2Name && p2Name.trim() !== "") {
      //TODO: valid p2name, so dispatch p2 display name and proceed to game
      dispatch(setOpponentDisplayName({ displayName: p2Name }));
      navigation.navigate("Game");
    }
  });

  dispatch(setRoom({ roomId: randomCode }));
  dispatch(setPlayer({ name: "p1" }));
  dispatch(setOpponent({ name: "p2" }));
  dispatch(setPlayerColor({ color: "red" }));
  dispatch(setOpponentColor({ color: "blue" }));
  return (
    <View>
      <View style={styles.roomCodeContainer}>
        <Text style={styles.textRoomCodeTitle}>Your Random Room Code:</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Game")}>
          <Text style={styles.textRoomCode}>{randomCode}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateGameScreen;

const styles = StyleSheet.create({
  roomCodeContainer: {
    alignItems: "center",
    marginTop: 35,
  },

  textRoomCodeTitle: {
    fontSize: 25,
    fontWeight: "bold",
  },

  textRoomCode: {
    marginTop: 20,
    fontSize: 20,
    fontStyle: "italic",
    color: "red",
  },
});
