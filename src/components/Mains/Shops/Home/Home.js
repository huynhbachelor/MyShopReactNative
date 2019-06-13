import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import Collection from './Collection';
import Category from './Category';

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
            <View style={{ flex: 1, backgroundColor: '#C8D8D8' }}>
                <Collection />
                <Category />
            </View>
        );
    }
}

export default HomeScreen;
