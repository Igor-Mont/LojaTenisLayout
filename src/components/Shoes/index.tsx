import React, { ReactNode } from 'react';
import { Image ,View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import img1 from '../../assets/1.png';

type ShoesProps = {
  cost: number,
  children: ReactNode,
  name: string,
}

function Shoes({ cost, name, children }: ShoesProps): JSX.Element {
  const filterDesc = (desc: string) => {
    if(desc.length < 27) {
      return desc;
    }

    return `${desc.substring(0, 24)}...`
  }

  return (
    <TouchableOpacity style={styles.container}>
      {children}
      <Text style={styles.shoesText}>
        {filterDesc(name)}
      </Text>
      <Text style={styles.shoesText}>
        {`R$${cost}`}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: '25%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  shoesImg: {
    width: 175,
    height: 175,
  },
  shoesText: {
    fontSize: 16
  }
})

export default Shoes;