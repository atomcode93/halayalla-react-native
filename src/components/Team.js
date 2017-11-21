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

export default class Team extends Component<{}> {
    constructor(){
        super()
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection: 'row'}}>
                    <Image source={ this.props.team.avatarUrl } style={styles.avatar} />
                    <View style={{justifyContent: 'center', marginLeft: 15}}>
                        <Text style={styles.name}>{ this.props.team.name }</Text>
                    </View>
                </View>
                <View style={{justifyContent: 'center'}}>
                    <FAIcon name='chevron-right' size={18} color='#4A4A4A' />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8'
    },
    avatar: {
        width: 40, 
        height: 40, 
        resizeMode: 'contain'
    },
    name: {
        color: '#4A4A4A',
        fontSize: 16,
    }
});