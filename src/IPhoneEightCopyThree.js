import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableHighlight,
    Text,
    View,
    Dimensions
} from 'react-native';

import FAIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default class IPhoneEightCopyThree extends Component<{}> {
    static navigationOptions = {
        title: 'iPhone 8 Copy 3'
    };
    constructor(props) {
        super(props);
    }

    render() {

        const { navigate } = this.props.navigation;

        return (
            <View style={{flex: 1, flexDirection: 'column'}}>

                <ImageBackground source={ require('../src/images/header.png') } style={styles.header}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <TouchableHighlight style={{width: '15%', justifyContent: 'center'}} underlayColor='transparent'>
                            <FAIcon name='chevron-left' size={14} color='white' />
                        </TouchableHighlight>
                        <Image source={ require('../src/images/logo.png') } style={styles.headerTitle} />
                        <View style={{flexDirection: 'row', justifyContent: 'flex-end', width: '15%'}}>
                            <View style={styles.headerIcon}>
                                <FAIcon name='search' size={16} color='white' />
                            </View>
                            <View style={[styles.headerIcon, {marginLeft: 10}]}>
                                <FAIcon name='bell' size={16} color='white' />
                            </View>
                        </View>
                    </View>
                </ImageBackground>

                <View style={styles.container}>
                    <Text style={{color: '#4A4A4A', fontSize: 15, marginTop: 15, marginBottom: 20}}>YOUR PAYMENT DETAILS</Text>

                    <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'space-between'}}>
                        <View>
                            <View style={{padding: 15}}>
                                <Text style={{color: '#4A4A4A', fontSize: 18, marginBottom: 10}}>Rashid Rasool{'\n'}Personal Training (Individual)</Text>
                                <Text style={{color: '#9B9B9B', fontSize: 18}}>8 Classes at the rate of SAR 100{'\n'}Nov 10</Text>
                            </View>
                            <View style={{backgroundColor: '#979797', height: 1, opacity: 0.2}} />
                        </View>

                        <View>
                            <View style={{backgroundColor: '#979797', height: 1, opacity: 0.2}} />
                            <View style={{padding: 15, flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text style={{color: '#4A4A4A', fontSize: 18}}>Total Amount</Text>
                                <Text style={{color: '#4A4A4A', fontSize: 18}}>SAR 800</Text>
                            </View>
                        </View>
                    </View>

                    <TouchableHighlight style={styles.button} >
                        <Text style={{color: 'white', fontSize: 15}}>PROCEED TO PAYMENT</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 70,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 10,
        paddingTop: 30
    },
    headerTitle: {
        height: 30,
        width: '40%',
        resizeMode: 'contain',
    },
    headerIcon: {
        backgroundColor: 'transparent',
        width: 30,
        height: 30,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container:{
        height: Dimensions.get('window').height - 70,
        padding: 10,
        justifyContent: 'space-between',
        backgroundColor: '#F1F1F1'
    },
    button: {
        margin: 20,
        width: '70%',
        backgroundColor: '#00a14c',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 12,
        borderRadius: 30
    }
});