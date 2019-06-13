import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, SearchBar, Icon } from 'react-native-elements';

class ContactScreen extends Component {
    static navigationOptions={
        tabBarIcon: ({ tintColor }) => (
            <Icon 
                name='info'
                color={tintColor}
            />
        )
    }
    render() {
        return (
            <View>
                <Text>ContactScreen</Text>
            </View>
        );
    }
}

export default ContactScreen;
