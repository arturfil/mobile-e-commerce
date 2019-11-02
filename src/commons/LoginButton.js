import React from 'react';
import {Box, Text} from 'react-native-design-utility'
import {TouchableOpacity, Image} from 'react-native';
import { images } from '../constants/images';

const bgColor = type => {
  switch(type) {
    case 'facebook':
      return 'facebookBlue';
    case 'google':
      return 'googleBlue'
    default:
      return 'white'
  }
}

const LoginButton = ({children, type})  => (
  <TouchableOpacity>
    <Box dir="row" align="center" shadow={1} bg="green" bg={bgColor(type)} w="80%" self="center" p="2xs" radius="2xs" mb="sm">
      <Box mr="sm">
        <Box bg="white" h={32} w={32} radius="2xs" center>
          {type === 'google' && <Image source={images.googleColorIcon} /> }
        </Box>
      </Box>
      <Box>
        <Text color="white" size="md">
          {children}
        </Text>
      </Box>
    </Box>
  </TouchableOpacity>
)

export default LoginButton;