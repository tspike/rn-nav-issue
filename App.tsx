import React from 'react';
import 'react-native-gesture-handler';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {CompositeNavigationProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import {Button} from 'native-base';

export type AParamList = {
  x: undefined;
  y: {z: string};
};

export type BParamList = {
  w: undefined;
  z: {z: number};
};

export type TabParamList = {
  A: undefined;
  B: undefined;
};

const RootAStack = createStackNavigator();
const RootBStack = createStackNavigator();

export type ANavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'A'>,
  StackNavigationProp<AParamList>
>;
export type BNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'B'>,
  StackNavigationProp<BParamList>
>;

export type AOptions = {
  navigationProps: ANavigationProp;
};

export type BOptions = {
  navigationProps: BNavigationProp;
};

const Tab = createBottomTabNavigator();

const RootAStackScreen = () => {
  return (
    <>
      <RootAStack.Navigator>
        <RootAStack.Screen name="RootA" component={RootAScreen} />
        <RootAStack.Screen name="DetailsA" component={DetailsAScreen} />
      </RootAStack.Navigator>
    </>
  );
};

const RootBStackScreen = () => {
  return (
    <>
      <RootBStack.Navigator>
        <RootBStack.Screen name="RootB" component={RootBScreen} />
      </RootBStack.Navigator>
    </>
  );
};

const RootAScreen = (navigationProps: ANavigationProp) => {
  return (
    <>
      <Button transparent onPress={() => navigationProps.navigate('A')}>
        <Text>Go to details screen</Text>
      </Button>
    </>
  );
};
const RootBScreen = () => {
  return (
    <>
      <Text>B Screen</Text>
    </>
  );
};
const DetailsAScreen = () => {
  return (
    <>
      <Text>Details screen</Text>
    </>
  );
};

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            style: {backgroundColor: 'white', borderColor: 'black'},
          }}>
          <Tab.Screen name="RootA" component={RootAStackScreen} />
          <Tab.Screen name="RootB" component={RootBStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
