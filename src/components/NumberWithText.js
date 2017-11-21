import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';

export default class NumberWithText extends Component<{}> {
    constructor(){
        super()
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={this.props.type==='profileInfo'?styles.numberStyle:null}>{this.props.number}</Text>
                <Text style={this.props.type==='profileInfo'?styles.textStyle:null}>{this.props.text}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
    numberStyle: {
        fontSize: 23,
        fontWeight: '400',
        color: 'white'
    },
    textStyle: {
        fontSize: 16,
        fontWeight: '400',
        color: 'white'
    }
});