import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';

export default class Tournament extends Component<{}> {
    constructor(){
        super()
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={ this.props.data.markUrl } style={{width: 80, height: 60, marginRight: 10, borderRadius: 10}} />
                <View>
                    <Text style={styles.tournamentName}>{this.props.data.name}</Text>
                    <Text style={styles.text}>{this.props.data.subTitle}</Text>
                    <Text style={[styles.text, {marginTop: 5}]}>{this.props.data.teams + ' Teams'}</Text>
                    <Text style={styles.text}>{'Start from ' + this.props.data.startDate}</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8'
    },
    tournamentName: {
        color: '#4A4A4A',
        fontSize: 15
    },
    text: {
        color: '#9E9E9E',
        fontSize: 12
    }
});