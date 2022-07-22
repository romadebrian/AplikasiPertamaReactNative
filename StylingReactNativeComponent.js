import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Miku from './Miku.jpg';

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Componenet</Text>
      <View
        Style={{
          width: 100,
          height: 100,
          backgroundColor: '#0abde3',
          borderWidth: 2,
          borderColor: '#5f27cd',
          marginTop: 20,
          marginLeft: 20,
        }}
      />
      <View
        style={{
          padding: 12,
          backgroundColor: '#F2F2F2',
          width: 212,
          borderRadius: 8,
        }}>
        <Image
          source={Miku}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
          Gambar Hatsune Miku
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: '#F2994A',
            marginTop: 12,
          }}>
          Rp. 25.000.000
        </Text>
        <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
          Jakarta Barat
        </Text>
        <View
          style={{
            backgroundColor: '#6FCF97',
            paddingVertical: 6,
            borderRadius: 25,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            Beli
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10ac84',
    marginLeft: 20,
    marginTop: 40,
  },
});

export default StylingReactNativeComponent;
