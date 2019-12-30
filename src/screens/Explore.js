import React, { Component } from 'react';
import {
    View,
    SafeAreaView,
    TextInput,
    Image,
    StatusBar,
    Platform,
    ScrollView,
    Text,
    Dimensions
} from 'react-native';

import Category from '../components/Explore/Category';

const { height, width } = Dimensions.get('window');

const ExploreIcon = require('../assets/search.png');

const Home = require('../assets/home.jpg');
const Experiences = require('../assets/experiences.jpg');
const Restaurant = require('../assets/restaurant.jpg');

export default class Explore extends Component {
    UNSAFE_componentWillMount() {
        this.stateHeaderHeight = 80;

        if (Platform.OS == 'android') {
            this.stateHeaderHeight = 100 + StatusBar.currentHeight;
        }
    }

    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" backgroundColor="white" />
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <View
                            style={{
                                height: this.stateHeaderHeight,
                                backgroundColor: 'white',
                                borderBottomWidth: 1,
                                borderBottomColor: "#ddd"
                            }}
                        >
                            <View style={{
                                flexDirection: 'row',
                                padding: 10,
                                backgroundColor: 'white',
                                marginHorizontal: 20,
                                shadowOffset: { width: 0, height: 0 },
                                shadowColor: 'black',
                                shadowOpacity: 0.2,
                                alignItems: 'center',
                                elevation: 1,
                                marginTop: Platform.OS == 'android' ? 30 : null
                            }}>
                                <Image style={{ width: 20, height: 20 }} source={ExploreIcon} />
                                <TextInput
                                    underlineColorAndroid="transparent"
                                    placeholder="Try new delhi"
                                    placeholderTextColor="grey"
                                    style={{
                                        flex: 1,
                                        fontWeight: '700',
                                        backgroundColor: 'white'
                                    }}
                                />
                            </View>
                        </View>

                        <ScrollView
                            scrollEventThrottle={16}
                        >
                            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                                <Text
                                    style={{
                                        fontSize: 24,
                                        fontWeight: '700',
                                        paddingHorizontal: 20
                                    }}
                                >
                                    What can we help you find, Murilo?
                                </Text>

                                <View style={{ height: 130, marginTop: 20 }}>
                                    <ScrollView
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                    >
                                        <Category imageUri={Home} name="Home" />
                                        <Category imageUri={Experiences} name="Experiences" />
                                        <Category imageUri={Restaurant} name="Restaurant" />
                                    </ScrollView>
                                </View>

                                <View
                                    style={{
                                        marginTop: 40,
                                        paddingHorizontal: 20
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 24,
                                            fontWeight: '700',

                                        }}
                                    >
                                        Introducing Airbnb Plus
                                    </Text>

                                    <Text style={{ fontWeight: '100', marginTop: 10 }}>
                                        A new selection of homes verified for quality & comfort
                                    </Text>

                                    <View
                                        style={{
                                            width: width - 40,
                                            height: 200,
                                            marginTop: 20
                                        }}
                                    >
                                        <Image
                                            style={{
                                                flex: 1,
                                                height: null,
                                                width: null,
                                                resizeMode: 'cover',
                                                borderRadius: 5,
                                                borderWidth: 1,
                                                borderColor: '#ddd'
                                            }}
                                            source={Home}
                                        />
                                    </View>
                                </View>
                            </View>

                            <View style={{ marginTop: 40 }}>
                                <Text
                                    style={{
                                        fontSize: 24,
                                        fontWeight: '700',
                                        paddingHorizontal: 20
                                    }}
                                >
                                    Homes around the world
                                </Text>

                                <View
                                    style={{
                                        paddingHorizontal: 20,
                                        marginTop: 20,
                                        borderWidth: 0.5,
                                        borderColor: '#ddd'
                                    }}
                                >
                                    <View style={{ width: width / 2, height: width / 2 }}>
                                        <View style={{ flex: 1 }}>
                                            <Image
                                                style={{
                                                    flex: 1,
                                                    width: null,
                                                    height: null,
                                                    resizeMode: 'cover'
                                                }}
                                                source={Home}
                                            />
                                        </View>

                                        <View style={{ flex: 1 }}>
                                            <Text></Text>
                                            <Text></Text>
                                            <Text></Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </>
        );
    }
}
