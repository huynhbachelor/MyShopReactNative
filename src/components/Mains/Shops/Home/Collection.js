import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { Image, Text } from 'react-native-elements';

const { height } = Dimensions.get('window');

class Collection extends Component {
    render() {
        return (
            <View style={styles.warpper}>
                <Text style={styles.textCollection}>Spring Collection</Text>
                <Image 
                    source={{ uri: 'https://github.com/vanpho93/LiveCodeReactNative/blob/master/src/media/temp/banner.jpg?raw=true' }}
                    style={{
                        width: '100%',
                        height: '90%',
                        borderWidth: 1
                    }}
                    PlaceholderContent={<ActivityIndicator />}
                />
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

export default Collection;
