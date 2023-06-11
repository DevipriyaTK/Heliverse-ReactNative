/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Image, Animated, StyleSheet, TouchableOpacity, Dimensions, ImageBackground, Text } from 'react-native'

const Screen2 = () => {
  const navigation = useNavigation()
  const position = useRef(new Animated.Value(420)).current

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Screen3')
    }, 20000)

    return () => clearTimeout(timeout)
  }, [])

  const startAnimation = () => {
    position.setValue(420)
    Animated.sequence([
      Animated.timing(position, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true
      }),

      Animated.timing(position, {
        toValue: -330,
        duration: 2000,
        useNativeDriver: true
      }),
      Animated.timing(position, {
        toValue: -320,
        duration: 2000,
        useNativeDriver: true
      })
    ]).start()
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
                <TouchableOpacity onPress={startAnimation}>
                    <Image source={require('./assets/arrow.png')} style={styles.arrow} />
                </TouchableOpacity>
                <Animated.View style={[styles.imageContainer, { transform: [{ translateX: position }] }]}>
                    <Image source={require('./assets/avtar2.png')} style={styles.avtar} />
                    <Text style={styles.name1}>D-Lister</Text>
                    <Text style={styles.name2}>Sally</Text>
                </Animated.View>

                <Text style={styles.points}>15000</Text>
                <Text style={styles.text}>Gave U Some Love</Text>
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
    top: 350,
    left: 80,
    alignSelf: 'flex-start'
  },
  heart: {
    width: 150,
    height: 150,
    top: -50,
    left: 120
  },
  text: {
    color: '#d0be86',
    fontSize: 30,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    bottom: 400,
    left: 1
  },
  name1: {
    color: '#d0be86',
    fontSize: 30,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    bottom: 200,
    left: 150
  },
  name2: {
    color: '#A020F0',
    fontSize: 15,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    bottom: 250,
    left: 150
  },
  points: {
    color: '#d0be86',
    fontSize: 30,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    top: -210,
    right: 14
  },
  arrow: {
    width: 30,
    height: 30,
    top: 50,
    left: 320
  },
  avtar: {
    width: 100,
    height: 100,
    bottom: 260,
    borderRadius: 75, // Half of the width and height to make it round
    overflow: 'hidden',
    position: 'absolute'
  }

})

export default Screen2
