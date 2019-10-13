import {createStackNavigator, createSwitchNavigator, createBottomTabNavigator} from 'react-navigation'
import React, {Component} from 'react';

const AuthNavigation = createStackNavigator(
  {
    Login: {
      getScreen: () => require('./LoginScreen').default,
    }
  },
  {
    navigationOptions: {
      header: null
    }
  }
)

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      getScreen: () => require('./HomeScreen').default,
    }
  }
)

const MainNavigator = createStackNavigator({
  Tab: TabNavigator,
});

const AppNavigator = createSwitchNavigator(
  {
    Splash: {
      getScreen: () => require('./SplashScreen').default,
    },
    Auth: AuthNavigation,
    Main: MainNavigator
  },
  {
    initialRouteName: 'Splash'
  }
);

class Navigation extends Component {
  state = {};
  render() {
    return <AppNavigator />;
  }
}

export default Navigation;