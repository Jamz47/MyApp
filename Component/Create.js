import {StyleSheet, Text, View, TextInput,} from 'react-native';
import React from 'react';
import {Button} from '@rneui/base';

export default Create =({navigation})=> {
  return (
    <View style={styles.container}>
      <View style={styles.users}>
        <Text style={{fontSize: 50, color: 'green'}}>Create User</Text>
        <TextInput placeholder="Name" style={styles.name} />
        <TextInput placeholder="Email" style={styles.name} />
        <TextInput placeholder="Phone#" style={styles.name} />
      </View>
      <View style={styles.buttons}>
        <Button title="Update"
        onPress={()=> navigation.navigate('List')} />
        <Button title="Delete" color={'red'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  users: {
    width: '100%',
    marginTop: 30,
    alignItems: 'center',
  },
  name: {
    height: 60,
    width: '100%',
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'green',
    marginLeft: 1,
    marginTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
});
