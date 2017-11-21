/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    ScrollView,
    Image,
    TouchableHighlight,
    StyleSheet,
    Text,
    Alert,
    View
} from 'react-native';
import Login from './src/Login';
import Register from './src/Register';
import First from './src/First';
import Home from './src/Home';
import TournamentCreate from './src/TournamentCreate';
import TournamentHome from './src/TournamentHome';
import JoinRequests from './src/JoinRequests';
import StartTournament from './src/StartTournament';
import TeamPlayers from './src/TeamPlayers';
import TournamentHomeOther from './src/TournamentHomeOther';
import Teams from './src/Teams';
import TeamsGroups from './src/TeamsGroups';
import MatchesSchedule from './src/MatchesSchedule';
import Results from './src/Results';
import JoinTournament from './src/JoinTournament';
import TournamentHomeCopyFour from './src/TournamentHomeCopyFour';
import TournamentHomeCopySix from './src/TournamentHomeCopySix';
import TournamentHomeCopyTwo from './src/TournamentHomeCopyTwo';
import TournamentHomeCopyThree from './src/TournamentHomeCopyThree';
import Team from './src/Team';
import IPhoneEight from './src/IPhoneEight';
import IPhoneEightCopy from './src/IPhoneEightCopy';
import IPhoneEightCopyTwo from './src/IPhoneEightCopyTwo';
import IPhoneEightCopyThree from './src/IPhoneEightCopyThree';
import IPhoneEightCopyFour from './src/IPhoneEightCopyFour';

import { StackNavigator,DrawerNavigator  } from 'react-navigation';

export const SimpleApp = DrawerNavigator({
    IPhoneEightCopyFour: { screen: IPhoneEightCopyFour },
    IPhoneEightCopyThree: { screen: IPhoneEightCopyThree },
    IPhoneEightCopyTwo: { screen: IPhoneEightCopyTwo },
    IPhoneEightCopy: { screen: IPhoneEightCopy },
    IPhoneEight: { screen: IPhoneEight },
    Team: { screen: Team },
    TournamentHomeCopyThree: { screen: TournamentHomeCopyThree },
    TournamentHomeCopyTwo: { screen: TournamentHomeCopyTwo },
    TournamentHomeCopySix: { screen: TournamentHomeCopySix },
    TournamentHomeCopyFour: { screen: TournamentHomeCopyFour },
    JoinTournament: { screen: JoinTournament },
    Results: { screen: Results },
    MatchesSchedule: { screen: MatchesSchedule },
    TeamsGroups: { screen: TeamsGroups },
    Teams: { screen: Teams },
    TournamentHomeOther: { screen: TournamentHomeOther },
    TeamPlayers: { screen: TeamPlayers },
    StartTournament: { screen: StartTournament },
    JoinRequests: { screen: JoinRequests },
    TournamentHome: { screen: TournamentHome },
    Home: { screen: Home },
    Login: { screen: Login },
    Register: { screen: Register },
    First: { screen: First },
    TournamentCreate: { screen: TournamentCreate }
});



export default class App extends Component<{}> {
    constructor(props) {
        super(props);
    }


    render() {
        return <SimpleApp />;
    }
}

const styles = StyleSheet.create({

});
