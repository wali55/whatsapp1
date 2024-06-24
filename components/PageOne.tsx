import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function PageOne() {
  const data = [
    {
      yourPoint: 16,
      objText: 'Text',
      hisPoint: 18,
    },
    {
      yourPoint: 9,
      objText: 'Image',
      hisPoint: 8,
    },
    {
      yourPoint: 0,
      objText: 'Video',
      hisPoint: 2,
    },
    {
      yourPoint: 12,
      objText: 'Message React',
      hisPoint: 12,
    },
    {
      yourPoint: 5,
      objText: 'Story React',
      hisPoint: 4,
    },
    {
      yourPoint: 1,
      objText: 'Conversation Missing / Day',
      hisPoint: 1,
    },
  ];
  return (
    <ScrollView>
      {/* top nav area */}
      <View style={styles.topContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/icons/left-arrow.png')}
            style={styles.image2}
          />
          <Text style={styles.headingText}>Wade</Text>
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
      {/* heading text */}
      <View style={styles.pointsContainer}>
        <Text style={styles.pointsText}>Points Summary</Text>
      </View>
      {/* heading image */}
      <View style={styles.imgAndTextContainer}>
        <View style={styles.imgContainer}>
          <Image
            source={{
              uri: 'https://avatars.githubusercontent.com/u/11613311?v=4',
            }}
            style={styles.imageStyle}
          />
          <Text>You</Text>
        </View>
        <View style={styles.imgContainer}>
          <Text style={styles.imgText}>120</Text>
          <Text style={styles.imgText}>Points</Text>
        </View>
        <View style={styles.imgContainer}>
          <Image
            source={{
              uri: 'https://avatars.githubusercontent.com/u/94738352?v=4',
            }}
            style={styles.imageStyle}
          />
          <Text>Wade</Text>
        </View>
      </View>
      {/* point boxes */}
      <View style={styles.pointBoxContainer}>
        {data.map(({yourPoint, objText, hisPoint}) => (
          <View key={objText} style={styles.pointBox}>
            <Text style={styles.digitText}>{yourPoint}</Text>
            <Text>{objText}</Text>
            <Text style={styles.digitText}>{hisPoint}</Text>
          </View>
        ))}
      </View>
      {/* point button */}
      <View style={styles.buttonContainer}>
        <View style={styles.pointButton}>
          <Text style={styles.pointText}>Claim Reward</Text>
        </View>
        {/* footer text */}
        <Text>You need more conversation to get more points.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
  image1: {
    height: 25,
    resizeMode: 'contain',
    marginTop: 4,
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
    fontWeight: 'bold',
  },
  logoContainer: {
    flexDirection: 'row',
  },
  menuContainer: {
    flexDirection: 'row',
  },
  pointsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  pointsText: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 12,
  },
  pointBox: {
    height: 60,
    width: 330,
    backgroundColor: '#f1f1f1',
    marginBottom: 4,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  pointBoxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 20,
  },
  digitText: {
    fontSize: 20,
    fontWeight: '600',
  },
  pointButton: {
    height: 60,
    width: 330,
    elevation: 3,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowColor: '#ddd',
    backgroundColor: '#F8F4E1',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  pointText: {
    fontSize: 22,
    fontWeight: '600',
  },
  imageStyle: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginBottom: 2,
  },
  imgAndTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  imgContainer: {
    alignItems: 'center',
  },
  imgText: {
    fontSize: 20,
    fontWeight: '600'
  }
});
