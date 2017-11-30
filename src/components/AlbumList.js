import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {
  // initial state
  state = { albums: [] };

  componentWillMount() {
    // fetch data
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => response.json())
      .then((responseData) => this.setState({ albums: responseData }));
  }

  renderAlbums() {
    // iterate through array
    return this.state.albums.map(album =>
      // use id inside key normally
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
