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

export default class StartTournament extends Component<{}> {
    static navigationOptions = {
        title: 'Start Tournament'
    };
    constructor(props) {
        super(props);
        this.state = {
            switchValue: false,
            rounds: 0,
        }
    }

    render() {

        const { navigate } = this.props.navigation;

        return (
            <View style={{flex: 1, flexDirection: 'column'}}>

                <ImageBackground source={ require('../src/images/header.png') } style={styles.header}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <IonIcon name='md-arrow-round-back' size={24} color='white' style={{backgroundColor: 'transparent', width: '15%'}}/>
                        <Text style={styles.headerTitle}>Start Tournament</Text>
                        <TouchableHighlight style={styles.headerButton}>
                            <View>
                                <FAIcon name='bell' size={18} color='white' />
                                <View style={styles.notificationNumber}>
                                    <Text style={{color: 'white', fontSize: 14, backgroundColor: 'transparent'}}>2</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                    </View>
                </ImageBackground>

                <View style={styles.container}>

                    <View>
                        <View style={styles.section}>
                            <View style={{justifyContent: 'center'}}>
                                <Text style={{color: '#4A4A4A', fontSize: 15}}>Generate Schedule Randomly</Text>
                                <Text style={{color: '#9E9E9E', fontSize: 12, marginTop: 5}}>You'll still be able to change dates of matches later</Text>
                            </View>
                            <View style={{justifyContent: 'center'}}>
                                <Switch value={this.state.switchValue} onValueChange={(value) => this.setState({ switchValue: value})} />
                            </View>
                        </View>

                        <View style={{borderBottomColor: '#E8E8E8', borderBottomWidth: 1, marginLeft: 15}} />

                        <View style={styles.section}>
                            <View style={{justifyContent: 'center'}}>
                                <Text style={{color: '#4A4A4A', fontSize: 15}}>Rounds</Text>
                            </View>
                            <View style={{justifyContent: 'center'}}>
                                <View style={{flexDirection: 'row'}}>
                                    <TouchableHighlight underlayColor='transparent' onPress={() => this.setState({ rounds: this.state.rounds - 1 })}>
                                        <View style={styles.decButton}>
                                            <IonIcon name='md-remove' size={24} color='white' />
                                        </View>
                                    </TouchableHighlight>

                                    <View style={styles.countNumber}>
                                        <Text style={{}}>{this.state.rounds}</Text>
                                    </View>

                                    <TouchableHighlight underlayColor='transparent' onPress={() => this.setState({ rounds: this.state.rounds + 1 })}>
                                        <View style={styles.incButton}>
                                            <IonIcon name='md-add' size={24} color='white' />
                                        </View>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </View>
                    </View>

                    <TouchableHighlight style={styles.button} >
                        <Text style={{color: 'white', fontSize: 16}}>Start Tournament</Text>
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
    headerButton: {
        flexDirection: 'column',
        justifyContent: 'center',
        borderColor: 'white',
        paddingLeft: 10,
        paddingRight: 10,
    },
    notificationNumber: {
        position: 'absolute',
        left: 8,
        top: -5,
        backgroundColor: '#DF4D4D',
        width: 16,
        height: 16,
        alignItems: 'center',
        borderRadius: 8
    },
    container: {
        width: '100%',
        height: Dimensions.get('window').height - 70,
        justifyContent: 'space-between'
    },
    button: {
        margin: 20,
        marginBottom: 30,
        width: '60%',
        backgroundColor: '#00a14c',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 15,
        borderRadius: 25
    },
    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    countNumber: {
        height: 40, 
        width: 50, 
        borderColor: '#E8E8E8', 
        borderWidth: 1, 
        alignItems: 'center',
        justifyContent: 'center'
    },
    decButton: {
        backgroundColor: '#09A24F', 
        borderTopLeftRadius: 10,  
        borderBottomLeftRadius: 10, 
        width: 40, 
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    incButton: {
        backgroundColor: '#09A24F', 
        borderTopRightRadius: 10,  
        borderBottomRightRadius: 10, 
        width: 40, 
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    }
});