import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    ImageBackground,
    TouchableHighlight,
    Text,
    View,
    Dimensions
} from 'react-native';

import FAIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default class TournamentHomeCopyTwo extends Component<{}> {
    static navigationOptions = {
        title: 'Tournament Home Copy 2'
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

                    <View>

                        <ImageBackground source={ require('../src/images/tournament-home-background.png') } style={{width: '100%', height: undefined}}>
                            <View style={{ backgroundColor: 'transparent', marginTop: 30, marginLeft: 15}}>
                                <Text style={{color: 'white', fontSize: 24}}>The Corporate League</Text>
                                <Text style={{color: 'white', fontSize: 20, marginTop: 5}}>Season 10</Text>
                            </View>
                            <View style={styles.triangle} />
                            <View style={{backgroundColor: 'white', padding: 15}}>
                                <Text style={{color: '#4A4A4A', fontSize: 16}}>Tournament Information</Text>
                                <View style={{flexDirection: 'row', marginTop: 10}}>
                                    <Text style={{color: '#4A4A4A', fontSize: 14}}>The tournament starts on: </Text>
                                    <Text style={{color: '#9B9B9B', fontSize: 14}}>14/11/2017</Text>
                                </View>
                                <View style={{flexDirection: 'row', marginTop: 3}}>
                                    <Text style={{color: '#4A4A4A', fontSize: 14}}>Teams participating: </Text>
                                    <Text style={{color: '#9B9B9B', fontSize: 14}}>12</Text>
                                </View>
                                <View style={{flexDirection: 'row', marginTop: 3}}>
                                    <Text style={{color: '#4A4A4A', fontSize: 14}}>Location: </Text>
                                    <Text style={{color: '#9B9B9B', fontSize: 14}}>HY Soccer Fields and 3 others</Text>
                                </View>
                                <View style={{flexDirection: 'row', marginTop: 3}}>
                                    <Text style={{color: '#4A4A4A', fontSize: 14}}>Organized by: </Text>
                                    <Text style={{color: '#9B9B9B', fontSize: 14}}>HalaYalla Sports & Entertainment</Text>
                                </View>
                            </View>
                        </ImageBackground>

                        <View style={{padding: 15}}>
                            <Text style={{color: '#4A4A4A', fontSize: 16, marginBottom: 10}}>Terms and Conditions</Text>
                            <Text style={{color: '#9B9B9B', fontSize: 12}}>The following rules are complemented to the rules of the Fédération Internationale de Football Association (FIFA).{'\n\n'}
                                If necessary, The Corporate League Management (herein referred to as TCL Management) has the capacity to decide on any case not envisaged.{'\n\n'}
                                TCL Management reserves the right, during the course of the season, to amend the rules and regulations pertaining to the competition. All captains and referees will be notified of any changes that may arise.
                            </Text>
                        </View>
                        
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
    triangle: {
        backgroundColor: 'transparent',
        width: '100%',
        height: 0,
        borderBottomWidth: 30,
        borderBottomColor: 'white',
        borderLeftWidth: Dimensions.get('window').width,
        borderLeftColor: 'transparent'
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