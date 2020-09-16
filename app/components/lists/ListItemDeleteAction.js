import React from 'react'
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../config/colors'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function ListItemDeleteAction({ onPress }) {
    return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
      <MaterialCommunityIcons 
      name="trash-can"
      size={45}
      color={colors.white}
      />
      </View>  
      </TouchableWithoutFeedback>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: 70,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
    },
})

export default ListItemDeleteAction;
