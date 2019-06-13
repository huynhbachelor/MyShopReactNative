import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, SearchBar, Icon } from 'react-native-elements';

class SearchScreen extends Component {
    static navigationOptions={
        tabBarIcon: ({ tintColor }) => (
            <Icon 
                name='search'
                color={tintColor}
            />
        )
    }
    render() {
        return (
            <View>
                <Text>SearchScreen</Text>
            </View>
        );
    }
}

export default SearchScreen;
