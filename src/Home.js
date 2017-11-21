import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    ImageBackground,
    ScrollView,
    TouchableHighlight,
    Text,
    Alert,
    View,
    Dimensions
} from 'react-native';
import Tournament from './components/Tournament';

import FAIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';

import { tournaments } from './constants/tournaments.js';

export default class Home extends Component<{}> {
    static navigationOptions = {
        title: 'Home'
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
                        <IonIcon name='md-arrow-round-back' size={24} color='white' style={{backgroundColor: 'transparent', width: '15%'}}/>
                        <Text style={styles.headerTitle}>Tournaments</Text>
                        <TouchableHighlight style={styles.headerButton}>
                            <Text style={{color: 'white', fontSize: 14}}>+Create</Text>
                        </TouchableHighlight>
                    </View>
                </ImageBackground>
                <ScrollView style={{backgroundColor:'#fff'}}>
                    <ImageBackground source={ require('../src/images/tournament-home-background.png') } style={{width: '100%', height: undefined}}>
                        <View style={{padding: 15}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Image source={ require('../src/images/league-mark.png') } style={{width: 50, height: 50}} />
                                <View style={{flexDirection: 'row', backgroundColor: 'transparent'}}>
                                    <FAIcon name='star' color='white' />
                                    <Text style={{color: 'white', fontSize: 12, marginLeft: 5}}>Featured</Text>
                                </View>
                            </View>
                            <View style={{ backgroundColor: 'transparent', marginTop: 10}}>
                                <Text style={{color: 'white', fontSize: 20}}>The Corporate League</Text>
                                <Text style={{color: 'white', fontSize: 14}}>Season 10</Text>
                                <Text style={{color: 'white', fontSize: 14, marginTop: 13}}>Soccer | 32 Teams</Text>
                            </View>
                        </View>
                        <View style={styles.triangle} />
                        <View style={{backgroundColor: '#1f1d1d', padding: 12, paddingLeft: 30, paddingRight: 30}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <View style={{flexDirection: 'row', width: '35%'}}>
                                    <View style={styles.teamMark}>
                                        <Image source={ require('../src/images/french-embassy-mark.png') } style={{width: 30, height: 30, marginLeft: 10}} />
                                    </View>
                                    <View style={{flexDirection: 'column', justifyContent: 'center', marginLeft: 5}}>
                                        <Text style={{color: 'white', fontSize: 14}}>French Embassy</Text>
                                    </View>
                                </View>
                                <Text style={{color: 'white', fontSize: 15, marginTop: 15}}>VS</Text>
                                <View style={{flexDirection: 'row', width: '35%', justifyContent: 'flex-end'}}>
                                    <View style={{flexDirection: 'column', justifyContent: 'center', marginRight: 5}}>
                                        <Text style={{color: 'white', fontSize: 14}}>Al Ahli</Text>
                                    </View>
                                    <View style={styles.teamMark}>
                                        <Image source={ require('../src/images/al-ahli-mark.png') } style={{width: 30, height: 30, marginLeft: 10}} />
                                    </View>
                                </View>
                            </View>
                            <Text style={styles.dateTime}>Oct 15, 2017 at 9.30 PM</Text>
                        </View>
                    </ImageBackground>
                    <View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 20, paddingLeft: 10, paddingRight: 10, borderBottomColor: '#E8E8E8', borderBottomWidth: 1}}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{color: '#4A4A4A', fontSize: 16, marginRight: 5}}>Upcoming Tournaments</Text>
                                <View style={styles.upcomingTour}>
                                    <Text style={{color: 'white', fontSize: 14, backgroundColor: 'transparent'}}>3</Text>
                                </View>
                            </View>
                            <Text style={{color: '#09A24F', fontSize: 14}}>View all</Text>
                        </View>
                        {
                            tournaments.map((tournament, index) => {
                                return (
                                    <Tournament key={index} data={tournament} />
                                );
                            })
                        }
                        <TouchableHighlight style={styles.button} onPress={() => navigate('TournamentCreate')}>
                            <Text style={{color: 'white'}}>Create your own Tournament</Text>
                        </TouchableHighlight>
                    </View>
                </ScrollView>
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
    headerButton: {
        flexDirection: 'column',
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },
    triangle: {
        backgroundColor: 'transparent',
        width: '100%',
        height: 0,
        borderBottomWidth: 30,
        borderBottomColor: '#1f1d1d',
        borderLeftWidth: Dimensions.get('window').width,
        borderLeftColor: 'transparent'
    },
    teamMark: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 50,
        justifyContent: 'center'
    },
    dateTime: {
        color: '#8C8C8C',
        fontSize: 12,
        alignSelf: 'center',
        marginTop: 10
    },
    button: {
        margin: 20,
        width: '70%',
        backgroundColor: '#00a14c',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 10,
        borderRadius: 20
    },
    upcomingTour: {
        backgroundColor: '#09A24F',
        width: 18,
        height: 18,
        alignItems: 'center',
        borderRadius: 10
    }
});