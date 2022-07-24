import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IlustrationMyapp from '../../assets/image/undraw_react_re_g3ui.svg';

const ReactNativeSVG = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texttitle}>ReactNativeSVG</Text>
      <IlustrationMyapp width={244} height={125} />
    </View>
  );
};

export default ReactNativeSVG;

const styles = StyleSheet.create({
  container: {padding: 20},
  texttitle: {textAlign: 'center'},
});
