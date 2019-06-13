import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { Text, Image } from 'react-native-elements';
import Swiper from 'react-native-swiper';

const { height } = Dimensions.get('window');

class Category extends Component {
    render() {
        return (
            <View style={styles.warpper}>
                <Text style={styles.textCollection}>List Of Category</Text>
                <Swiper
                    showsButtons
                    width="100%"
                    height="100%"
                >
                    <Image 
                        source={{ uri: 'https://github.com/vanpho93/LiveCodeReactNative/blob/master/src/media/temp/banner.jpg?raw=true' }}
                        style={{
                            width: '100%',
                            height: '100%',
                            borderWidth: 1
                        }}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                    <Image 
                        source={{ uri: '' }}
                        style={{
                            width: '100%',
                            height: '100%',
                            borderWidth: 1
                        }}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                    <Image 
                        source={{ uri: '' }}
                        style={{
                            width: '100%',
                            height: '100%',
                            borderWidth: 1
                        }}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                </Swiper>
            </View>
        )
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
    },
    slide1: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
});

export default Category;
