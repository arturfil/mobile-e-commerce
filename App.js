import React from 'react';
import {ActivityIndicator} from 'react-native';
import {UtilityThemeProvider, Box, Text} from 'react-native-design-utility';

import Navigation from './src/screens/index'
import {images} from './src/constants/images';
import {cachedImages} from './src/utils/cachedImages';
import {theme} from './src/constants/theme'

export default class App extends React.Component {
  state = {
    isReady: false
  }

  componentDidMount() {
    this.cacheAssets();
  }

  cacheAssets = async () => {
    const imagesAssets = cachedImages(Object.values(images));
    
    await Promise.all([...imagesAssets])

    this.setState({isReady: true})
  }

  render() {
    if(!this.state.isReady) {
      return (
        <Box f={1} center bg="white">
          <ActivityIndicator size="large"/>
        </Box>
      )
    }

    return (
      <UtilityThemeProvider theme={theme}>
        <Navigation/>
      </UtilityThemeProvider>
    );
  }
  
}

