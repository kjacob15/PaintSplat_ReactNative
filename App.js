import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { database } from "./fire";

export default function App() {
  const [test_data, set_test_data] = useState();
  // useEffect(() => {
  //   console.log("use effect called");
  //   // console.log(database);
  //   const unsubscribe = async () => {
  //     console.log("call unsub");
  //     const db = await database.ref("/test_room").get();
  //     console.log("db ", db);
  //     test_json = db;
  //     set_test_data(test_json);
  //   };
  //   return unsubscribe;
  // }, []);

  const callTestData = async () => {
    const db = await database.ref("/test_room").get();
    console.log("db ", db);
    const test_json = JSON.stringify(db);
    set_test_data(test_json);
  };

  const onPressToggleWinner = async () => {
    const db = await database.ref("/test_room").get();

    let update = JSON.parse(JSON.stringify(db));

    if (update.winner === "P1") update.winner = "P2";
    else update.winner = "P1";

    await database.ref("/test_room").update(update);
    callTestData();
  };

  callTestData();
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>{test_data}</Text>
      <StatusBar style="auto" />
      <Button
        onPress={onPressToggleWinner}
        title="Toggle Winner"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
