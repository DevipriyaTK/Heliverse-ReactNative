/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Image, Animated, StyleSheet, TouchableOpacity, Dimensions, ImageBackground, Text } from 'react-native'

function Screen3 ({ navigation }) {
  // eslint-disable-next-line indent
    const [points, setPoints] = useState(15000)
  useEffect(() => {
    const interval = setInterval(() => {
      if (points < 40000) {
        setPoints(points + 1000)
      } else {
        clearInterval(interval)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [points])
  const goToScreen1 = () => {
    navigation.navigate('Screen1')
  }
  return (
        <View style={styles.container}>

            <ImageBackground
                source={require('./assets/award_bg.png')}
                resizeMode="stretch"
                style={styles.image}>
                <Image
                    source={require('./assets/awardPlatform.png')}
                    style={styles.platform}
                    resizeMode="cover"
                />
                <Image
                    source={require('./assets/girlClap.png')}
                    style={styles.girl}
                    resizeMode="contain"
                />
                <Image
                    source={require('./assets/main-heart.png')}
                    style={styles.heart}
                    resizeMode="contain"
              />
              <Image
                  source={require('./assets/congrats.png')}
                  style={styles.congrats}
                  resizeMode="contain"
              />
              <TouchableOpacity onPress={goToScreen1}>
                  <Image source={require('./assets/arrow.png')} style={styles.arrow} />
              </TouchableOpacity>
              <TouchableOpacity>
                  <Text style={styles.points}>{points}</Text>
              </TouchableOpacity>
              <Text numberOfLines={2} lineBreakMode="Some" style={styles.text}>4 Friends Gave U {'\n'}Some Love</Text>
            </ImageBackground>

        </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    justifyContent: 'center'
  },
  imageContainer: {
    position: 'absolute'
  },
  platform: {
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width

  },
  girl: {
    width: 250,
    height: 250,
    top: 420,
    left: 80,
    alignSelf: 'flex-start'
  },
  congrats: {
    width: 150,
    height: 150,
    top: -65,
    left: 240
  },
  heart: {
    width: 150,
    height: 150,
    top: -30,
    left: 120
  },
  text: {
    color: '#d0be86',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    bottom: 550,
    left: 1
  },
  points: {
    color: '#d0be86',
    fontSize: 30,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    top: -340,
    right: 11
  },
  arrow: {
    width: 30,
    height: 30,
    top: 10,
    left: 320
  }
})

export default Screen3
