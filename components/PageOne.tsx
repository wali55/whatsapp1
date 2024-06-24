import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function PageOne() {
  return (
    <View>
      <View style={styles.topContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/icons/left-arrow.png')}
            style={styles.image2}
          />
          <Text style={styles.headingText}>Points</Text>
        </View>
        <View style={styles.menuContainer}>
          <Image
            source={require('../assets/icons/icons8-circled-i-48.png')}
            style={styles.image1}
          />
          <Image
            source={require('../assets/icons/verticle-menu.png')}
            style={styles.image3}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50
  },
  image1: {
    height: 25,
    resizeMode: 'contain',
    marginTop: 4 
  },
  image2: {
    height: 25,
    resizeMode: 'contain',
  },
  image3: {
    height: 25,
    resizeMode: 'contain',
  },
  headingText: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold'
  },
  logoContainer: {
    flexDirection: 'row'
  },
  menuContainer: {
    flexDirection: 'row'
  },
});
