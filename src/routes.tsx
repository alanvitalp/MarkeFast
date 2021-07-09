import "react-native-gesture-handler";
import React from "react";

import Home from './screens/HomeScreen'
import Search from './screens/SearchScreen'
import Shopping from './screens/ShoppingScreen'
import User from "./screens/UserScreen";


import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 


import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="search"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, tintColor }: any) => {
            if (route.name === 'home') {
              return (
                <AntDesign
                  name="home"
                  size={28} 
                  color={focused ? tintColor : '#C5C5C5'}
                  focused={focused}
                />
              );
            } else if (route.name === 'search') {
              return (
                <AntDesign
                  name="search1"
                  size={28} 
                  color={focused ? tintColor : '#C5C5C5'}
                  focused={focused}
                />
              );
            } else if (route.name === "shopping") {
              return (
                <Feather
                  name="shopping-bag" 
                  size={28} 
                  color={focused ? tintColor : '#C5C5C5'}
                  focused={focused}
                />
              )
            } else if (route.name === "user") {
              return (
                <FontAwesome
                  name="user-o" 
                  size={28} 
                  color={focused ? tintColor : '#C5C5C5'}
                  focused={focused}
                />
              )
            }
          },
        })}       
        tabBarOptions={{
          showLabel: false,
          style: {
            height: 80,
          },
        }}
      >
        <Tab.Screen name="home" component={Home}/>
        <Tab.Screen name="search" component={Search} />
        <Tab.Screen name="shopping" component={Shopping} />
        <Tab.Screen name="user" component={User} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;