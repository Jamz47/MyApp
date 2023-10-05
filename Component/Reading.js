import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/dist/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Create from './Component/Create';

const DATA = [
  {id: '1', title: 'Item 1'},
  {id: '2', title: 'Item 2'},
  {id: '3', title: 'Item 3'},
];

const renderItem = ({item}) => (
  <View style={styles.item}>
    <Text style={{fontSize: 18}}>{item.title}</Text>
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
      <TouchableOpacity>
        <Icon name="edit" size={20} color="red" />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons name="delete" size={20} color="red" />
      </TouchableOpacity>
    </View>
  </View>
);

const App = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <TextInput style={styles.input} placeholder="Add Something Here..." />
        <Button title="ADD" />
      </View>
      <View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <Create />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
  },
  item: {
    backgroundColor: 'grey',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    flexDirection: 'row',
    borderStyle: 'dashed',
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    width: 320,
  },
});

export default App;
