import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    TouchableHighlight,
    Text,
    View
} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';

export default class Merchandise extends Component<{}> {
    constructor(){
        super()
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.merchandise}>
                    <Image source={this.props.data.url} style={{width: 80, height: 100, alignSelf: 'center'}} />
                    <Text style={{color: '#4A4A4A', fontSize: 14, marginTop: 10, marginBottom: 5}}>{this.props.data.name}</Text>
                    <Text style={{color: '#B3B3B3', fontSize: 14}}>{this.props.data.price + 'SAR'}</Text>
                </View>
                <TouchableHighlight style={styles.button}>
                    <Text style={{color: 'white', fontSize: 12}}>BUY NOW</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        
    },
    merchandise: {
        borderWidth: 1,
        borderColor: '#EDEDED',
        padding: 5
    },
    button: {
        backgroundColor: '#09A24F',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 7
    }
});