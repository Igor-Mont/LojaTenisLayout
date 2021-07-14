import React, { ReactNode } from 'react';
import { Image ,View, Text, StyleSheet, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Shoes from '../Shoes';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';
import img5 from '../../assets/5.png';
import img6 from '../../assets/6.png';

function Footer(): JSX.Element {
  return (
    <View style={[styles.container]}>
      <Text style={styles.title}>VOCÊ TAMBÉM PODE GOSTAR</Text>
      <View style={{flexDirection: 'row'}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{marginHorizontal: 10}}>
            <Shoes cost={190.99} name="Nike Dev 2">
              <Image
                source={img6}
                style={styles.shoesImg}
              />
            </Shoes>
          </View>
          <View style={{marginHorizontal: 10}}>
            <Shoes cost={190.99} name="Nike Preciox 2">
              <Image
                source={img2}
                style={styles.shoesImg}
              />
            </Shoes>
          </View>
          <View style={{marginHorizontal: 10}}>
            <Shoes cost={190.99} name="Nike Air Max 2">
              <Image
                source={img3}
                style={styles.shoesImg}
              />
            </Shoes>
          </View>
          <View style={{marginHorizontal: 10}}>
            <Shoes cost={190.99} name="Nike Preciss 10">
              <Image
                source={img5}
                style={styles.shoesImg}
              />
            </Shoes>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  shoesImg: {
    width: 175,
    height: 175,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Anton_400Regular',
    marginVertical:'2%',
    paddingHorizontal: '2%'
  }
})

export default Footer;