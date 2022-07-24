import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const CallAPIVanilla = () => {
  useEffect(() => {
    // Call API Method Get
    // fetch('https://reqres.in/api/users/2')
    //   .then(response => response.json())
    //   .then(json => console.log(json));

    // Call API Method POST
    const dataForAPI = {
      name: 'morpheus',
      job: 'leader',
    };

    console.log('data object', dataForAPI);
    console.log('data stringify: ', JSON.stringify(dataForAPI));
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataForAPI),
    })
      .then(response => response.json())
      .then(json => {
        console.log('post response:', json);
      });
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.texttitle}>Call API dengan VanillaJS</Text>
    </View>
  );
};

export default CallAPIVanilla;

const styles = StyleSheet.create({
  container: {padding: 20},
  texttitle: {textAlign: 'center'},
});
