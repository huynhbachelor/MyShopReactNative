import React, { Component } from 'react';
import { 
    View, FlatList, StyleSheet, 
    Text, ActivityIndicator, TouchableOpacity 
} from 'react-native';
import { Header, Image } from 'react-native-elements';
import backList from '../../../../accsets/backList.png';

class ListProduct extends Component {

    state = {
        data: [],
        refreshing: false
    }

    componentDidMount = () => {
        const arr = [
            {
                name: 'Lace Sleeve Si',
                image: 'https://github.com/vanpho93/LiveCodeReactNative/blob/master/images/125.jpeg?raw=true',
                price: '117',
                product: 'Material silk',
                color: 'RoyalBlue',
                detail: true
            },
            {
                name: 'Asymmetrical G',
                image: 'https://github.com/vanpho93/LiveCodeReactNative/blob/master/images/130.jpeg?raw=true',
                price: '124',
                product: 'Material leather',
                color: 'MediumSeaGreeen',
                detail: false
            },
            {
                name: 'Mesh Embellish',
                image: 'https://github.com/vanpho93/LiveCodeReactNative/blob/master/images/142.jpeg?raw=true',
                price: '109',
                product: 'Material leather',
                color: 'Gainsboro',
                detail: true
            }
        ];

        this.setState({
            data: arr
        });
    }

    onRefresh= () => {
        this.setState(
            {
                refreshing: true
            }
        );
        //
    }

    onEndReached = () => {
        this.setState({
            //
        });
    }


    renderItem = ({ item }) => (
        <View style={{ paddingHorizontal: 15 }}>
            <View style={styles.itemContainer}>
                <Image
                    style={styles.itemImage}
                    PlaceholderContent={<ActivityIndicator />}
                    source={{ uri: item.image }}
                />
                <View style={styles.itemBox1}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemPrice}>{item.price}$</Text>
                    <Text style={styles.itemProduct}>{item.product}</Text>
                    <Text style={styles.itemColor}>Color {item.color}</Text>
                </View>
                <View style={styles.itemBox2}>
                    <TouchableOpacity 
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => {
                            if (item.detail) {
                                this.props.navigation.navigate('ProductDetail');
                            }
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: (item.detail) ? 'blue' : 'cyan',
                                width: 15,
                                height: 15,
                                borderRadius: 7,
                                marginRight: 2
                            }}
                        />
                        <Text
                            style={{
                                color: (item.detail) ? 'blue' : 'cyan',
                            }}
                        >
                            Show Detail
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );


    render() {
        const {
            container,
            header,
            headerTitle
        } = styles;
        return (
            <View style={{ flex: 1, backgroundColor: '#C8D8D8', padding: 12 }}>
                <View style={container}>
                    <Header
                        leftComponent={
                            <Image
                                style={{ height: 25, width: 25 }}
                                source={backList}
                            />
                        }
                        centerComponent={<Text style={headerTitle} >Party Dress</Text>}
                        containerStyle={header}
                    />
                    <FlatList
                        data={this.state.data}
                        renderItem={this.renderItem}
                        keyExtractor={(item) => item.name}
                        ListFooterComponent={<ActivityIndicator />}
                        onRefresh={this.onRefresh}
                        refreshing={this.state.refreshing}
                        onEndReached={this.onEndReached}
                        onEndReachedThreshold={0.1}
                    />
                </View>
            </View>
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
        marginBottom: 40
    },
    header: {
        backgroundColor: '#fff',
        height: 50,
        paddingBottom: 25
    },
    headerTitle: {
        fontSize: 22,
        marginHorizontal: 15,
        marginVertical: 5,
        fontWeight: 'bold',
        color: '#AFAEAF',
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 5,
        borderBottomWidth: 1
    },
    itemImage: {
        width: 90,
        height: 140,
        flex: 1
    },
    itemBox1: {
        justifyContent: 'space-between',
        flex: 2,
        paddingLeft: 10,
        paddingRight: 5
    },
    itemName: {
        fontSize: 20,
        fontWeight: 'bold',
        height: 30
    },
    itemPrice: {
        fontSize: 20,
        color: '#000',
        height: 30
    },
    itemProduct: {
        fontSize: 18,
        color: '#000',
        height: 20
    },
    itemColor: {
        fontSize: 18,
        color: '#000',
        height: 20
    },
    itemBox2: {
        flex: 1,
        justifyContent: 'flex-end',
    },
});

export default ListProduct;
