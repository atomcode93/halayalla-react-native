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
import Merchandise from './components/Merchandise';

import FAIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';

import { sponsors } from './constants/sponsors.js';
import { merchandises } from './constants/merchandises.js';

export default class TournamentHomeOther extends Component<{}> {
    static navigationOptions = {
        title: 'Tournament Home Other'
    };
    constructor(props) {
        super(props);
        this.state = {
            image: require('../src/images/tournament-home-background.png'),
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
                            <Text style={{color: 'white', fontSize: 18}}>Join</Text>
                        </TouchableHighlight>
                    </View>
                </ImageBackground>

                <ScrollView style={{backgroundColor:'#fff'}}>
                    <ImageBackground source={ this.state.image } style={{width: '100%', height: undefined}}>
                        <View style={{padding: 15}}>
                            <View>
                                <Image source={ require('../src/images/league-mark.png') } style={{width: 50, height: 50}} />
                            </View>
                            <View style={{ backgroundColor: 'transparent', marginTop: 10}}>
                                <Text style={{color: 'white', fontSize: 24}}>The Corporate League</Text>
                                <Text style={{color: 'white', fontSize: 20}}>Season 10</Text>
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
                        <View style={{backgroundColor: 'white', height: 30, justifyContent: 'flex-end'}}>
                            <Text style={{color: '#4A4A4A', fontSize: 16, marginLeft: 15}}>About the Tournament</Text>
                        </View>
                    </ImageBackground>

                    <View style={{backgroundColor: 'white', padding: 15}}>
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
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#F5F5F5', borderRadius: 5, padding: 8, width: '100%'}}>
                                <View style={{flexDirection: 'row'}}>
                                    <FAIcon name='map-marker' size={20} color='#09A24F' />
                                    <TouchableHighlight style={{marginLeft: 10, flexDirection: 'column', justifyContent: 'center'}}>
                                        <Text style={{color: '#4A4A4A', fontSize: 14}}>Crazy Ball Soccer Field and 3 other venues</Text>
                                    </TouchableHighlight>
                                </View>
                                <FAIcon name='chevron-right' size={18} color='#4A4A4A' style={{alignSelf: 'flex-end'}} />
                            </View>
                        </View>
                        <TouchableHighlight style={styles.button} >
                            <Text style={{color: 'white', fontSize: 16}}>Join the Tournament</Text>
                        </TouchableHighlight>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: '#878787', fontSize: 15}}>Join as a spectator</Text>
                        </View>
                    </View>

                    <View style={styles.section}>
                        <Image source={ require('../src/images/tba.png') } style={{width: '100%', height: undefined, borderRadius: 5}}>
                            <View style={{backgroundColor: '#333A36', opacity: 0.98}}>
                                <Text style={{color: '#9DAA9D', fontSize: 15, margin: 15}}>Match tomorrow at 9.30 PM</Text>
                                <Text style={{color: '#9DAA9D', fontSize: 15, alignSelf: 'center'}}>GROUP A</Text>

                                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 15, paddingTop: 0}}>
                                    <View style={{flexDirection: 'row', width: '40%'}}>
                                        <View style={styles.teamMark}>
                                            <Image source={ require('../src/images/french-embassy-mark.png') } style={{width: 30, height: 30}} />
                                        </View>
                                        <View style={{flexDirection: 'column', justifyContent: 'center', marginLeft: 5, width: '60%'}}>
                                            <Text style={{color: 'white', fontSize: 14}}>French Embassy</Text>
                                        </View>
                                    </View>
                                    <Text style={{color: 'white', fontSize: 15, marginTop: 15}}>VS</Text>
                                    <View style={{flexDirection: 'row', width: '40%', justifyContent: 'flex-end'}}>
                                        <View style={{flexDirection: 'column', justifyContent: 'center', marginRight: 5}}>
                                            <Text style={{color: 'white', fontSize: 14}}>Al Ahli</Text>
                                        </View>
                                        <View style={styles.teamMark}>
                                            <Image source={ require('../src/images/al-ahli-mark.png') } style={{width: 30, height: 30}} />
                                        </View>
                                    </View>
                                </View>

                                <View style={{borderBottomColor: '#E0E0E0', borderBottomWidth: 1, width: '100%', marginTop: 10, opacity: 0.1}} />
                                <View style={{flexDirection: 'row', justifyContent: 'flex-end', width: '100%', padding: 15}}>
                                    <Text style={{color: '#09A24F', fontSize: 15}}>View all Fixtures</Text>
                                </View>
                            </View>
                        </Image>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                            <Image source={ require('../src/images/no-image.png') } style={{width: '49%', height: undefined, borderRadius: 5, backgroundColor: 'transparent'}}>
                                <View style={{justifyContent: 'space-between', padding: 10, height: 120}}>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <Text style={{color: 'white', fontSize: 18, width: '70%'}}>Teams & Groups</Text>
                                        <FAIcon name='chevron-right' size={18} color='white' style={{marginTop: 5}} />
                                    </View>
                                    <View style={{flexDirection: 'row'}}>
                                        <View style={[styles.teamMark, {width: 37, height: 37, zIndex: 3}]}>
                                            <Image source={ require('../src/images/french-embassy-mark.png') } style={{width: 20, height: 20}} />
                                        </View>
                                        <View style={[styles.teamMark, {width: 37, height: 37, marginLeft: -10, zIndex: 2}]}>
                                            <Image source={ require('../src/images/al-ahli-mark.png') } style={{width: 20, height: 20}} />
                                        </View>
                                        <View style={[styles.teamMark, {width: 37, height: 37, marginLeft: -10, zIndex: 1}]}>
                                            <Text style={{fontSize: 13}}>MU</Text>
                                        </View>
                                        <View style={[styles.teamMark, {width: 37, height: 37, marginLeft: -10}]}>
                                            <Image source={ require('../src/images/alhilal-s-mark.png') } style={{width: 20, height: 20}} />
                                        </View>
                                    </View>
                                </View>
                            </Image>
                            <Image source={ require('../src/images/no-image.png') } style={{width: '49%', height: undefined, borderRadius: 5, backgroundColor: 'transparent'}}>
                                <View style={{justifyContent: 'space-between', padding: 10, height: 120}}>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <Text style={{color: 'white', fontSize: 18, width: '70%'}}>Standings</Text>
                                        <FAIcon name='chevron-right' size={18} color='white' style={{marginTop: 5}} />
                                    </View>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <View style={[styles.teamMark, {width: 37, height: 37, zIndex: 3}]}>
                                            <Image source={ require('../src/images/al-ahli-mark.png') } style={{width: 20, height: 20}} />
                                        </View>
                                        <View style={{justifyContent: 'center'}}>
                                            <Text style={{color: 'white', fontSize: 12}}>French Embassy</Text>
                                            <Text style={{color: 'white', fontSize: 10}}>Pts: 12 W: 2 L: 2 D: 0</Text>
                                        </View>
                                    </View>
                                </View>
                            </Image>
                        </View>
                    </View>

                    <View style={styles.section}>
                        <Text style={{color: '#4A4A4A', fontSize: 16}}>Media Gallery</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, marginBottom: 15}}>
                            <Image source={ require('../src/images/gallery.png')} style={{width: '59.5%', height: 140, borderRadius: 7}} />
                            <View style={{justifyContent: 'space-between', width: '39.5%'}}>
                                <Image source={ require('../src/images/gallery.png')} style={{width: '100%', height: 68, borderRadius: 7}} />
                                <Image source={ require('../src/images/gallery.png')} style={{width: '100%', height: 68, borderRadius: 7}} />
                            </View>
                        </View>
                        <Text style={{color: '#09A24F', fontSize: 15, alignSelf: 'flex-end', marginRight: 15}}>View more</Text>
                    </View>

                    <View style={styles.section}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{color: '#09A24F', fontSize: 16}}>Terms and Conditions</Text>
                            <FAIcon name='chevron-right' size={18} color='#09A24F' style={{marginTop: 5}} />
                        </View>
                        <Text style={{color: '#9E9E9E', fontSize: 14, marginTop: 15}}>The following rules are complemented to the rules of the Fédération Internationale de Football Association (FIFA).</Text>
                    </View>

                    <View style={styles.section}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{color: '#4A4A4A', fontSize: 16}}>Tournament Merchandise</Text>
                            <FAIcon name='chevron-right' size={18} color='#09A24F' style={{marginTop: 5}} />        
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

                    <View style={styles.section}>
                        <Text style={{color: '#4A4A4A', fontSize: 16}}>Tournament Sponsors</Text>
                        <View style={styles.sponsorsView}>
                        {
                            sponsors.map((sponsor, index) => {
                                return(
                                    <View key={index} style={{width: '30%', justifyContent: 'center', alignItems: 'center'}}>
                                        <Image source={ sponsor.url } style={{width: 70, height: 30, marginTop: 5, marginBottom: 5, resizeMode: 'contain'}} />
                                    </View>
                                )
                            })
                        }
                        </View>
                        <Text style={{color: '#09A24F', fontSize: 15, alignSelf: 'center', marginTop: 10}}>Become a Sponsor</Text>
                    </View>
                    <View style={styles.section}>
                        <TouchableHighlight style={[styles.button, {width: '80%'}]} >
                            <Text style={{color: 'white', fontSize: 16}}>Create your own Tournament</Text>
                        </TouchableHighlight>
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
    triangle: {
        backgroundColor: 'transparent',
        width: '100%',
        height: 0,
        borderBottomWidth: 30,
        borderBottomColor: 'white',
        borderLeftWidth: Dimensions.get('window').width,
        borderLeftColor: 'transparent'
    },
    teamMark: {
        width: 45,
        height: 45,
        backgroundColor: 'white',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#2D3330',
        justifyContent: 'center',
        alignItems: 'center'
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
    section: {
        padding: 10,
        borderTopWidth: 5,
        borderTopColor: '#E4E4E4'
    },
    sponsorsView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: 10,
    },
    merchandisesView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginTop: 10,
        marginBottom: 10
    }
});