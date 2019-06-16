import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Authentication from './Authentications/Authentication';
import ChangeInfor from './ChangeInfors/ChangeInfor';
import Main from './Mains/Main';
import OrderHistory from './OrderHistorys/OrderHistory';

class LogoTitle extends React.Component {
  render() {
    return (
      <View >
        <Text style={{ fontSize: 22, color: 'blue' }}>Authentication</Text>
      </View>
    );
  }
}

const MainNavigator = createStackNavigator({
    Auth: { 
      screen: Authentication,
      navigationOptions: {
        headerTitle: <LogoTitle />,
        headerTitleStyle: {
          color: 'blue'
        },
        headerStyle: {
          backgroudcolor: 'green'
        }, 
      }
    },
    ChangeInfor: { 
      screen: ChangeInfor,
      navigationOptions: {
        title: 'Change Infor'
      }
    },
    Main: { 
      screen: Main,
      navigationOptions: {
        title: 'Main'
      } 
    },
    Oder: { 
      screen: OrderHistory,
      navigationOptions: {
        title: 'Order History'
      }
    }
  },
  {
    initialRouteName: 'Main',
    mode: 'modal',
    headerMode: 'none' 
  }
);

const App = createAppContainer(MainNavigator);

export default App;
