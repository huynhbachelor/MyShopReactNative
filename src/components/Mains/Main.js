import React from 'react';
import { View, SafeAreaView, ActivityIndicator } from 'react-native';
import { createDrawerNavigator, createAppContainer, DrawerItems } from 'react-navigation';
import { Avatar, Button } from 'react-native-elements';
import Shop from './Shops/Shop';
import Authencation from '../Authentications/Authentication';
import ChangeInfor from '../ChangeInfors/ChangeInfor';
import OrderHistory from '../OrderHistorys/OrderHistory';


const CustomDrawerComponentLogin = (props) => (
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
        title='bach huynh'
      />
    </View>
    <DrawerItems
      {...props}
    />
  </SafeAreaView>
);

const CustomDrawerComponentLogout = (props) => (
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
        source={{ uri: 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/62356744_2498780630167023_6873365322045325312_n.jpg?_nc_cat=1&_nc_oc=AQnqk3pRbWjUO4oY2b5VEFYbrT21YP0u88XbhEMUG9BK8axpMx9uDE5dSOVvgpQE-v4&_nc_ht=scontent.fsgn8-1.fna&oh=dd5e60ec94837e165fae723ed02b6170&oe=5D7A4FC3' }}
        PlaceholderContent={<ActivityIndicator />}
        showEditButton
        title='Minh Nghi'
      />
    </View>
    <Button
      title='LogIn'
      onPress={() => { props.navigation.navigate('Authencation'); }}
    />
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
    contentComponent: (1 === 2) ? CustomDrawerComponentLogin : CustomDrawerComponentLogout
  }
);

const Main = createAppContainer(MainDrawerNavigation);
export default Main;

