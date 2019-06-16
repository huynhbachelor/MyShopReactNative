import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Collection from './Collection';
import Category from './Category';
import TopProducts from './TopProducts';

class HomeScreen extends Component {
    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#C8D8D8' }}>
                <Collection />
                <Category navigation={this.props.navigation} />
                <TopProducts navigation={this.props.navigation} />
            </ScrollView>
        );
    }
}

export default HomeScreen;
