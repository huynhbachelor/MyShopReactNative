import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import Collection from './Collection';
import Category from './Category';
import TopProducts from './TopProducts';

class HomeScreen extends Component {
    static navigationOptions={
        tabBarIcon: ({ tintColor }) => (
            <Icon 
                name='home'
                color={tintColor}
            />
        )
    }

    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#C8D8D8' }}>
                <Collection />
                <Category />
                <TopProducts />
            </ScrollView>
        );
    }
}

export default HomeScreen;
