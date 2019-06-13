import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, SearchBar, Icon, Badge } from 'react-native-elements';

class CartScreen extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <View>
                <Icon
                    name='done'
                    color={tintColor}
                />
                <Badge 
                    status="success"
                    value='0'
                    containerStyle={{ position: 'absolute', top: -5, right: -12 }}
                />
            </View>
        )
    }
    render() {
        return (
            <View>
                <Text>CartScreen</Text>
            </View>
        );
    }
}

export default CartScreen;
