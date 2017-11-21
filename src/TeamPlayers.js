import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    ImageBackground,
    ScrollView,
    TouchableHighlight,
    Text,
    View,
} from 'react-native';
import Player from './components/Player';

import FAIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';

import { players } from './constants/players.js';

export default class TeamPlayers extends Component<{}> {
    static navigationOptions = {
        title: 'Team Player'
    };
    constructor(props) {
        super(props);
        this.state = {
            teamAvatar: null,
            selected: 'players'
        }
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
                        <Text style={styles.headerTitle}>Join Requests: Soccer Pros</Text>
                        <View style={{width: '15%'}} />
                    </View>
                </ImageBackground>

                <View style={{flexDirection: 'row', padding: 20, paddingLeft: 15}}>
                    <Image source={ this.state.teamAvatar } style={styles.teamAvatar} />
                    <View>
                        <View style={{flexDirection: 'row', marginBottom: 10}}>
                            <Text style={{color: '#4A4A4A', fontSize: 18, marginRight: 15}}>Soccer Pros</Text>
                            <IonIcon name='ios-trophy-outline' color='#4A4A4A' size={18} style={{alignSelf: 'flex-end'}} />
                            <Text style={{color: '#4A4A4A', fontSize: 14, alignSelf: 'flex-end'}}>3</Text>
                        </View>
                        <Text style={{color: '#4A4A4A', fontSize: 12}}>By: UXBERT Labs</Text>
                        <Text style={{color: '#4A4A4A', fontSize: 12}}>Request Date: 12/9/2017</Text>

                        <View style={{flexDirection: 'row'}}>
                            <TouchableHighlight style={[styles.button, {backgroundColor: '#72D27E'}]} >
                                <Text style={{color: 'white', fontSize: 14}}>Accept</Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={[styles.button, {backgroundColor: '#FF7270'}]} >
                                <Text style={{color: 'white', fontSize: 14}}>Reject</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>

                <View style={styles.tabHeader}>
                    <TouchableHighlight
                        underlayColor='transparent'
                        style={[this.state.selected==='overview'? styles.selectedTab : null, {justifyContent: 'center', height: '100%', padding: 15}]} 
                        onPress={() => this.setState({ selected: 'overview' })}
                    >
                        <Text style={this.state.selected==='overview'? styles.selectedTabText : styles.tabText}>Overview</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor='transparent'
                        style={[this.state.selected==='players'? styles.selectedTab : null, {justifyContent: 'center', height: '100%', padding: 15}]} 
                        onPress={() => this.setState({ selected: 'players' })}
                    >
                        <Text style={this.state.selected==='players'? styles.selectedTabText : styles.tabText}>Players</Text>
                    </TouchableHighlight>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    { this.state.selected==='overview'?
                    <View>
                    </View>
                    :
                    <View style={{padding: 10, paddingLeft: 15, paddingRight: 15}}>
                        {
                            players.map((player, index) => {
                                return <Player key={index} player={player} />
                            })
                        }
                    </View>
                    }
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
    teamAvatar: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#D8D8D8',
        marginRight: 15
    },
    button: {
        margin: 20,
        marginLeft: 0,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 8
    },
    tabHeader: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#2F3831',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        height: 50, 
        paddingLeft: 20,
        paddingRight: 20
    },
    selectedTab: {
        borderBottomWidth: 4,
        borderBottomColor: '#09A24F',
    },
    tabText: {
        color: 'white',
        fontSize: 16
    },
    selectedTabText: {
        color: '#09A24F',
        fontSize: 16
    }
});