import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch } from "react-redux";
import { setRoom } from "../slices/roomSlice";

import { setPlayer, setOpponent, setPlayerColor, setOpponentColor } from "../slices/playerSlice";


import { TouchableOpacity } from 'react-native-gesture-handler';

const CreateGameScreen = ({navigation}) => 
{
    const dispatch = useDispatch();

    function getRandomString(length) {
        var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var result = '';
        for ( var i = 0; i < length; i++ ) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        return result;
    }
    const [randomCode, setRandomCode] = useState(getRandomString(4));
    dispatch(setRoom({roomId: randomCode}))
    dispatch(setPlayer({name: 'p1'}))
    dispatch(setOpponent({name: 'p2'}))
    dispatch(setPlayerColor({color: 'red'}))
    dispatch(setOpponentColor({color: 'blue'}))
    return (
        <View>
            <View style={styles.roomCodeContainer}>
                <Text style={styles.textRoomCodeTitle}>Your Random Room Code:</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('Game')}>
                    <Text style={styles.textRoomCode}>{randomCode}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CreateGameScreen

const styles = StyleSheet.create({
    roomCodeContainer:{
        alignItems: 'center',
        marginTop: 35
    },

    textRoomCodeTitle: {
        fontSize: 25,
        fontWeight: 'bold',
    },

    textRoomCode: {
        marginTop: 20,
        fontSize: 20,
        fontStyle: 'italic',
        color: 'red'
    }
})
