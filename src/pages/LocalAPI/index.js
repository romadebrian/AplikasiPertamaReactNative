import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const Item = second => {
  return (
    <View style={styles.itemContainer}>
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzjBu8vdV53Wj1Gm0kA1on_lg3Lh1twHJtJg&usqp=CAU',
        }}
        style={styles.avatar}
      />
      <View style={styles.desc}>
        <Text style={styles.descName}>Nama Lengkap</Text>
        <Text style={styles.descEmail}>Emial</Text>
        <Text style={styles.descBidang}>Bidang</Text>
      </View>
      <Text style={styles.delete}>X</Text>
    </View>
  );
};

const LocalAPI = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texttitle}>Local API (Json Server)</Text>
      <Text>Masukan Anggota Kabayan Coding</Text>
      <TextInput placeholder="Nama Lengkap" style={styles.input} />
      <TextInput placeholder="Emial" style={styles.input} />
      <TextInput placeholder="Bidang" style={styles.input} />
      <Button title="Simpan" />
      <View style={styles.line} />
      <Item />
      <Item />
      <Item />
    </View>
  );
};

export default LocalAPI;

const styles = StyleSheet.create({
  container: {padding: 20},
  texttitle: {textAlign: 'center'},
  line: {width: 2, backgroundColor: 'black', marginVertical: 20},
  input: {
    borderWidth: 1,
    marginBottom: 12,
    borderRadius: 25,
    paddingHorizontal: 18,
  },
  avatar: {width: 80, height: 80, borderRadius: 80 / 2},
  itemContainer: {flexDirection: 'row', marginBottom: 20},
  desc: {marginLeft: 18, flex: 1},
  descName: {fontSize: 20, fontWeight: 'bold'},
  descEmail: {fontSize: 16},
  descBidang: {fontSize: 12, marginTop: 8},
  delete: {fontSize: 20, fontWeight: 'bold', color: 'red'},
});
