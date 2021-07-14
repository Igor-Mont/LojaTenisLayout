import React, { ReactNode } from 'react';
import { Image ,View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type SizeBurronProps = {
  bgColor?: string,
  num: number,
  color: string
}

function SizeButton({ num, bgColor, color }: SizeBurronProps): JSX.Element {

  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      <Text style={[styles.text, {color: color}]}>{num}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: '#e6e6e6',
    borderWidth: 3,
    marginHorizontal: 10
  },
  text: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    textAlignVertical: 'center'
  }
})

export default SizeButton;