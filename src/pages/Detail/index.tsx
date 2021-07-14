import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import Dot from '../../components/Dot';
import Footer from '../../components/Footer';
import SizeButton from '../../components/SizeButton';

const Detail: React.FC = ({navigation}:any) => {
  navigation.setOptions({
    headerTitle: 'Nike Shox 10'
  })

  return (
    <ScrollView style={styles.container}>
      <Image source={img1} style={styles.img} resizeMode="cover" />

      <View>
        <View>
          <Text style={[styles.title, {fontSize: 24}]}>R$ 200,90</Text>
        </View>
        <View style={{opacity: 0.4}}>
          <Text style={[styles.title, {fontSize: 30}]}>Nike Shox 10</Text>
        </View>
      </View>

      <View style={styles.dotContainer} >
        <Dot color="#2379f4"/>
        <Dot color="#fb6e53"/>
        <Dot color="#ddd"/>
        <Dot color="#000"/>
      </View>

      <View style={{flexDirection: 'row', width: '100%'}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}> 
          <SizeButton color="#fff" bgColor='#17181a' num={40} />
          <SizeButton color="#17181a" bgColor='#fff' num={39} />
          <SizeButton color="#17181a" bgColor='#fff' num={38} />
          <SizeButton color="#17181a" bgColor='#fff' num={37} />
          <SizeButton color="#17181a" bgColor='#fff' num={35} />
        </ScrollView>
      </View>

      <View style={styles.textContent}>
        <Text style={styles.textTitle}>
          Nike Shox 10
        </Text>
        <Text style={styles.textContent}>
          O Tênis Nike Shox 10 traz amortecimento e suporte para garantir uma melhor performance nos treinamentos
        </Text>
        <Text style={styles.textList}>
          - Categorias: Amortecimento
        </Text>
        <Text style={styles.textList}>
          - Material: Mesh
        </Text>
      </View>

      <View style={styles.containerBtn}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>COMPRAR</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.line} />

      <Footer />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff'
  },
  img: {
    width: '100%'
  },
  title: {
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: '2%'
  },
  dotContainer: {
    flexDirection: 'row',
    marginVertical: '7%',
  },
  textContent: {
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%'
  },
  textTitle: {
    fontSize: 22,
    marginVertical: '2%'
  },
  textList: {
    fontSize: 16,
    lineHeight: 25
  },
  containerBtn: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn: {
    width: '90%',
    height: 50,
    backgroundColor: '#17181a',
    borderRadius: 5,
    marginVertical: '5%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: '#fff',
    fontSize: 17
  },
  line: {
    borderWidth: 1,
    borderBottomColor: '#ddd',
    marginVertical: '2%'
  }
})

export default Detail;