import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import SampleComponent from './pages/SampleComponent';
import StylingReactNativeComponent from './pages/StylingComponent';
import MateriFlexBox from './pages/FlexBox';
import PositionReactNative from './pages/Position';
const App = () => {
  return (
    <View>
      <ScrollView>
        <SampleComponent />
        <StylingReactNativeComponent />
        <MateriFlexBox />
        <PositionReactNative />
      </ScrollView>
      <Text>Test</Text>
    </View>
  );
};

export default App;
