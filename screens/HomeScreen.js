import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'


const HomeScreen = ({ navigation }) => {
    return (
        <View style={{backgroundColor: 'white', flex:1}}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>PaintSplat</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={{uri: 'https://t4.ftcdn.net/jpg/02/31/80/07/360_F_231800782_XmCI68ogKBHYg1ObcbXgrYK00436gIn4.jpg'}} style={styles.image}/>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Create Game')} style={styles.button}>
                    <Text style={{fontSize: 20, color: 'white'}}>Create Game Room</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={{fontSize: 20, color: 'white'}}>Join Game Room</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    titleContainer:{
        flexDirection:'row',
        justifyContent: 'center',
        marginTop: 30
    },
    title:{
        fontSize: 35,
        fontWeight: 'bold',
    },

    image: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },

    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonsContainer:{
        alignItems: 'center'
    },

    button:{
        width: 250,
        marginBottom: 30,
        backgroundColor: 'blue',
        padding: 15,
        borderRadius: 40,
        alignItems: 'center',
    }

    
})
