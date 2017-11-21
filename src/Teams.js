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
import Team from './components/Team';

import FAIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';

import { teams } from './constants/teams.js';

export default class Teams extends Component<{}> {
    static navigationOptions = {
        title: 'Teams'
    };
    constructor(props) {
        super(props);
        this.state = {
            selected: 'teams'
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
                        <Text style={styles.headerTitle}>Teams & Groups</Text>
                        <View style={{width: '15%'}} />
                    </View>
                </ImageBackground>

                <View style={styles.tabHeader}>
                    <TouchableHighlight
                        underlayColor='transparent'
                        style={[this.state.selected==='teams'? styles.selectedTab : null, {justifyContent: 'center', height: '100%', padding: 15}]} 
                        onPress={() => this.setState({ selected: 'teams' })}
                    >
                        <Text style={this.state.selected==='teams'? styles.selectedTabText : styles.tabText}>Teams</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor='transparent'
                        style={[this.state.selected==='groups'? styles.selectedTab : null, {justifyContent: 'center', height: '100%', padding: 15}]} 
                        onPress={() => this.setState({ selected: 'groups' })}
                    >
                        <Text style={this.state.selected==='groups'? styles.selectedTabText : styles.tabText}>Groups</Text>
                    </TouchableHighlight>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    { this.state.selected==='teams'?
                    <View style={{paddingTop: 20}}>
                        {
                            teams.map((team, index) => {
                                return (
                                    <Team key={index} team={team} />
                                )
                            })
                        }
                    </View>
                    :
                    <View>
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
        fontSize: 16
    },
    selectedTabText: {
        color: '#09A24F',
        fontSize: 16
    }
});