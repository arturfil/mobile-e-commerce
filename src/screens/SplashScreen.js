import React, {Component} from 'react';
import {Box, Text} from 'react-native-design-utility'
import {Image} from 'react-native';

import {images} from '../constants/images';

class SplashScreen extends Component {
  state = {}

  componentDidMount() {
    this.checkAuth()
  }

  checkAuth = () => {
    setTimeout(() => {
      this.props.navigation.navigate('Auth');
    }, 2000);
  }

  render() {
    return (
      <Box f={1} center>
        <Box mb="sm">
          <Image source={images.logo} />
        </Box>
        <Box mb="sm">
        <Text size="xl">
          In 
          <Text size="2xl" color="green">
            Store
          </Text>
        </Text>
        </Box>
        <Text size="xs">
          Easy grocery shopping
        </Text>
      </Box>
    )
  }
}

export default SplashScreen;