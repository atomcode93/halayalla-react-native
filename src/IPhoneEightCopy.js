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
    Dimensions
} from 'react-native';

import FAIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default class IPhoneEightCopy extends Component<{}> {
    static navigationOptions = {
        title: 'iPhone 8 Copy'
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
                        <TouchableHighlight style={{width: '15%', justifyContent: 'center'}} underlayColor='transparent'>
                            <FAIcon name='chevron-left' size={14} color='white' />
                        </TouchableHighlight>
                        <Image source={ require('../src/images/logo.png') } style={styles.headerTitle} />
                        <View style={{flexDirection: 'row', justifyContent: 'flex-end', width: '15%'}}>
                            <View style={styles.headerIcon}>
                                <FAIcon name='search' size={16} color='white' />
                            </View>
                            <View style={[styles.headerIcon, {marginLeft: 10}]}>
                                <FAIcon name='bell' size={16} color='white' />
                            </View>
                        </View>
                    </View>
                </ImageBackground>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <Image source={ require('../src/images/coach1.png') } style={{width: '100%', height: 250, resizeMode: 'cover'}} />
                    <View style={{padding: 10, backgroundColor: '#F1F1F1'}}>
                        <View style={{marginTop: -40}}>
                            <View style={{padding: 15, paddingBottom: 50, backgroundColor: 'white'}}>
                                <Text style={{color: '#4A4A4A', fontSize: 20, marginBottom: 5}}>Rashid Rasool</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <FAIcon name='map-marker' size={18} color='#9C9C9C' />
                                    <Text style={{color: '#9C9C9C', fontSize: 15, marginLeft: 7 }}>Riyadh</Text>
                                </View>
                            </View>
                            
                            <TouchableHighlight style={[styles.button, {marginTop: -25}]} >
                                <Text style={{color: 'white', fontSize: 15}}>BOOK NOW</Text>
                            </TouchableHighlight>

                            <View style={styles.section}>
                                <Text style={styles.textHeader}>ABOUT</Text>
                                <Text style={styles.textStyle15}>N10SO is an entertainment center Founded by International Rally star Abdullah Bakhashab that provides a Platform for youth to show their abilities in an exciting and safe sports environment & takes group events to a new level{'\n\n'}IN10SO center is the only indoor karting in KSA with 8000sqm space in Jeddah you will have a truly unique experience combining all the great activity of laser tag, bowling, billiards, archery, 7D cinema, arcades game, PlayStation and more.</Text>
                            </View>

                            <View style={styles.section}>
                                <Text style={styles.textHeader}>AVAILABLE SERVICES</Text>
                                <View style={{padding: 15, paddingTop: 0, paddingBottom: 10}}>
                                    <Text style={[styles.textStyle15, {marginBottom: 5}]}>•	Karate</Text>
                                    <Text style={styles.textStyle15}>•	Martial Arts</Text>
                                </View>
                            </View>
                            <View style={{backgroundColor: '#E4E4E4', height: 1}} />
                            <View style={{flexDirection: 'row', alignItems: 'center', padding: 15, paddingBottom: 0, backgroundColor: 'white'}}>
                                <View style={{width: '60%'}}>
                                    <Text style={styles.textHeader}>Time Slots</Text>
                                </View>
                                <View style={{width: '40%'}}>
                                    <Text style={styles.textHeader}>Price</Text>
                                </View>
                            </View>
                            <View style={{backgroundColor: '#E4E4E4', height: 1}} />
                            <View style={[styles.section, {marginTop: 0}]}>
                                <View style={{flexDirection: 'row', marginBottom: 10}}>
                                    <View style={{width: '60%'}}>
                                        <Text style={styles.textStyle13}>Personal Training (Individual)</Text>
                                    </View>
                                    <View style={{width: '40%'}}>
                                        <Text style={styles.textStyle13}>100 SAR per 60 min</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{width: '60%'}}>
                                        <Text style={styles.textStyle13}>Personal Training (Group)</Text>
                                    </View>
                                    <View style={{width: '40%'}}>
                                        <Text style={styles.textStyle13}>50 SAR per 60 min</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.section}>
                                <Text style={styles.textHeader}>COACH AVAILABLE FOR</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{backgroundColor: '#E6E6E6', borderRadius: 7, padding: 7, paddingLeft: 25, paddingRight: 25, justifyContent: 'center', alignItems: 'center', marginRight: 10}}>
                                        <Text style={{color: '#6E6E6E', fontSize: 13}}>MEN</Text>
                                    </View>
                                    <View style={{backgroundColor: '#E6E6E6', borderRadius: 7, padding: 7, paddingLeft: 25, paddingRight: 25, justifyContent: 'center', alignItems: 'center', marginRight: 10}}>
                                        <Text style={{color: '#6E6E6E', fontSize: 13}}>WOMEN</Text>
                                    </View>
                                    <View style={{backgroundColor: '#E6E6E6', borderRadius: 7, padding: 7, paddingLeft: 25, paddingRight: 25, justifyContent: 'center', alignItems: 'center', marginRight: 10}}>
                                        <Text style={{color: '#6E6E6E', fontSize: 13}}>MIXED</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.section}>
                                <Text style={[styles.textHeader, {marginBottom: 0}]}>AVAILABLE DAYS</Text>
                            </View>
                            <View style={{backgroundColor: '#E4E4E4', height: 1}} />
                            <View style={{flexDirection: 'row', alignItems: 'center', padding: 15, paddingBottom: 0, backgroundColor: 'white'}}>
                                <View style={{width: '40%'}}>
                                    <Text style={styles.textHeader}>Day</Text>
                                </View>
                                <View style={{width: '60%'}}>
                                    <Text style={styles.textHeader}>Available Hours</Text>
                                </View>
                            </View>
                            <View style={{backgroundColor: '#E4E4E4', height: 1}} />
                            <View style={[styles.section, {marginTop: 0}]}>
                                <View style={{flexDirection: 'row', marginBottom: 10}}>
                                    <View style={{width: '40%'}}>
                                        <Text style={styles.textStyle13}>Monday</Text>
                                    </View>
                                    <View style={{width: '60%'}}>
                                        <Text style={styles.textStyle13}>9:00 AM - 11:00 PM</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', marginBottom: 10}}>
                                    <View style={{width: '40%'}}>
                                        <Text style={styles.textStyle13}>Tuesday</Text>
                                    </View>
                                    <View style={{width: '60%'}}>
                                        <Text style={styles.textStyle13}>9:00 AM - 11:00 PM</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', marginBottom: 10}}>
                                    <View style={{width: '40%'}}>
                                        <Text style={styles.textStyle13}>Wednesday</Text>
                                    </View>
                                    <View style={{width: '60%'}}>
                                        <Text style={styles.textStyle13}>9:00 AM - 11:00 PM</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', marginBottom: 10}}>
                                    <View style={{width: '40%'}}>
                                        <Text style={styles.textStyle13}>Thursday</Text>
                                    </View>
                                    <View style={{width: '60%'}}>
                                        <Text style={styles.textStyle13}>9:00 AM - 11:00 PM</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', marginBottom: 10}}>
                                    <View style={{width: '40%'}}>
                                        <Text style={styles.textStyle13}>Friday</Text>
                                    </View>
                                    <View style={{width: '60%'}}>
                                        <Text style={styles.textStyle13}>9:00 AM - 11:00 PM</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{width: '40%'}}>
                                        <Text style={styles.textStyle13}>Saturday</Text>
                                    </View>
                                    <View style={{width: '60%'}}>
                                        <Text style={styles.textStyle13}>9:00 AM - 11:00 PM</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.section}>
                                <Text style={styles.textHeader}>SHARE VENUE</Text>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, paddingTop: 0}}>
                                    <Image source={ require('../src/images/share-venue-facebook.png') } style={styles.shareIcon} />
                                    <Image source={ require('../src/images/share-venue-whatsapp.png') } style={styles.shareIcon} />
                                    <Image source={ require('../src/images/share-venue-twitter.png') } style={styles.shareIcon} />
                                    <Image source={ require('../src/images/share-venue-instagram.png') } style={styles.shareIcon} />
                                    <Image source={ require('../src/images/share-venue-pinterest.png') } style={styles.shareIcon} />
                                    <FAIcon name='ellipsis-h' size={20} color='#A9B9C0' />
                                </View>
                            </View>
                        </View>

                        <TouchableHighlight style={styles.button} >
                            <Text style={{color: 'white', fontSize: 15}}>BOOK NOW</Text>
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
        height: 30,
        width: '40%',
        resizeMode: 'contain',
    },
    headerIcon: {
        backgroundColor: 'transparent',
        width: 30,
        height: 30,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    section: {
        padding: 15,
        marginTop: 10,
        backgroundColor: 'white'
    },
    button: {
        margin: 20,
        marginBottom: 10,
        width: '60%',
        backgroundColor: '#00a14c',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 12,
        borderRadius: 30
    },
    textHeader: {
        color: '#4A4A4A',
        fontSize: 15,
        marginBottom: 15
    },
    textStyle15: {
        color: '#8A8A8A',
        fontSize: 15
    },
    textStyle13: {
        color: '#8A8A8A',
        fontSize: 13
    },
    shareIcon: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
    }
});