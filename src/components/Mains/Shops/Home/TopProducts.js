import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import { myWidth, myFont } from '../../../../consts/dimens';


class TopProducts extends Component {
    state = {
        data: []
    }


    componentDidMount() {
        const arr = [
            { 
                'name': 'Product 1', 
                'picture': 'https://github.com/vanpho93/LiveCodeReactNative/blob/master/images/100.jpeg?raw=true' 
            }, 
            { 
                'name': 'Product 2', 
                'picture': 'https://github.com/vanpho93/LiveCodeReactNative/blob/master/images/101.jpeg?raw=true' 
            },
            { 
                'name': 'Product 3', 
                'picture': 'https://github.com/vanpho93/LiveCodeReactNative/blob/master/images/101.jpeg?raw=true' 
            },
            { 
                'name': 'Product 4', 
                'picture': 'https://github.com/vanpho93/LiveCodeReactNative/blob/master/images/101.jpeg?raw=true' 
            }
        ];
        this.setState({
            data: this.state.data.concat(arr)
        });
    }

    renderItem = ({ item }) => (
        <View style={styles.box}>
            <Image 
                source={{ uri: item.picture }}
                PlaceholderContent={<ActivityIndicator />}
                style={styles.imageProduct}
            />
            <Text style={styles.titleProduct}>{item.name}</Text>
        </View>
    );

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.top}>Top Product</Text>
                <FlatList
                    numColumns='2'
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={(name, value) => value}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowColor: '#149191',
        elevation: 5,
        margin: 12,
    },
    box: {
        width: myWidth.widthProduct,
        backgroundColor: '#fff',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowColor: '#149191',
        elevation: 5,
        margin: 10,
    },
    imageProduct: {
        width: '100%',
        height: 220
    },
    titleProduct: {
        fontSize: myFont.nomall,
        alignSelf: 'center'
    },
    top: {
        fontSize: myFont.large,
        marginHorizontal: 15,
        marginVertical: 5,
        fontWeight: 'bold',
        color: '#AFAEAF',
    }
});

export default TopProducts;
