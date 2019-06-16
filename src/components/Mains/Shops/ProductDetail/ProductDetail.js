import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, Image } from 'react-native-elements';


const back = require('../../../../accsets/backList.png');
const cart = require('../../../../accsets/cartfull.png');

class ProductDetail extends Component {
    render() {

        const { container, header } = styles;

        return (
            <View style={{ flex: 1, backgroundColor: '#C8D8D8', padding: 12 }}>
                <View style={container}>
                    <Header
                        leftComponent={
                            <Image
                                style={{ height: 25, width: 25 }}
                                source={back}
                            />
                        }
                        rightComponent={
                            <Image
                                style={{ height: 25, width: 25 }}
                                source={cart}
                            />
                        }
                        containerStyle={header}
                    />
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowColor: '#149191',
        elevation: 5,
        marginBottom: 40
    },
    header: {
        backgroundColor: '#fff',
        height: 50,
        paddingBottom: 25
    },
});

export default ProductDetail;
