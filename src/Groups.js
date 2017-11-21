import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    ScrollView,
    TouchableHighlight,
    Image,
    Text,
    View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Group from './components/Group';
import InterestingGroup from './components/InterestingGroup';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';

import { publicGroups } from './constants/dummyGrups.js';
import { interestingGroups } from './constants/dummyGrups.js';

export default class Groups extends Component<{}> {
    static navigationOptions = {
        tabBarLabel: 'Groups',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('./images/2.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row'}}>
                <ScrollView style={{marginTop: 50}}>
                    <LinearGradient colors={['#43e396', '#4612f6']} start={{x: 0, y: 1}} end={{x: 1, y: 1}} >
                        <View style={styles.title}>
                            <View style={{flexDirection: 'column', marginRight: 20}}>
                                <Text style={styles.titleHeader}>Groups on HalaYalla!</Text>
                                <Text style={styles.titleText}>Join or create community clubs, teams and groups based around your interests, hobbies and groups</Text>
                            </View>
                            <View style={{flexDirection: 'column', justifyContent: 'center'}} >
                                <IonIcon name="ios-arrow-forward" size={26} color="white" />
                            </View>
                        </View>
                    </LinearGradient>
                    <View style={styles.groupsView}>
                        <View style={styles.groupView}>
                            <Text style={styles.groupsTitle}>My Groups</Text>
                            <Text style={styles.groupsDescription}>You have joined 0 groups.</Text>
                        </View>
                        <View style={styles.groupView}>
                            <Text style={styles.groupsTitle}>Public Groups</Text>
                            <Text style={styles.groupsDescription}>You can join 68 groups.</Text>
                        </View>
                        {
                            publicGroups.map((group, index) => {
                                return (
                                    <Group key={index} data={group} />
                                );
                            })
                        }
                        <TouchableHighlight style={styles.button}>
                            <Text style={{color: 'white'}}>LOAD MORE</Text>
                        </TouchableHighlight>
                        <View style={{padding: 20, paddingTop: 10, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: '#d0d2d3'}}>
                            <Text style={styles.groupsTitle}>Interesting Groups to Start</Text>
                        </View>
                        <View style={styles.interestingGroupView}>
                            {
                                interestingGroups.map((group, index) => {
                                    return (
                                        <InterestingGroup key={index} data={group} />
                                    );
                                })
                            }
                            <TouchableHighlight style={{paddingLeft: 5, paddingTop: 10, paddingBottom: 10}}>
                                <Text style={{color: 'white', fontWeight: '600'}}>Start your own community group, club, or team >>></Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
    title: {
        flexDirection: 'row',
        padding: 20
    },
    titleHeader: {
        fontSize: 24,
        fontWeight: '600',
        color: 'white',
        marginBottom: 15
    },
    titleText: {
        fontSize: 14,
        color: 'white'
    },
    groupsView: {
        flexDirection: 'column',
    },
    groupView: {
        padding: 20,
        paddingBottom: 10,
        paddingTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eaeaea'
    },
    groupsTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#00a14c',
        marginBottom: 5
    },
    groupsDescription: {
        color: '#9b9b9b'
    },
    button: {
        margin: 20,
        backgroundColor: '#00a14c',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5
    },
    interestingGroupView: {
        backgroundColor: '#00a14c',
        paddingLeft: 5
    }
});