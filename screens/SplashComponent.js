import React, { useState } from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { database } from "../fire";
import { useSelector } from "react-redux";
import { selectRoom } from "../slices/roomSlice";
import {
  selectPlayer,
  selectOpponent,
  selectPlayerColor,
  selectOpponentColor,
} from "../slices/playerSlice";
import { selectGameboard } from "../slices/gameStateSlice";
import { useDispatch } from "react-redux";
import { updateGameboard } from "../slices/gameStateSlice";

const SplashComponent = ({ tile, color }) => {
  const [cellColor, setCellColor] = useState("white");
  const roomNum = useSelector(selectRoom);
  const playerName = useSelector(selectPlayer);
  const playerColor = useSelector(selectPlayerColor);
  const opponentName = useSelector(selectOpponent);
  const opponentColor = useSelector(selectOpponentColor);
  const gameBoard = useSelector(selectGameboard);
  const dispatch = useDispatch();
  console.log("render tile " + tile);

  if (color) setCellColor(color);

  if (gameBoard && gameBoard.gamestate && gameBoard.gamestate[tile]) {
    const tileOwner = gameBoard.gamestate[tile];
    if (tileOwner) {
      if (tileOwner === playerName) setCellColor(playerColor);
      else if (tileOwner === opponentName) setCellColor(opponentColor);
    }
  }

  const setTile = async () => {
    console.log("clicked");
    const db = await database.ref("/" + roomNum + "").get();
    // if (db.gamestate[tile] && db.gamestate[tile].trim() !== "") {
    //   // set the tile here and colour the tile
    //   let update = JSON.parse(JSON.stringify(db));
    //   update.gamestate[tile] = "P2";
    // }
    let update = JSON.parse(JSON.stringify(db));

    if (!update) {
      update = {};
    }

    if (!update.gamestate) {
      update.gamestate = {};
    }
    update.gamestate[tile] = playerName;
    await database.ref("/" + roomNum + "").update(update);
    console.log(playerColor);
    setCellColor(playerColor);
    // dispatch(updateGameboard({ gameboard: update }));
  };

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
          backgroundColor: cellColor,
        }}
      >
        <TouchableOpacity
          style={{
            height: "100%",
            width: "100%",
          }}
          onPress={setTile}
        ></TouchableOpacity>
      </View>
    </View>
  );
};

export default SplashComponent;
