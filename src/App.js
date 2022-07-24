import React, {useEffect, useState} from 'react';
import {View, ScrollView, Text} from 'react-native';
import SampleComponent from './pages/SampleComponent';
import StylingReactNativeComponent from './pages/StylingComponent';
import MateriFlexBox from './pages/FlexBox';
import PositionReactNative from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
const App = () => {
  const [isShow, setIsShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsShow(false);
    }, 6000);
  });
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingReactNativeComponent />
        <MateriFlexBox />
        <PositionReactNative />
        <PropsDinamis /> */}
        <StateDinamis />
      </ScrollView>
    </View>
  );
};

export default App;

// {isShow && <MateriFlexBox />}
