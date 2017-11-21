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

export default class IPhoneEightCopyFour extends Component<{}> {
    static navigationOptions = {
        title: 'iPhone 8 Copy 4'
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
                    <Text style={{color: '#4A4A4A', fontSize: 24, width: '60%', marginTop: 150, textAlign: 'center'}}>GO TO HY{'\n'}PAYMENT SCREEN</Text>
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
        backgroundColor: '#F1F1F1',
        alignItems: 'center'
    },

});