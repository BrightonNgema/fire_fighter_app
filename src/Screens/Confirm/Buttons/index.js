import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const TwoButtons = ({
  onCorrectAddress,
  onConfirm,
  correctAddress,
  address
}) => {
  const isDisabled = address.fullAddress.length < 5;
  const buttonStyle = isDisabled ? styles.disabled : styles.red;
  return (
    <View style={styles.bottomView}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onCorrectAddress}
        style={{ ...styles.Buttons, ...styles.yellow }}
      >
        <Text style={styles.blackText}>
          {!correctAddress ? 'ENTER CORRECT ADDRESS' : 'CANCEL'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={isDisabled}
        onPress={onConfirm}
        activeOpacity={0.7}
        style={{ ...styles.Buttons, ...buttonStyle }}
      >
        <Text style={styles.whiteText}>
          {isDisabled ? "GETTING LOCATION..." : "SEND REPORT"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomView: {
    width: '100%',
  },
  Buttons: {
    flex: 1,
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  yellow: {
    backgroundColor: '#FFF200',
  },
  red: {
    backgroundColor: '#E1251C',
  },
  disabled: {
    backgroundColor: '#4a4a4a'
    // opacity: 0.2,
  },
  blackText: { fontSize: 20, fontWeight: '800', color: '#000' },
  whiteText: { fontSize: 20, fontWeight: '800', color: '#fff' },
});

export { TwoButtons };
