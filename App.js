import React from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './SampleComponent';
import StylingReactNativeComponent from './StylingReactNativeComponent';
import MateriFlexBox from './MateriFlexBox';
const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingReactNativeComponent /> */}
        <MateriFlexBox />
      </ScrollView>
    </View>
  );
};

export default App;
