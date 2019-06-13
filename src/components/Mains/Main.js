import React from 'react';
import { View, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import { createDrawerNavigator, createAppContainer, DrawerItems } from 'react-navigation';
import { Avatar } from 'react-native-elements';
import Shop from './Shops/Shop';
import Authencation from '../Authentications/Authentication';
import ChangeInfor from '../ChangeInfors/ChangeInfor';
import OrderHistory from '../OrderHistorys/OrderHistory';


const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always', horizontal: 'never' }}>
    <View 
      style={{ 
        height: 150, 
        backgroundColor: 'white', 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}
    >
      <Avatar 
        rounded
        size='large'
        source={{ uri: 'https://lh3.googleusercontent.com/-Ywt4bmaESdQ/V-aBCJhAVJI/AAAAAAAAASc/IOwD0F8k0zkz4nLjUSRJGJSKEb6VMFepwCEwYBhgL/w140-h139-p/jannina_w.jpg' }}
        PlaceholderContent={<ActivityIndicator />}
        showEditButton
        title='bach huynh'
      />
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

