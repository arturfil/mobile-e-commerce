import React from 'react';
import { Box, Text } from 'react-native-design-utility'

const OnboardingLogo = () => {
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
}