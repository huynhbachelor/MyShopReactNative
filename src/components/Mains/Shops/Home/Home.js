import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, SearchBar } from 'react-native-elements';

class HomeScreen extends Component {
    state = {
        search: '',
    };
    
    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        return (
            <View>
                <Header 
                    leftComponent={{ 
                        icon: 'menu', 
                        color: 'white',
                        onPress: () => { this.props.navigation.openDrawer(); }
                    }}
                    centerComponent={{ text: 'Shop', style: { color: 'white', fontSize: 20 } }}
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
                    placeholder="Type Here..."
                    lightTheme
                    round
                    onChangeText={this.updateSearch}
                    value={this.state.search}
                />
            </View>
        );
    }
}

export default HomeScreen;
