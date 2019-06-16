import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, SearchBar } from 'react-native-elements';
import CartScreen from './Cart/Cart';
import ContactScreen from './Contact/Contact';
import HomeScreen from './Home/HomeScreen';
import SearchScreen from './Search/Search';

const shopBotomTabNavigation = createBottomTabNavigator(
    {
        Home: HomeScreen,
        Cart: CartScreen,
        Search: SearchScreen,
        Contact: ContactScreen
    },
    {
        tabBarOptions: {
            inactiveTintColor: 'gray',
            activeTintColor: '#517fa4',
            labelStyle: {
                fontSize: 12,
            },
            style: {
                backgroundColor: '#fff',
            }
        }
    }
);

const ShoptabBar = createAppContainer(shopBotomTabNavigation);

class Shop extends Component {
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View>
                    <Header
                        leftComponent={{
                            icon: 'menu',
                            color: 'white',
                            onPress: () => { this.props.navigation.openDrawer(); }
                        }}
                        centerComponent={{ text: 'Home', style: { color: 'white', fontSize: 20 } }}
                        rightComponent={{
                            icon: 'apps',
                            color: 'white'
                        }}
                        containerStyle={{
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingBottom: 20
                        }}
                    />
                    <SearchBar
                        placeholder="What do you want to buy?"
                        lightTheme
                        round
                        onChangeText={this.updateSearch}
                        value={this.state.search}
                    />
                </View>
                <ShoptabBar />
            </View>

        );
    }
}

export default Shop;

