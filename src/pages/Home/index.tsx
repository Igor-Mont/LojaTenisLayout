import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import banner from '../../assets/banner.png';
import { MaterialIcons } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler';
import Shoes from '../../components/Shoes';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';
import img5 from '../../assets/5.png';
import img6 from '../../assets/6.png';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={banner}
          style={styles.image}
        />

        <View style={styles.textContainer}>
          <Text style={styles.text}>TÊNIS</Text>
          <Text style={[styles.text, {color: '#CECECF'}]}>-</Text>
          <Text style={[styles.text, {color: '#CECECF'}]}>MASCULINO</Text>
          <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
            <MaterialIcons
              name="filter-list"
              size={24}
              color="#000"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.line} />

      <ScrollView>
        <Text style={styles.text}>LANÇAMENTOS</Text>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Shoes cost={190.99} name="Nike Shox 10">
            <Image
              source={img1}
              style={styles.shoesImg}
            />
          </Shoes>
          <Shoes cost={190.99} name="Nike Precision 21">
            <Image
              source={img2}
              style={styles.shoesImg}
            />
          </Shoes>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 8,
  },
  image: {
    width: '100%',
  },
  shoesImg: {
    width: 175,
    height: 175,
  },
  textContainer: {
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%',
  },
  text: {
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%'
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#d8d8d8'
  },
  item: {
    width: 50,
    height: 50,
    backgroundColor: 'red'
  }
})

export default Home;