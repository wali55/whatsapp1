import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PageTwo() {
  return (
    <View>
      {/* header area */}
      <View style={styles.headerContainer}>
        <Text style={styles.navText}>WhatsApp</Text>
        <View style={styles.iconContainer}>
            <Image source={require('../assets/icons/left-arrow.png')} style={[styles.iconStyle, {height: 28, width: 28}]} />
            <Image source={require('../assets/icons/icons8-circled-i-48.png')} style={[styles.iconStyle, {marginLeft: 8}]} />
            <Image source={require('../assets/icons/verticle-menu.png')} style={styles.iconStyle} />
        </View>
      </View>
      {/* story section */}
      <Text style={styles.storyHeader}>Status</Text>
      <ScrollView horizontal={true} style={styles.cardContainer}>
        <View style={styles.card}>
            <Image source={{uri: 'https://images.unsplash.com/photo-1718571702272-1b0f9009d97c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D'}} style={styles.storyImg} />
        </View>
        <View style={styles.card}>
            <Image source={{uri: 'https://images.unsplash.com/photo-1717207300523-434099274ff0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D'}} style={styles.storyImg} />
            <Image source={{uri: 'https://avatars.githubusercontent.com/u/25549847?v=4'}} style={styles.storyAvatar} />
            <Text style={styles.cardText}>Rana</Text>
        </View>
        <View style={styles.card}>
            <Image source={{uri: 'https://images.unsplash.com/photo-1717012266293-3a10dfeb847a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D'}} style={styles.storyImg} />
            <Image source={{uri: 'https://avatars.githubusercontent.com/u/29747452?v=4'}} style={styles.storyAvatar} />
            <Text style={styles.cardText}>Sumon</Text>
        </View>
        <View style={styles.card}>
            <Image source={{uri: 'https://images.unsplash.com/photo-1718618938083-f3c817ce590b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D'}} style={styles.storyImg} />
            <Image source={{uri: 'https://avatars.githubusercontent.com/u/11613311?v=4'}} style={styles.storyAvatar} />
            <Text style={styles.cardText}>Polash</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 20
    },
    iconContainer: {
        flexDirection: 'row'
    },
    navText: {
        fontSize: 24,
        fontWeight: '600'
    },
    iconStyle: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    storyHeader: {
        paddingLeft: 12,
        fontSize: 19,
        fontWeight: '500'
    },
    card: {
        width: 120,
        height: 190,
        borderRadius: 20,
        marginRight: 15,
    },
    storyImg: {
        width: 120,
        height: 150,
        borderRadius: 20
    },
    cardContainer: {
        padding: 12
    },
    storyAvatar: {
        height: 60,
        width: 60,
        position: 'absolute',
        bottom: 25,
        left: 30,
        borderRadius: 30,
        borderWidth: 3,
        borderColor: '#ddd',
        overflow: 'visible'
    },
    cardText: {
        fontSize: 16, 
        fontWeight: '500',
        position: 'absolute',
        bottom: 0,
        left: 39
    }
})