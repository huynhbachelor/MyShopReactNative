import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Text, Image } from 'react-native-elements';
import Swiper from 'react-native-swiper';

const { height } = Dimensions.get('window');

class Category extends Component {

    gotoListProduct = () => {
        const { navigation } = this.props;
        navigation.navigate('ListProduct');
    }

    render() {
        return (
            <View style={styles.warpper}>
                <Text style={styles.textCollection}>List Of Category</Text>
                <Swiper
                    showsButtons
                    width="100%"
                    height="100%"
                >
                    <TouchableOpacity 
                        onPress={this.gotoListProduct}
                    >
                        <Image
                            source={{ uri: 'https://github.com/vanpho93/LiveCodeReactNative/blob/master/src/media/temp/banner.jpg?raw=true' }}
                            style={{
                                width: '100%',
                                height: '100%'
                            }}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                    </TouchableOpacity>
                    <Image
                        source={{ uri: '' }}
                        style={{
                            width: '100%',
                            height: '100%'
                        }}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                    <Image
                        source={{ uri: '' }}
                        style={{
                            width: '100%',
                            height: '100%'
                        }}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                </Swiper>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    warpper: {
        height: height * 0.32,
        backgroundColor: '#fff',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowColor: '#149191',
        elevation: 5,
        margin: 12,
        paddingTop: 5,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15
    },
    textCollection: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#AFAEAF',
        marginBottom: 10
    }
});

export default Category;
