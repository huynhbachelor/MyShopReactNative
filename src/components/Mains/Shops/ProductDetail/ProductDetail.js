import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Header, Image } from 'react-native-elements';


const back = require('../../../../accsets/backList.png');
const cart = require('../../../../accsets/cartfull.png');

class ProductDetail extends Component {

    state = {
        product: {
            name: 'Lace Sleeve Si',
            image: 'https://github.com/vanpho93/LiveCodeReactNative/blob/master/images/125.jpeg?raw=true',
            price: '117',
            product: 'Material silk',
            color: 'RoyalBlue',
            detail: true
        }
    }

    render() {
        const {
            container, header, body, wrapperPicture, wrapperName,
            wrapperFootter, longText, wrapperLongText,
            txtName, txtPrice
        } = styles;

        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#C8D8D8', padding: 12 }}>
                <View style={container}>
                    <Header
                        leftComponent={
                            <TouchableOpacity
                                onPress={() => this.props.navigation.goBack()}
                            >
                                <Image
                                    style={{ height: 25, width: 25 }}
                                    source={back}
                                />
                            </TouchableOpacity>
                        }
                        rightComponent={
                            <Image
                                style={{ height: 25, width: 25 }}
                                source={cart}
                            />
                        }
                        containerStyle={header}
                    />

                    <View style={body}>
                        <View style={wrapperPicture}>
                            <Image
                                source={{ uri: this.state.product.image }}
                                style={{ width: 160, height: 250, marginHorizontal: 10 }}
                            />
                            <Image
                                source={{ uri: this.state.product.image }}
                                style={{ width: 160, height: 250, marginHorizontal: 10  }}
                            />
                        </View>
                        <View style={wrapperName}>
                            <Text style={txtName}>{this.state.product.name}</Text>
                            <Text style={txtPrice}> / {this.state.product.price}$</Text>
                        </View>
                        <View style={wrapperLongText}>
                            <Text style={longText}>sjdkjsdkjshdskjhdksjhdkjskhsdsdsd</Text>
                        </View>
                        <View style={wrapperFootter}>
                            <Text style={{ flex: 1, fontSize: 22 }}>{this.state.product.color}</Text>
                            <View 
                                style={{ 
                                    flex: 1, 
                                    flexDirection: 'row', 
                                    justifyContent: 'flex-end',
                                    alignItems: 'center'
                                }}
                            >
                                <Text style={{ fontSize: 20 }}>Color Khaki</Text>
                                <View 
                                    style={{ 
                                        backgroundColor: 'green', 
                                        width: 15, 
                                        height: 15,
                                        borderRadius: 8,
                                        marginLeft: 10
                                    }} 
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowColor: '#149191',
        elevation: 5,
        marginBottom: 30
    },
    header: {
        backgroundColor: '#fff',
        height: 50,
        paddingBottom: 25
    },
    body: {
        padding: 10,
        justifyContent: 'center'
    },
    wrapperPicture: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    wrapperName: {
        flexDirection: 'row',
        paddingLeft: 50,
        alignItems: 'center',
        paddingVertical: 10
    },
    txtName: {
        fontSize: 25,
        fontWeight: '500'
    },
    txtPrice: {
        fontSize: 25,
    },
    wrapperLongText: {
        marginHorizontal: 15,
        paddingVertical: 25,
        borderTopWidth: 1
    },
    longText: {
        fontSize: 16
    },
    wrapperFootter: {
        marginHorizontal: 15,
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
});

export default ProductDetail;
