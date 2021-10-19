import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CreateGameScreen = ({navigation}) => 
{
    function getRandomString(length) {
        var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var result = '';
        for ( var i = 0; i < length; i++ ) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        return result;
    }
    const [randomCode, setRandomCode] = useState(getRandomString(4));

    return (
        <View>
            <View style={styles.roomCodeContainer}>
                <Text style={styles.textRoomCodeTitle}>Your Random Room Code:</Text>
                <Text style={styles.textRoomCode} >{randomCode}</Text>
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
