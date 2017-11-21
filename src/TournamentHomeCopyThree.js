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

export default class TournamentHomeCopyThree extends Component<{}> {
    static navigationOptions = {
        title: 'Tournament Home Copy 3'
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
                        <TouchableHighlight style={{width: '15%'}} underlayColor='transparent'>
                            <IonIcon name='md-arrow-round-back' size={24} color='white' style={{backgroundColor: 'transparent'}}/>
                        </TouchableHighlight>
                        <Text style={styles.headerTitle}>Join Tournament</Text>
                        <View style={{width: '15%'}} />
                    </View>
                </ImageBackground>

                <View style={styles.container}>
                    <View style={{alignItems: 'center', padding: 30}}>
                        <Image source={ require('../src/images/success.png') } style={{width: 170, height: 190, marginBottom: 20}} />
                        <Text style={{color: '#4A4A4A', fontSize: 20, textAlign: 'center', marginBottom: 20}}>We’ve received your request to{'\n'}join the HalaYalla tournament!</Text>
                        <Text style={{color: '#4A4A4A', fontSize: 13, textAlign: 'center'}}>We’ll confirm dates and any arrangements needed with youon your registered mobile number.{'\n\n'}
                            You and all your group members will see the status of your request to join this tournament.{'\n\n'}
                            Upon joining, you’ll see new features and a bade to show your participaton in the tournament.{'\n\n'}
                            Thank you for joining!</Text>
                    </View>

                    <TouchableHighlight style={styles.button} >
                        <Text style={{color: 'white', fontSize: 16}}>Submit Request</Text>
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
        fontSize: 18,
        color: 'white',
        backgroundColor: 'transparent',
    },
    container: {
        width: '100%',
        height: Dimensions.get('window').height - 70,
        justifyContent: 'space-between'
    },
    button: {
        margin: 20,
        width: '60%',
        backgroundColor: '#00a14c',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 15,
        borderRadius: 30
    }
});