import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BasicJavascript = () => {
  // Primitive
  const nama = 'Roma Debrian'; //String
  let usia = 24; // Number
  const jeniskelaminapakahLakiLaki = true; // Boolean

  // Complex

  // Object
  const hewanPeliharaan = {
    nama: 'Miaw',
    jenis: 'Kucing',
    usia: 2,
    apakahHewanLokal: true,
    warna: 'kuning',
    orangTua: {
      jantan: 'Kaisar',
      betina: 'Kuin',
    },
  };

  // Function
  const sapaOrang = (name, age) => {
    return console.log(`Hello ...... ${name} usia anda ${age}`);
  };

  sapaOrang('Prawita', 24);

  // Object - Array
  const namaOrang = ['Roma', 'Amor', 'Ram'];

  typeof namaOrang; // Object

  //   if (hewanPeliharaan.nama === 'Miaw') {
  //     console.log('halo Miaw');
  //   } else {
  //     console.log('Hewan Peliharaan Siapa ini');
  //   }

  const sapaHewan = objectHewan => {
    // let hasilSapa = '';
    // if (objectHewan.nama === 'Miaw') {
    //   hasilSapa = 'Halo Miaw apa kabar';
    // } else {
    //   hasilSapa = 'Ini hewan Siapa';
    // }

    // Ternery Operator
    return objectHewan.nama === 'Miaw'
      ? 'Halo Miaw, apa kabar?'
      : 'Ini hewan siapa?';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>
        Materi Basic Javascript di React Native
      </Text>

      <Text>Name: {nama}</Text>
      <Text>Age: {usia}</Text>

      <Text>{sapaHewan(hewanPeliharaan)}</Text>
      <Text>{namaOrang[0]}</Text>
      {namaOrang.map(orang => (
        <Text>{orang}</Text>
      ))}
    </View>
  );
};

export default BasicJavascript;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
});
