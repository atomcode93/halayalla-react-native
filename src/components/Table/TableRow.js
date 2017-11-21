import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';

export default class TableRow extends Component<{}> {
    constructor(){
        super()
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{width: '20%'}}>
                    <Image source={ this.props.data.avatarUrl } style={styles.avatar} />
                </View>
                <Text style={[styles.text, {width: '10%'}]}>{this.props.data.wins + this.props.data.draws + this.props.data.loss}</Text>
                <Text style={[styles.text, {width: '10%'}]}>{this.props.data.wins}</Text>
                <Text style={[styles.text, {width: '10%'}]}>{this.props.data.draws}</Text>
                <Text style={[styles.text, {width: '10%'}]}>{this.props.data.loss}</Text>
                <Text style={[styles.text, {width: '20%'}]}>{this.props.data.GF + '/' + this.props.data.GA}</Text>
                <Text style={[styles.text, {width: '10%'}]}>{this.props.data.GF - this.props.data.GA}</Text>
                <Text style={[styles.text, {width: '10%'}]}>{3 * this.props.data.wins + this.props.data.draws}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15
    },
    avatar: {
        width: 20, 
        height: 30, 
        resizeMode: 'contain'
    },
    text: {
        color: '#4A4A4A',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 10
    }
});