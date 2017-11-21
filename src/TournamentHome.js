import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    ImageBackground,
    ScrollView,
    TouchableHighlight,
    Text,
    Switch,
    Alert,
    View,
    Dimensions
} from 'react-native';
import Tournament from './components/Tournament';

import FAIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default class TournamentHome extends Component<{}> {
    static navigationOptions = {
        title: 'Tournament Home'
    };
    constructor(props) {
        super(props);
        this.state = {
            image: require('../src/images/no-image.png'),
            description: 'Now, if you are interested in being the best player, getting really good money and knowing some tricks and advices of what to do in a live tournament games, here is the best place to learn them... \n\n 1) Try not to get drunk \n\n Some of the people that are playing, and that have few rounds to play in the tournament don’t count the drinks they have during their games and at the very end of the day they don’t have power to continue till the last game, which is a pity to loose such a big opportunity, so, don’t drink a lot and be prepare for the last round, also come up with all your senses in order. If you drink, do it measurable and just to loose the nerves before the games but also have some other drinks like soda, water, coffee and others to hydrate your self. 2) Is it important where I sit? Yes it is, in a tournament try not to sit next to the dealer, take a place in where you will feel that you are in front of the dealer to have the feeling that he is giving you a game. Also in a place where you will feel comfortable with your self and you will have a perspective of the other players.',
            switchValue: false,
            showmore: false,
        }
    }

    render() {

        const { navigate } = this.props.navigation;

        return (
            <View style={{flex: 1, flexDirection: 'column'}}>

                <ImageBackground source={ require('../src/images/header.png') } style={styles.header}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <IonIcon name='md-arrow-round-back' size={24} color='white' style={{backgroundColor: 'transparent', width: '15%'}}/>
                        <Text style={styles.headerTitle}>The Corporate League</Text>
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

                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5}}>
                    <View style={{width: '70%', borderBottomColor: '#F5A623', borderBottomWidth: 2, paddingBottom: 5}}>
                        <Text style={{color: '#878787', fontSize: 12, marginLeft: 10}}>3 teams needed to start tournament</Text>
                    </View>
                    <Text style={{color: '#09A24F', fontSize: 12, marginRight: 10}}>Start anyway</Text>
                </View>

                <ScrollView style={{backgroundColor:'#fff'}}>
                    <ImageBackground source={ this.state.image } style={{width: '100%', height: undefined}}>
                        <View style={{padding: 15}}>
                            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                                <TouchableHighlight underlayColor='transparent'>
                                    <View style={styles.addPicture}>
                                        <FAIcon name='picture-o' size={14} color='#B8B8B8' />
                                        <Text style={{color: '#B8B8B8', fontSize: 12, marginLeft: 5}}>Add Picture</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                            <View style={{ backgroundColor: 'transparent', marginTop: 10}}>
                                <Text style={{color: 'white', fontSize: 20}}>The Corporate League</Text>
                                <Text style={{color: 'white', fontSize: 14}}>Season 10</Text>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <View style={{flexDirection: 'column', justifyContent: 'flex-end'}}>
                                        <Text style={{color: 'white', fontSize: 14}}>Soccer | 32 Teams</Text>
                                    </View>
                                    <View style={{width: '40%'}}>
                                        <Text style={{color: 'white', fontSize: 10}}>Organized by</Text>
                                        <Text style={{color: 'white', fontSize: 14}}>UXBERT Labs</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.triangle} />
                    </ImageBackground>

                    <View style={{backgroundColor: 'white', padding: 15}}>
                        <Text style={{color: '#4A4A4A', fontSize: 16, marginBottom: 10}}>About the Tournament</Text>
                        { this.state.showmore?
                        <View>
                            <Text style={{color: '#4A4A4A', fontSize: 14}}>{this.state.description}</Text>
                            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                                <Text style={{color: '#09A24F', fontSize: 14, marginRight: 15}} onPress={() => this.setState({ showmore: false})}>Less</Text>
                            </View>
                        </View>
                        :<View>
                            <Text numberOfLines={4} style={{color: '#4A4A4A', fontSize: 14}}>{this.state.description}</Text>
                            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                                <Text style={{color: '#09A24F', fontSize: 14, marginRight: 15}} onPress={() => this.setState({ showmore: true})}>Show more</Text>
                            </View>
                        </View>
                        }

                        <View style={{marginTop: 20}}>
                            <Text style={{color: '#4A4A4A', fontSize: 16, marginBottom: 10}}>Venue</Text>
                            <View style={{flexDirection: 'row', backgroundColor: '#F5F5F5', borderRadius: 5, padding: 8, width: '100%'}}>
                                <FAIcon name='map-marker' size={20} color='#09A24F' />
                                <TouchableHighlight style={{marginLeft: 10, flexDirection: 'column', justifyContent: 'center'}}>
                                    <Text style={{color: '#4A4A4A', fontSize: 14}}>+ Add venue</Text>
                                </TouchableHighlight>
                            </View>
                            <Text style={{color: '#969696', fontSize: 14, margin: 10, marginLeft: 30}}>+ Add venue</Text>
                        </View>
                        <TouchableHighlight style={styles.button} >
                            <Text style={{color: 'white'}}>Invite</Text>
                        </TouchableHighlight>
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <Text style={{color: '#878787', fontSize: 15, marginTop: 5, marginRight: 10}}>Announce event</Text>
                            <Switch value={this.state.switchValue} onValueChange={(value) => this.setState({ switchValue: value})} />
                        </View>
                    </View>

                    <View style={styles.section}>
                        <Image source={ require('../src/images/tba.png') } style={{width: '100%', height: undefined, borderRadius: 5}}>
                            <View style={{alignItems: 'center', backgroundColor: '#333A36', opacity: 0.9}}>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: 15}}>
                                    <Text style={{color: '#9DAA9D', fontSize: 15}}>TBA</Text>
                                    <Text style={{color: '#9DAA9D', fontSize: 15}}>GROUP A</Text>
                                </View>
                                <FAIcon name='star' size={40} color='#D8D8D8' style={{margin: 15}} />
                                <Text style={{color: '#9DAA9D', fontSize: 15}}>No teams joined yet</Text>
                                <View style={{borderBottomColor: '#E0E0E0', borderBottomWidth: 1, width: '100%', marginTop: 10}} />
                                <View style={{flexDirection: 'row', justifyContent: 'flex-end', width: '100%', padding: 15}}>
                                    <Text style={{color: '#09A24F', fontSize: 15}}>Fixtures</Text>
                                </View>
                            </View>
                        </Image>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                            <Image source={ require('../src/images/no-image.png') } style={{width: '49%', height: undefined, borderRadius: 5, backgroundColor: 'transparent'}}>
                                <View style={{justifyContent: 'space-between', padding: 10, height: 100}}>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <Text style={{color: 'white', fontSize: 18, width: '70%'}}>Teams & Groups</Text>
                                        <FAIcon name='chevron-right' size={18} color='white' style={{marginTop: 5}} />
                                    </View>
                                    <Text style={{color: '#9DAA9D', fontSize: 15}}>No teams joined yet</Text>
                                </View>
                            </Image>
                            <Image source={ require('../src/images/no-image.png') } style={{width: '49%', height: undefined, borderRadius: 5, backgroundColor: 'transparent'}}>
                                <View style={{justifyContent: 'space-between', padding: 10, height: 100}}>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <Text style={{color: 'white', fontSize: 18, width: '70%'}}>Standings</Text>
                                        <FAIcon name='chevron-right' size={18} color='white' style={{marginTop: 5}} />
                                    </View>
                                    <Text style={{color: '#9DAA9D', fontSize: 15}}>Tournament didn't start</Text>
                                </View>
                            </Image>
                        </View>
                    </View>

                    <View style={[styles.section, {flexDirection: 'row', justifyContent: 'space-between', paddingRight: 15}]}>
                        <Text style={{color: '#AEAFAE', fontSize: 16}}>Media Gallery</Text>
                        <IonIcon name='md-add' size={20} color='#4a4a4a' />
                    </View>

                    <View style={[styles.section, {flexDirection: 'row', justifyContent: 'space-between', paddingRight: 15}]}>
                        <Text style={{color: '#AEAFAE', fontSize: 16}}>Terms and Conditions</Text>
                        <IonIcon name='md-add' size={20} color='#4a4a4a' />
                    </View>

                    <View style={[styles.section, {flexDirection: 'row', justifyContent: 'space-between', paddingRight: 15}]}>
                        <Text style={{color: '#AEAFAE', fontSize: 16}}>Tournament Merchandise</Text>
                        <IonIcon name='md-add' size={20} color='#4a4a4a' />
                    </View>

                    <View style={[styles.section, {flexDirection: 'row', justifyContent: 'space-between', paddingRight: 15}]}>
                        <Text style={{color: '#AEAFAE', fontSize: 16}}>Tournament Sponsors</Text>
                        <IonIcon name='md-add' size={20} color='#4a4a4a' />
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
    addPicture: {
        borderWidth: 1,
        borderColor: '#979797',
        borderRadius: 5,
        flexDirection: 'row',
        padding: 5
    },
    triangle: {
        backgroundColor: 'transparent',
        width: '100%',
        height: 0,
        borderBottomWidth: 30,
        borderBottomColor: 'white',
        borderLeftWidth: Dimensions.get('window').width,
        borderLeftColor: 'transparent'
    },
    button: {
        margin: 20,
        width: '50%',
        backgroundColor: '#00a14c',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 10,
        borderRadius: 20
    },
    section: {
        padding: 10,
        borderTopWidth: 5,
        borderTopColor: '#E4E4E4'
    }
});