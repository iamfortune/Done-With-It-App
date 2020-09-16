import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialCommunityIcons }  from '@expo/vector-icons'

import colors from '../config/colors';

const ViewImageScreen = () => {
    return (
      <View style={styles.container}>
        <View style={styles.closeIcon}>
          <MaterialCommunityIcons name="close" color="white" size={35} />
        </View>
        <View style={styles.deleteIcon}>
          <MaterialCommunityIcons name="trash-can-outline" color="white" size={35} />
        </View>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("../assets/chair.jpg")}
        />
      </View>
    );
}

export default ViewImageScreen

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 25, // this was 40 with an iphone similator, using my android phone to test
    left: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    position: "absolute",
    top: 25, // this was 40 with an iphone simulator
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
    marginTop: 30, // with an iphone simulator 
  },
});
