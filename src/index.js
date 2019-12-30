import React from 'react';

import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import Explore from './screens/Explore';
import Inbox from './screens/Inbox';
import Saved from './screens/Saved';
import Trips from './screens/Trips';
import Profile from './screens/Profile';

const ExploreIcon = require('./assets/search.png');
const SavedIcon = require('./assets/heart.png');
const TripsIcon = require('./assets/airbnb.png');
const InboxIcon = require('./assets/chatboxes.png');
const ProfileIcon = require('./assets/person.png');

const BottomTabNavigator = createBottomTabNavigator({
    Explore: {
        screen: Explore,
        navigationOptions: {
            title: 'EXPLORE',
            tabBarIcon: ({ tintColor }) => (
                <Image style={{ width: 24, height: 24, tintColor: tintColor }} source={ExploreIcon} />
            ),
            tabBarOptions: {
                activeTintColor: 'red',
                inactiveTintColor: 'grey',
                style: {
                    backgroundColor: 'white',
                    borderTopWidth: 0,
                    shadowOffset: { width: 5, height: 3 },
                    shadowColor: 'black',
                    shadowOpacity: 0.5,
                    elevation: 5
                }
            }
        }
    },
    Saved: {
        screen: Saved,
        navigationOptions: {
            title: 'SAVED',
            tabBarIcon: ({ tintColor }) => (
                <Image style={{ width: 24, height: 24, tintColor: tintColor }} source={SavedIcon} />
            ),
            tabBarOptions: {
                activeTintColor: 'red',
                inactiveTintColor: 'grey',
                style: {
                    backgroundColor: 'white',
                    borderTopWidth: 0,
                    shadowOffset: { width: 5, height: 3 },
                    shadowColor: 'black',
                    shadowOpacity: 0.5,
                    elevation: 5
                }
            }
        }
    },
    Trips: {
        screen: Trips,
        navigationOptions: {
            title: 'TRIPS',
            tabBarIcon: ({ tintColor }) => (
                <Image style={{ width: 24, height: 24, tintColor: tintColor }} source={TripsIcon} />
            ),
            tabBarOptions: {
                activeTintColor: 'red',
                inactiveTintColor: 'grey',
                style: {
                    backgroundColor: 'white',
                    borderTopWidth: 0,
                    shadowOffset: { width: 5, height: 3 },
                    shadowColor: 'black',
                    shadowOpacity: 0.5,
                    elevation: 5
                }
            }
        }
    },
    Inbox: {
        screen: Inbox,
        navigationOptions: {
            title: 'INBOX',
            tabBarIcon: ({ tintColor }) => (
                <Image style={{ width: 24, height: 24, tintColor: tintColor }} source={InboxIcon} />
            ),
            tabBarOptions: {
                activeTintColor: 'red',
                inactiveTintColor: 'grey',
                style: {
                    backgroundColor: 'white',
                    borderTopWidth: 0,
                    shadowOffset: { width: 5, height: 3 },
                    shadowColor: 'black',
                    shadowOpacity: 0.5,
                    elevation: 5
                }
            }
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            title: 'PROFILE',
            tabBarIcon: ({ tintColor }) => (
                <Image style={{ width: 24, height: 24, tintColor: tintColor }} source={ProfileIcon} />
            ),
            tabBarOptions: {
                activeTintColor: 'red',
                inactiveTintColor: 'grey',
                style: {
                    backgroundColor: 'white',
                    borderTopWidth: 0,
                    shadowOffset: { width: 5, height: 3 },
                    shadowColor: 'black',
                    shadowOpacity: 0.5,
                    elevation: 5
                }
            }
        },
    }
});

export default createAppContainer(BottomTabNavigator);
