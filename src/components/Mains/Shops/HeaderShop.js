import React from 'react';
import { View } from 'react-native';
import { Header, SearchBar } from 'react-native-elements';

class HeaderShop extends React.Component {
    render() {
        return (
            <View>
                <Header 
                    leftComponent={{ 
                        icon: 'menu', 
                        color: 'white',
                        onPress: () => {this.props.navigation.openDrawer()}
                    }}
                    centerComponent={{ text: 'Shop', style: { color: 'white', fontSize: 20 } }}
                    containerStyle={{
                        height: 55,
                        alignItems: 'center',
                        justifyContent: 'flex-start'
                    }}
                />               
                <SearchBar />
            </View>
        );
    }
}

export default HeaderShop;
