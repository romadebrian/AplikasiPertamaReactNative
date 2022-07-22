import React, {Component} from 'react';
import {Text, TextInput, View, Image} from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}}></View>
      <Text>Prawito</Text>
      <Hudoro />
      <Text>Mila</Text>
      <Text>Azmy</Text>
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const Hudoro = () => {
  return <Text>Hudoro Mangku Negoro</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{
        uri: 'https://static.tvtropes.org/pmwiki/pub/images/hololive_fantasy_by_shiranui_flare_6.png',
      }}
      style={{width: 100, height: 100}}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>Ini component dari class</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{
            uri: 'https://rare-gallery.com/thumbnail/1347420-Shiranui-Flare-HololiveVirtual-Youtuber-HD-Wallpaper.png',
          }}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <Text style={{color: 'blue', fontSize: 24}}>Ini Vtuber</Text>
      </View>
    );
  }
}

export default SampleComponent;
