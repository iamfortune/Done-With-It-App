import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors';

function NewListingButton({ onPress }) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <MaterialCommunityIcons
            name="plus-circle"
            color={colors.white}
            size={35}
          />
        </View>
      </TouchableOpacity>
    );
}

const styles =  StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderColor: colors.white,
        borderWidth: 10,
        borderRadius: 37,
        height: 75,
        bottom: 30,
        justifyContent: 'center',
        width: 75,
        
  }
});

export default NewListingButton;