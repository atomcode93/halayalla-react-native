import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';

export default class TableHeader extends Component<{}> {
    constructor(){
        super()
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={[styles.text, {width: '20%', textAlign: 'left'}]}>Team</Text>
                    <Text style={[styles.text, {width: '10%'}]}>P</Text>
                    <Text style={[styles.text, {width: '10%'}]}>W</Text>
                    <Text style={[styles.text, {width: '10%'}]}>D</Text>
                    <Text style={[styles.text, {width: '10%'}]}>L</Text>
                    <Text style={[styles.text, {width: '20%'}]}>GF/GA</Text>
                    <Text style={[styles.text, {width: '10%'}]}>GD</Text>
                    <Text style={[styles.text, {width: '10%'}]}>PTS</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: '#F1F1F1',
        height: 40,
        paddingLeft: 15,
        paddingRight: 15
    },
    text: {
        color: '#4A4A4A',
        fontSize: 12,
        textAlign: 'center'
    }
});