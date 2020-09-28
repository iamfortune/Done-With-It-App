import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import AppText from '../components/AppText';

function UploadScreen({ progress = 0, visible = false }) {
    return (
      <Modal visible={visible}>
            <View style={styles.container}>
                <AppText>{progress * 100}</AppText>
            </View>
      </Modal>
    );
}

const styles =  StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
  }
});

export default UploadScreen;