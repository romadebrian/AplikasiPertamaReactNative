import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const Story = props => {
  return (
    <View style={{alignItems: 'center', marginRight: 20}}>
      <Image
        source={{
          uri: props.gambar,
        }}
        style={{width: 70, height: 70, borderRadius: 70 / 2}}
      />
      <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.nama}</Text>
    </View>
  );
};

function PropsDinamis() {
  return (
    <View>
      <Text>Materi Component Dinamis dengan Props</Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <Story
            nama="Vestia Zeta"
            gambar="https://pbs.twimg.com/profile_images/1523720413003792385/_3jQPHB6_400x400.jpg"
          />
          <Story
            nama="Ariani Iofi"
            gambar="https://yt3.ggpht.com/bF91weVtAIL7Uhnr2HVwtCTLVKK5kVsn4FC_Ze3Gl8rkSsEjDwyey3AbQ1PDfJQ1Oeac5cePeg=s900-c-k-c0x00ffffff-no-rj"
          />
          <Story
            nama="A-chan"
            gambar="https://otaku.mobileague.id/wp-content/uploads/2020/10/11-e1604046220711.jpg"
          />
          <Story
            nama="Uruha Rushia"
            gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqVV1edt8dckzK1BByIUyym653UvT6DLwzwA&usqp=CAU"
          />
          <Story
            nama="Gawr Gura"
            gambar="https://cdn1.dotesports.com/wp-content/uploads/2021/02/11065632/gawr-gura.jpg"
          />
          <Story
            nama="Kiryu Coco"
            gambar="https://i2.hdslb.com/bfs/archive/84f662e8bf70b6e2b5575cb446c513b40872238c.jpg"
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default PropsDinamis;

const styles = StyleSheet.create({});
