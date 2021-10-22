import React, { useState } from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { database } from "../fire";

const SplashComponent = ({ tile, color }) => {
  const [cellColor, setCellColor] = useState("white");
  if (color) setCellColor(color);

  const setTile = async () => {
    console.log("clicked");
    const db = await database.ref("/test_room").get();
    // if (db.gamestate[tile] && db.gamestate[tile].trim() !== "") {
    //   // set the tile here and colour the tile
    //   let update = JSON.parse(JSON.stringify(db));
    //   update.gamestate[tile] = "P2";
    // }
    let update = JSON.parse(JSON.stringify(db));

    if (!update.gamestate) {
      update.gamestate = {};
    }
    update.gamestate[tile] = "P2";
    await database.ref("/test_room").update(update);
    setCellColor("red");
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
