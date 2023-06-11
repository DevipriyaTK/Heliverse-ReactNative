/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions } from 'react-native'
import React, { useEffect } from 'react'

function Screen1 ({ navigation }) {
  // eslint-disable-next-line indent
    useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Screen2')
    }, 3000)

    return () => clearTimeout(timeout)
  }, [])
  return (

        <View style={styles.container}>

            <ImageBackground
                source={require('./assets/award_bg.png')}
                resizeMode="stretch"
                style={styles.image}>
                <Image
                    source={require('./assets/awardPlatform.png')}
                    style={styles.platform}
                    resizeMode="cover" />
                <Image
                    source={require('./assets/girlClap.png')}
                    style={styles.girl}
                    resizeMode="contain" />
                <Image
                    source={require('./assets/castingLogo.png')}
                    style={styles.logo}
                    resizeMode="contain" />
                <Text style={styles.text}>The Results R In!</Text>
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
  platform: {
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width

  },
  girl: {
    width: 300,
    height: 300,
    top: 250,
    left: 50,
    alignSelf: 'flex-start'
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    bottom: 300,
    left: 150
  },
  text: {
    color: '#d0be86',
    fontSize: 20,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    bottom: 230,
    left: 1

  }
})

export default Screen1
