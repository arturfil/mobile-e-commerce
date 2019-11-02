import React from 'react';
import { Box, Text } from 'react-native-design-utility'
import { Image } from 'react-native'

import {images} from '../constants/images'

const OnboardingLogo = () => (  
  <Box center>
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


export default OnboardingLogo;