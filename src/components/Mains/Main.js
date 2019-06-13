import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer, DrawerItems } from 'react-navigation';
import Shop from './Shops/Shop';
import Authencation from '../Authentications/Authentication';
import ChangeInfor from '../ChangeInfors/ChangeInfor';
import OrderHistory from '../OrderHistorys/OrderHistory';


const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always', horizontal: 'never' }}>
    <View style={{ height: 150, backgroundColor: 'gray' }}>
      <Text>Infor</Text>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);


const MainDrawerNavigation = createDrawerNavigator(
  {
    Home: {
      screen: Shop,
      navigationOptions: {
        drawerLabel: 'Home',
      }
    },
    ChangeInfor: {
      screen: ChangeInfor,
      navigationOptions: {
        drawerLabel: 'Change Infor'
      }
    },
    OrderHistory: {
      screen: OrderHistory,
      navigationOptions: {
        drawerLabel: 'Order History'
      }
    },  
    Authencation: {
      screen: Authencation,
      navigationOptions: {
        drawerLabel: 'Sing out'
      }
    },         
  },  
  {
    contentComponent: CustomDrawerComponent
  }
);

const Main = createAppContainer(MainDrawerNavigation);
export default Main;

