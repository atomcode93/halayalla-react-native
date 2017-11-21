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

export default class Player extends Component<{}> {
    constructor(){
        super()
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={ this.props.player.photoUrl } style={styles.photo} />
                <View style={{justifyContent: 'center', marginLeft: 20}}>
                    <Text style={styles.name}>{ this.props.player.name }</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10
    },
    photo: {
        width: 40, 
        height: 40, 
        borderRadius: 20
    },
    name: {
        color: '#4A4A4A',
        fontSize: 16
    }
});