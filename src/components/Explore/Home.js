import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';

export default class Home extends Component {
    render() {
        return (
            <View
                style={{
                    width: this.props.width / 2 - 30,
                    height: this.props.width / 2 - 30,
                    borderWidth: 0.5,
                    borderColor: '#ddd'
                }}>
                <View style={{ flex: 1 }}>
                    <Image
                        style={{
                            flex: 1,
                            width: null,
                            height: null,
                            resizeMode: 'cover'
                        }}
                        source={this.props.home}
                    />
                </View>

                <View
                    style={{
                        flex: 1,
                        alignItems: 'flex-start',
                        justifyContent: 'space-evenly',
                        paddingLeft: 10
                    }}
                >
                    <Text
                        style={{ fontSize: 10, color: '#b63838' }}
                    >
                        {this.props.type}
                    </Text>
                    <Text
                        style={{ fontSize: 12, fontWeight: 'bold' }}
                    >
                        {this.props.name}
                    </Text>
                    <Text style={{ fontSize: 10 }}>${this.props.price}</Text>
                </View>
            </View>
        );
    }
}
