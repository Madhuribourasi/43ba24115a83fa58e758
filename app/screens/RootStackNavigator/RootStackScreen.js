/**
 * Root Stack Screen
 */
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../Splash&Home/Splash';
import Home from '../Splash&Home/Home';
import List from '../CountryList&Information/List';
import info from '../CountryList&Information/info';


const RootStack = createStackNavigator();
const NewStack = createStackNavigator();

const RootStackScreen = (props) => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen
                options={({}) => ({headerShown: false})
                }
                name="Splash" component={Splash} />
            <RootStack.Screen
                options={({ route, navigation }) => ({
                    title: 'Home',
                    headerTitleAlign: 'center',
                    headerTintColor: 'Black',
                    // headerStyle: { backgroundColor: 'skyblue', },
                    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
                    route: { route },
                    navigation: { navigation }
                })
                }
                name="Home"
                component={Home}
            />
            <RootStack.Screen
                options={({ route, navigation }) => ({
                    title: 'List of Country',
                    headerTitleAlign: 'center',
                    headerTintColor: 'black',
                    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
                    route: { route },
                    navigation: { navigation }
                })
                }
                name="CountryList"
                component={List}
            />
            <RootStack.Screen
                options={({ route, navigation }) => ({
                    title: 'Country Information',
                    headerTitleAlign: 'center',
                    headerTintColor: 'black',
                    // headerStyle: { backgroundColor: COLOR_CONST.lightGreen, },
                    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
                    route: { route },
                    navigation: { navigation }
                })
                }
                name="CountryInformation"
                component={info}
            />
        </RootStack.Navigator>
    );
};

export default RootStackScreen;