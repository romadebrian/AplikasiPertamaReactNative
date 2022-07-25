import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const CallAPIVanilla = () => {
  const [dataUser, setDataUser] = useState({
    avatar: '',
    email: '',
    first_name: '',
    last_name: '',
  });

  const [dataJob, setDataJob] = useState({
    name: '',
    job: '',
  });

  useEffect(() => {
    // Call API Method Get
    // fetch('https://reqres.in/api/users/2')
    //   .then(response => response.json())
    //   .then(json => console.log(json));
    // Call API Method POST
    // const dataForAPI = {
    //   name: 'morpheus',
    //   job: 'leader',
    // };
    // console.log('data object', dataForAPI);
    // console.log('data stringify: ', JSON.stringify(dataForAPI));
    // fetch('https://reqres.in/api/users', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(dataForAPI),
    // })
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log('post response:', json);
    //   });
  }, []);

  const getData = () => {
    fetch('https://reqres.in/api/users/2')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setDataUser(json.data);
      });
  };

  const postData = second => {
    const dataForAPI = {
      name: 'morpheus',
      job: 'leader',
    };

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
        setDataJob(json);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.texttitle}>Call API dengan VanillaJS</Text>
      <Button title="GET DATA" onPress={getData} />
      <Text>Response Get Data</Text>
      <Image source={{uri: dataUser.avatar}} style={styles.avatar} />
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>
      <View style={styles.line} />
      <Button title="POST DATA" onPress={postData} />
      <Text>Response POST DATA</Text>
      <Text>{dataJob.name}</Text>
      <Text>{dataJob.job}</Text>
    </View>
  );
};

export default CallAPIVanilla;

const styles = StyleSheet.create({
  container: {padding: 20},
  texttitle: {textAlign: 'center'},
  line: {width: 2, backgroundColor: 'black', marginVertical: 20},
  avatar: {width: 100, height: 100, borderRadius: 100},
});
