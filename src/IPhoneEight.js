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
import ImageWithInfo from './components/ImageWithInfo';

import FAIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';

import { coaches, venues } from './constants/coaches-venues.js';

export default class IPhoneEight extends Component<{}> {
    static navigationOptions = {
        title: 'iPhone 8'
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
                            <View style={styles.headerIcon}>
                                <FAIcon name='plus' size={16} color='white' />
                            </View>
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

                <View style={styles.container}>
                    <View style={styles.section}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, paddingLeft: 0}}>
                            <Text style={{color: '#4A4A4A', fontSize: 16}}>Verified Coaches</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{color: '#20C062', fontSize: 14, marginRight: 5}}>See All</Text>
                                <FAIcon name='chevron-right' size={12} color='#20C062' />
                            </View>
                        </View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {
                            coaches.map((coach, index) => {
                                return (
                                    <ImageWithInfo key={index} data={coach} />
                                )
                            })
                        }
                        </ScrollView>
                    </View>

                    <View style={{backgroundColor: '#979797', opacity: 0.3, height: 1}} />

                    <View style={styles.section}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, paddingLeft: 0}}>
                            <Text style={{color: '#4A4A4A', fontSize: 16}}>Verified Venues</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{color: '#20C062', fontSize: 14, marginRight: 5}}>See All</Text>
                                <FAIcon name='chevron-right' size={12} color='#20C062' />
                            </View>
                        </View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {
                            venues.map((venue, index) => {
                                return (
                                    <ImageWithInfo key={index} data={venue} />
                                )
                            })
                        }
                        </ScrollView>
                    </View>
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
    container: {
        height: Dimensions.get('window').height - 70,
    },
    section: {
        height: '50%',
        padding: 10,
        paddingRight: 0,
        backgroundColor: '#F1F1F1',
    }
});