import React, {Component} from 'react';
import {Box, Text} from 'react-native-design-utility'
import {TouchableOpacity} from 'react-native';

import OnboardingLogo from '../commons/OnboardingLogo';
import LoginButton from '../commons/LoginButton';


class LoginScreen extends Component {
  state = {}
  render() {
    return (
      <Box f={1} center bg="white">
        <Box f={1} center>
          <OnboardingLogo/>
        </Box>
        <Box f={0.9} w="100%">
          <LoginButton type='google'>Continue With Google</LoginButton>
          <LoginButton type='facebook'>Continue With Facebook</LoginButton>
        </Box>
      </Box>
    )
  }
}

export default LoginScreen;