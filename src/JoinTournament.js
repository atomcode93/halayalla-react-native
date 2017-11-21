import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    ImageBackground,
    ScrollView,
    Switch,
    TouchableHighlight,
    Text,
    View,
    Dimensions
} from 'react-native';

import FAIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';

const groups = [
    {
        name: 'Soccer PROS in Riyadh',
        subName: 'Soccer group',
        members: 68
    },
    {
        name: 'Footballers in Riyadh',
        subName: 'Soccer group',
        members: 24
    },
    {
        name: 'Winning 11',
        subName: 'Soccer group',
        members: 12
    },
]

export default class JoinTournament extends Component<{}> {
    static navigationOptions = {
        title: 'Join Tournament'
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
                        <View style={styles.section}>
                            <Text style={{color: '#4A4A4A', fontSize: 20}}>Select a team from your groups</Text>
                            <Text style={{color: '#9E9E9E', fontSize: 12, marginBottom: 35, textAlign: 'center', padding: 5}}>Your group name will be the team name participating in the tournament.</Text>
                            <Text style={{color: '#9E9E9E', fontSize: 12}}>Only group you organize or co-organize are show here</Text>
                        </View>

                        {
                            groups.map((group, index) => {
                                return(
                                    <View key={index} style={styles.groupView}>
                                        <View>
                                            <Text style={{color: '#09A24F', fontSize: 15}}>{group.name}</Text>
                                            <Text style={{color: '#9E9E9E', fontSize: 12, marginTop: 5}}>{group.subName}</Text>
                                        </View>
                                        <View style={{justifyContent: 'center'}}>
                                            <View style={{flexDirection: 'row'}}>
                                                <Text style={{color: '#9E9E9E', fontSize: 12, marginRight: 10}}>{group.members + ' members'}</Text>
                                                <FAIcon name='chevron-right' size={14} color='#4A4A4A' />
                                            </View>
                                        </View>
                                    </View>
                                )
                            })
                        }
                        
                    </View>

                    <TouchableHighlight style={styles.button} >
                        <Text style={{color: 'white', fontSize: 16}}>Create a new group</Text>
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
    section: {
        alignItems: 'center',
        padding: 30,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8'
    },
    groupView: {
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
        padding: 15,
        flexDirection: 'row',
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
    },
    
});