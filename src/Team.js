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
import MatchSchedule from './components/MatchSchedule';
import MatchResult from './components/MatchResult';
import Merchandise from './components/Merchandise';
import Player from './components/Player';

import FAIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';

import { matchesSchedule } from './constants/matchesSchedule.js';
import { matchResults } from './constants/results.js';
import { merchandises } from './constants/merchandises.js';
import { players } from './constants/players.js';

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default class Team extends Component<{}> {
    static navigationOptions = {
        title: 'Team'
    };
    constructor(props) {
        super(props);
        this.state = {
            teamAvatar: require('./images/uxbert-mark.png'),
            selected: 'overview',
            matchesCount: 2,
            resultsCount: 2
        }
    }

    getDateString = (date) => {
        let d = date.getDate();
        d = d % 10;
        let suf = 'th'
        if (d === 1) { suf = 'st';}
        if (d === 2) { suf = 'nd';}
        if (d === 3) { suf = 'rd';}
        return date.getDate() + suf + ' ' + monthNames[date.getMonth()] + ' ' + date.getFullYear();
    }

    render() {

        const { navigate } = this.props.navigation;
        let timeMatch = new Date();
        timeMatch.setDate(timeMatch.getDate() - 1);

        return (
            <View style={{flex: 1, flexDirection: 'column'}}>

                <ImageBackground source={ require('../src/images/header.png') } style={styles.header}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <TouchableHighlight style={{width: '15%'}} underlayColor='transparent'>
                            <IonIcon name='md-arrow-round-back' size={24} color='white' style={{backgroundColor: 'transparent'}}/>
                        </TouchableHighlight>
                        <Text style={styles.headerTitle}>UXBERT Team</Text>
                        <View style={{width: '15%'}} />
                    </View>
                </ImageBackground>

                <View style={{flexDirection: 'row', padding: 20, paddingLeft: 15, paddingBottom: 15}}>
                    <Image source={ this.state.teamAvatar } style={styles.teamAvatar} />
                    <View>
                        <View style={{flexDirection: 'row', marginBottom: 5}}>
                            <Text style={{color: '#4A4A4A', fontSize: 18, marginRight: 15}}>UXBERT Team</Text>
                            <IonIcon name='ios-trophy-outline' color='#4A4A4A' size={18} style={{alignSelf: 'flex-end'}} />
                            <Text style={{color: '#4A4A4A', fontSize: 14, alignSelf: 'flex-end'}}>3</Text>
                        </View>
                        <Text style={{color: '#4A4A4A', fontSize: 12}}>Currently participating in:</Text>
                        <Text style={{color: '#09A24F', fontSize: 12}}>The Corporate League{'\n'}McD Leage{'\n'}+ 3 more</Text>
                    </View>
                </View>

                <View style={styles.tabHeader}>

                    <TouchableHighlight
                        underlayColor='transparent'
                        style={[this.state.selected==='overview'? styles.selectedTab : null, {justifyContent: 'center', paddingLeft: 10, paddingRight: 10}]} 
                        onPress={() => this.setState({ selected: 'overview' })} >
                        <Text style={this.state.selected==='overview'? styles.selectedTabText : styles.tabText}>Overview</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        underlayColor='transparent'
                        style={[this.state.selected==='players'? styles.selectedTab : null, {justifyContent: 'center', paddingLeft: 10, paddingRight: 10}]} 
                        onPress={() => this.setState({ selected: 'players' })} >
                        <Text style={this.state.selected==='players'? styles.selectedTabText : styles.tabText}>Players</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        underlayColor='transparent'
                        style={[this.state.selected==='stats'? styles.selectedTab : null, {justifyContent: 'center', paddingLeft: 10, paddingRight: 10}]} 
                        onPress={() => this.setState({ selected: 'stats' })} >
                        <Text style={this.state.selected==='stats'? styles.selectedTabText : styles.tabText}>Stats</Text>
                    </TouchableHighlight>

                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    { this.state.selected==='overview'?
                    <View>
                        <View style={styles.section}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 15}}>
                                <Text style={{color: '#4A4A4A', fontSize: 16}}>Upcoming Matches</Text>
                                <TouchableHighlight underlayColor='transparent'>
                                    <Text style={{color: '#09A24F', fontSize: 14}}>View all</Text>
                                </TouchableHighlight>
                            </View>
                            {
                                matchesSchedule.slice(0, this.state.matchesCount).map((match, index) => {
                                    if (this.getDateString(timeMatch) !== this.getDateString(match.startTime)){
                                        timeMatch = match.startTime;
                                        return (
                                            <View key={index}>
                                                <Text style={{color: '#9E9E9E', fontSize: 12, margin: 5, marginLeft: 10}}>{this.getDateString(timeMatch)}</Text>
                                                <MatchSchedule index={index} match={match} updateDate={this.updateDate} type="display"/>
                                            </View>
                                        )
                                    }else{
                                        return (
                                            <MatchSchedule key={index} index={index} match={match} updateDate={this.updateDate} type="display"/>
                                        )
                                    }
                                })
                            }
                        </View>

                        <View style={styles.section}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 15}}>
                                <Text style={{color: '#4A4A4A', fontSize: 16}}>Latest Results</Text>
                                <TouchableHighlight underlayColor='transparent'>
                                    <Text style={{color: '#09A24F', fontSize: 14}}>View all</Text>
                                </TouchableHighlight>
                            </View>
                            {
                                matchResults.slice(0, this.state.resultsCount).map((match, index) => {
                                    return (
                                        <MatchResult key={index} index={index} match={match} updateResult={this.updateResult} type="display" />
                                    )
                                })
                            }
                        </View>

                        <View style={styles.merchandisesView}>
                        {
                            merchandises.map((merchandise, index) => {
                                return(
                                    <View key={index} style={{width: '30%'}}>
                                        <Merchandise data={merchandise} />
                                    </View>
                                )
                            })
                        }
                        </View>
                    </View>
                    : this.state.selected==='players'?
                    <View style={{padding: 10, paddingLeft: 15, paddingRight: 15}}>
                        {
                            players.map((player, index) => {
                                return <Player key={index} player={player} />
                            })
                        }
                    </View>
                    :
                    <View style={{paddingTop: 10}}>
                        <View style={styles.statsList}>
                            <Text style={{color: '#4A4A4A', fontSize: 16}}>Tournaments participated</Text>
                            <Text style={{color: '#4A4A4A', fontSize: 16}}>10</Text>
                        </View>
                        <View style={styles.statsList}>
                            <Text style={{color: '#4A4A4A', fontSize: 16}}>Tournaments won</Text>
                            <Text style={{color: '#4A4A4A', fontSize: 16}}>3</Text>
                        </View>
                        <View style={styles.statsList}>
                            <Text style={{color: '#4A4A4A', fontSize: 16}}>Total goals scored</Text>
                            <Text style={{color: '#4A4A4A', fontSize: 16}}>346</Text>
                        </View>
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
    tabHeader: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#2F3831',
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
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
        fontSize: 16,
    },
    selectedTabText: {
        color: '#09A24F',
        fontSize: 16
    },
    statsList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 1,
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15
    },
    section: {
        borderBottomWidth: 5,
        borderBottomColor: '#E4E4E4'
    },
    merchandisesView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 10,
        paddingRight: 10
    }
});