import React, { ReactNode } from 'react';
import { Image ,View, Text, StyleSheet, Dimensions } from 'react-native';
type DotProps = {
  color: string
}

function Dot(props: DotProps): JSX.Element {
  return (
    <View style={[styles.container, {backgroundColor: props.color}]}/>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.050,
    height: Dimensions.get('window').height * 0.03,
    borderRadius: Dimensions.get('window').width * 0.050 / 2,
    marginHorizontal: '2.5%',
    elevation: 5
  },
})

export default Dot;