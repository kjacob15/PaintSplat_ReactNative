import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { database } from "../fire";
import { useDispatch } from "react-redux";
import { setRoom } from "../slices/roomSlice";
import {
  setPlayer,
  setOpponent,
  setPlayerColor,
  setOpponentColor,
} from "../slices/playerSlice";

const HomeScreen = ({ navigation }) => {
  const [roomCode, setRoomCode] = useState("");
  const [displayName, setDisplayName] = useState("");
  const dispatch = useDispatch();

  const setupGameRoom = async () => {
    const gameState = database.ref("/" + roomNum + "/isActive").get();

    if (!isGameRoomActive) {
      Alert.alert('Room does not exist!')
      return;
    }

    dispatch(setRoom({ roomId: roomCode }));
    dispatch(setPlayer({ name: "p2" }));
    dispatch(setOpponent({ name: "p1" }));
    dispatch(setPlayerColor({ color: "blue" }));
    dispatch(setOpponentColor({ color: "red" }));
    navigation.navigate("Game");
  };


  console.log(roomCode);
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>PaintSplat (ASWE)</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://t4.ftcdn.net/jpg/02/31/80/07/360_F_231800782_XmCI68ogKBHYg1ObcbXgrYK00436gIn4.jpg",
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <View>
            <TextInput style={[styles.textInput, {width: 250, marginTop: -40}]} placeholder='Enter your player name:' value={displayName} 
                    onChangeText={(e) => setDisplayName(e)}></TextInput>
        </View>

        <View style={styles.createOrJoinContainer}>
            <View>
                <TextInput style={styles.textInput} placeholder='Enter Room id' value={roomCode} 
                        onChangeText={(e) => setRoomCode(e)}></TextInput>
                <TouchableOpacity style={[styles.button, {marginBottom:0}]} onPress={setupGameRoom}>
                    <Text style={{fontSize: 20, color: 'white'}}>Join Game Room</Text>
                </TouchableOpacity>
            </View>
            
            <Text style={{textAlign: 'center', marginVertical: 30, fontWeight:'bold', fontSize: 20}}>OR</Text>
            
            <View>
                <TouchableOpacity
                        onPress={() => navigation.navigate("Create Game")}
                        style={styles.button}>
                    <Text style={{ fontSize: 20, color: "white" }}>Create Game Room</Text>
                </TouchableOpacity>
            </View>

        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
  },

  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    marginTop: -40
  },

  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonsContainer: {
    alignItems: "center",
  },
  button: {
    width: 250,
    marginBottom: 30,
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 40,
    alignItems: "center",
  },

  createOrJoinContainer:{
    marginTop: 60,
  },

  textInput:{
    borderWidth:1,
    borderColor: 'black',
    height: 50,
    marginBottom: 10,
    borderRadius: 99,
    textAlign: 'center',
    fontSize: 15
    }
});

