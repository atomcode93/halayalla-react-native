import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    ImageBackground,
    ScrollView,
    TouchableHighlight,
    Text,
    View,
    Dimensions
} from 'react-native';

import FAIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default class TournamentHomeCopyFour extends Component<{}> {
    static navigationOptions = {
        title: 'Create team'
    };
    constructor(props) {
        super(props);
        this.state = {
            members : [
                {
                    name: 'Ahmed Khaled',
                    checked: true
                },
                {
                    name: 'Roy Paul',
                    checked: false
                },
                {
                    name: 'Louis Hawkins',
                    checked: true
                },
                {
                    name: 'Evan Washington',
                    checked: true
                },
                {
                    name: 'Danny Coleman',
                    checked: true
                },
                {
                    name: 'Ricardo Boone',
                    checked: true
                }
            ]
        }
    }

    changeSelection = (index) => {
        let temp = this.state.members;
        temp[index].checked = !temp[index].checked;
        this.setState({ members: temp });
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

                        <View style={{padding: 10, paddingTop: 25, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#E8E8E8'}}>
                            <Text style={{color: '#4A4A4A', fontSize: 20}}>Create team</Text>
                            <Text style={{color: '#9E9E9E', fontSize: 12, textAlign: 'center', marginTop: 5, paddingLeft: 20, paddingRight: 20}}>Select 11 team members from your Soccer pros group who will represent your team in this tournament.</Text>
                            <View style={{backgroundColor: '#F3EC9B', width: '100%', borderRadius: 10, marginTop: 10, padding: 5}}>
                                <Text style={{color: '#9E9E9E', fontSize: 11, textAlign: 'center'}}>To join this tournament you need to select at least 7 members. {'\n'}You can always bring or invite more  people later</Text>
                            </View>
                        </View>

                        <ScrollView>
                        {
                            this.state.members.map((member, index) => {
                                return(
                                    <View key={index} style={styles.member}>
                                        <View style={{justifyContent: 'center'}}>
                                            <Text style={{color: '#4A4A4A', fontSize: 15}}>{member.name}</Text>
                                        </View>
                                        { member.checked?
                                        <TouchableHighlight underlayColor='transparent' onPress={() => this.changeSelection(index)} >
                                            <FAIcon name='check-circle' size={24} color='#09A24F' />
                                        </TouchableHighlight>
                                        :
                                        <TouchableHighlight underlayColor='transparent' onPress={() => this.changeSelection(index)} >
                                            <FAIcon name='circle-o' size={24} color='#9B9B9B' />
                                        </TouchableHighlight>
                                        }
                                    </View>
                                )
                            })
                        }
                        </ScrollView>

                    </View>

                    <TouchableHighlight  >
                        <View style={styles.button}>
                            <Text style={{color: 'white', fontSize: 16}}>Proceed</Text>
                            <Text style={{color: 'white', fontSize: 10}}>I’ll invite more team members later</Text>
                        </View>
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
    member: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15
    },
    button: {
        margin: 20,
        width: '60%',
        backgroundColor: '#00a14c',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 7,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 40
    },
    
});