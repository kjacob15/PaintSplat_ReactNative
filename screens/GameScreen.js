import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const GameScreen = () => {
    //console.log(windowHeight, windowWidth);
    const [left, setLeft] = useState(200);
    const [top, setTop] = useState(200);
    const [time, setTime] = useState(Date.now())
    useEffect(() => 
    {
        const interval = setInterval(() => {
            setTime(Date.now());
            boundaryCheck()
          }, 500);
          return () => {
            clearInterval(interval);
          };
    }, [])
    
    
    const boundaryCheck = () => 
    {   
        setLeft(Math.floor(Math.random() * 200))
        setTop(Math.floor(Math.random() * 600))
        
        if (Math.abs(windowWidth - left) <= 0){
            setLeft(left * -1);
        }
        if (Math.abs(windowHeight - top) <= 0){
            setTop(top * -1);
        }
    }

    return (
        <View>
            <View style={{borderWidth: 2, height:200, width:200, top:top, left:left}}>
                
            </View>
        </View>
    )
}

export default GameScreen



const styles = StyleSheet.create({
    gameBoard:{
        height: 200,
        width: 200,
        borderWidth: 2,
        // top:{top},
        // left: {left}
    }
})
