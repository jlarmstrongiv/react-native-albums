// import a library to help create a component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
// create the component
const App = () => {
  return (
    <View>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );
};
// Or Refactored
// const App = () => (
//   <Text>Some Text</Text>
// );
// render the component
AppRegistry.registerComponent('albums', () => App);
