import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';

export default class Second extends Component<{}> {
    static navigationOptions = {
        tabBarLabel: 'Seconds',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('./images/1.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };
    render() {
        return (
            <Text>Second Page</Text>
        )
    }
}
const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});