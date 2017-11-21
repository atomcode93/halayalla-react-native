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

import FAIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';

import { matchesSchedule } from './constants/matchesSchedule.js';
const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default class MatchesSchedule extends Component<{}> {
    static navigationOptions = {
        title: 'Matches Schedule'
    };
    constructor(props) {
        super(props);
        this.state = {
            matches: null
        }
    }

    componentWillMount() {
        matchesSchedule.sort(this.compare)
        this.setState({ matches: matchesSchedule });
    }

    compare = (a, b) => {
        if (a.startTime > b.startTime) return 1;
        if (a.startTime < b.startTime) return -1;
        return 0;
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

    updateDate = (index, date) => {
        matchesSchedule[index].startTime = date;
        matchesSchedule.sort(this.compare)
        this.setState({ matches: matchesSchedule });
    }

    render() {

        const { navigate } = this.props.navigation;
        let time = new Date();
        time.setDate(time.getDate() - 1);
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>

                <ImageBackground source={ require('../src/images/header.png') } style={styles.header}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <TouchableHighlight style={{width: '15%'}} underlayColor='transparent'>
                            <IonIcon name='md-arrow-round-back' size={24} color='white' style={{backgroundColor: 'transparent'}}/>
                        </TouchableHighlight>
                        <Text style={styles.headerTitle}>Matches Schedule</Text>
                        <View style={{width: '15%'}} />
                    </View>
                </ImageBackground>

                <View style={styles.scheduleHeader}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{color: 'white', fontSize: 16, marginRight: 15}}>ALL TEAMS</Text>
                        <FAIcon name='chevron-down' size={18} color='#09A24F' />
                    </View>
                </View>

                <ScrollView style={{paddingTop: 20}}>
                    <View style={{borderBottomWidth: 5, borderBottomColor: '#E4E4E4'}}>
                    {
                        this.state.matches.map((match, index) => {
                            if (this.getDateString(time) !== this.getDateString(match.startTime)){
                                time = match.startTime;
                                return (
                                    <View key={index}>
                                        <Text style={{color: '#9E9E9E', fontSize: 12, margin: 5, marginLeft: 10}}>{this.getDateString(time)}</Text>
                                        <MatchSchedule index={index} match={match} updateDate={this.updateDate}/>    
                                    </View>
                                )
                            }else{
                                return (
                                    <MatchSchedule key={index} index={index} match={match} updateDate={this.updateDate}/>
                                )
                            }
                        })
                    }
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
    scheduleHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2F3831',
        height: 40,
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7
    }
});