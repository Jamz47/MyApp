import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';


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
      
    </View>
  </View>
);

export default ListScreen = () => {
  return (
    <View style={styles.container}>
    
      <View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
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

