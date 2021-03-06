import React from 'react';
import { createAppContainer, createSwitchNavigator,  } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import SelectProvider from './pages/New/SelectProvider';
import SelectDateTime from './pages/New/SelectDateTime';
import Confirmation from './pages/New/Confirmation';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard,
            New: {
              screen: createStackNavigator(
                {
                  SelectProvider,
                  SelectDateTime,
                  Confirmation,
                },{
                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerTintColor: '#FFF',
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                  },
                }
                ),
                navigationOptions: {
                  // faz a tabBar sumir ao clickar
                  tabBarVisible: false,
                  tabBarLabel: 'Booking',
                  tabBarIcon: (
                    <Icon
                      name="add-circle-outline"
                      size={20}
                      color='#FFF'
                    />
                  ),
                },
              },
            Profile,
        },
        {
          resetOnBlur: true,
          tabBarOptions: {
            keyboardHidesTabBar: true,
            activeTintColor: '#FFF',
            inactiveTintColor: 'rgba(255,255,255, 0.7)',
            style: {
              backgroundColor: 'rgba(50,47,58,9)',


            },
          },
        }
        ),
      },
        {
          initialRouteName: signedIn ? 'App' : 'Sign'
        }),
  );
