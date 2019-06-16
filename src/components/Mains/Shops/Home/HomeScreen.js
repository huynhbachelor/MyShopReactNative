import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { Icon } from 'react-native-elements';
import Home from './Home';
import LisProduct from '../ListProduct/ListProduct';
import ProductDetail from '../ProductDetail/ProductDetail';

const HomeShopNavigation = createStackNavigator(
    {
        Home: {
            screen: Home
        },
        ListProduct: {
            screen: LisProduct
        },
        ProductDetail: {
            screen: ProductDetail
        }
    },
    {
        initialRouteName: 'ProductDetail',
        mode: 'card',
        headerMode: 'none',
    }
);

const HomeNavigator = createAppContainer(HomeShopNavigation);

class HomeScreen extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name='home'
                color={tintColor}
            />
        )
    }

    render() {
        return (
            <HomeNavigator />
        );
    }
}

export default HomeScreen;
