import React, { ReactNode } from 'react';
import { Image ,View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import img1 from '../../assets/1.png';


type ShoesProps = {
  cost: number,
  children: ReactNode,
  name: string,
  onClick?: () => void
}

function Shoes({ cost, name, children, onClick }: ShoesProps): JSX.Element {
  const filterDesc = (desc: string) => {
    if(desc.length < 27) {
      return desc;
    }

    return `${desc.substring(0, 24)}...`
  }

  return (
    <TouchableOpacity onPress={onClick} style={styles.container}>
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
    paddingVertical: '2%',
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