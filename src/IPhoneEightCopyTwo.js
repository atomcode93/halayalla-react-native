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
import CheckBox from './components/CheckBox';

import FAIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const timeSlots = ['4 PM - 5 PM', '5 PM - 6 PM', '6 PM - 7 PM', '8 PM - 9 PM', '10 PM - 11 PM', '11 PM - 12 PM'];

export default class IPhoneEightCopyTwo extends Component<{}> {
    static navigationOptions = {
        title: 'iPhone 8 Copy 2'
    };
    constructor(props) {
        super(props);
        this.state = {
            now: new Date(),
            selectedDate: new Date().getDate(),
            selectedService: 'individual'
        }
    }

    render() {

        const { navigate } = this.props.navigation;

        var dates = [];
        for (let i = this.state.now.getDate(); i <= days[this.state.now.getMonth()]; i++){
            dates.push(
                <TouchableHighlight key={i} underlayColor='transparent' onPress={() => this.setState({ selectedDate: i })}>
                    <View style={this.state.selectedDate===i? styles.selectedDate : styles.date}>
                        <Text style={[this.state.selectedDate===i? styles.selectedDateColor: styles.dateColor, {fontSize: 20}]}>{monthNames[this.state.now.getMonth()]}</Text>
                        <Text style={[this.state.selectedDate===i? styles.selectedDateColor: styles.dateColor, {fontSize: 25, marginTop: 3}]}>{i}</Text>
                    </View>
                </TouchableHighlight>
            )
        }

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

                <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: '#F1F1F1'}}>
                    <View style={{padding: 10, margin: 10, marginTop: 20, backgroundColor: 'white'}}>
                        <Text style={{color: '#4A4A4A', fontSize: 20, marginBottom: 5}}>Booking Rashid Rasool</Text>
                        <View style={{flexDirection: 'row'}}>
                            <FAIcon name='map-marker' size={18} color='#9C9C9C' />
                            <Text style={{color: '#9C9C9C', fontSize: 15, marginLeft: 7 }}>Riyadh</Text>
                        </View>
                    </View>

                    <Text style={{color: '#4A4A4A', fontSize: 15, margin: 10}}>SELECT DATE</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    { dates }
                    </ScrollView>
                    <Text style={{color: '#9B9B9B', fontSize: 14, textAlign: 'center', marginTop: 5}}>{'Your training will begin on ' + monthNames[this.state.now.getMonth()] + ' ' + this.state.selectedDate}</Text>

                    <Text style={{color: '#4A4A4A', fontSize: 15, margin: 10, marginTop: 30}}>CHOOSE A LOCATION FOR YOUR TRAINING</Text>
                    <View style={{backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15, paddingTop: 20, paddingBottom: 20}}>
                        <Text style={{color: '#4A4A4A', fontSize: 14}}>HalaYalla Sports Complex, Olaya, Riyadh</Text>
                        <FAIcon name='chevron-right' size={14} color='#9B9B9B' />
                    </View>

                    <Text style={{color: '#4A4A4A', fontSize: 15, margin: 10, marginTop: 20}}>CHOOSE SERVICE</Text>
                    <View style={{backgroundColor: 'white'}}>
                        <View style={{flexDirection: 'row', padding: 15, paddingBottom: 10}}>
                            <View style={{width: 20, height: 20, borderRadius: 20, borderColor: '#979797', borderWidth: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 15, marginRight: 15}}>
                            { this.state.selectedService==='individual' &&
                                <View style={{width: 13, height: 13, borderRadius: 13, backgroundColor: '#04B25A'}}></View>
                            }
                            </View>
                            <TouchableHighlight underlayColor='transparent' onPress={() => this.setState({ selectedService: 'individual' })}>
                                <Text style={[this.state.selectedService==='individual'? {color: '#4A4A4A'} : {color: '#9B9B9B'}, {fontSize: 18}]}>Personal Training (Individual)</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={{flexDirection: 'row', padding: 15, paddingTop: 10}}>
                            <View style={{width: 20, height: 20, borderRadius: 20, borderColor: '#979797', borderWidth: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 15, marginRight: 15}}>
                            { this.state.selectedService==='group' &&
                                <View style={{width: 13, height: 13, borderRadius: 13, backgroundColor: '#04B25A'}}></View>
                            }    
                            </View>
                            <TouchableHighlight underlayColor='transparent' onPress={() => this.setState({ selectedService: 'group' })}>
                                <Text style={[this.state.selectedService==='group'? {color: '#4A4A4A'} : {color: '#9B9B9B'}, {fontSize: 18}]}>Personal Training (Group)</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={{marginLeft: 65, marginBottom: 20, borderBottomColor: '#979797', borderBottomWidth: 1, opacity: 0.3}} />
                        <View style={{marginLeft: 65, paddingBottom: 20}}>
                            <Text style={{color: '#4A4A4A', fontSize: 14,  lineHeight: 20}}>
                                Personal sessions at your location.{'\n'}
                                8 classes per month.{'\n'}
                                1 hour per class{'\n'}
                                SAR 800 per month
                            </Text>
                        </View>
                    </View>

                    <Text style={{color: '#4A4A4A', fontSize: 15, marginLeft: 10, marginTop: 20, marginBottom: 5}}>SELECT TIME SLOTS</Text>
                    <Text style={{color: '#9B9B9B', fontSize: 14, marginLeft: 10, marginBottom: 20}}>All the available time slots are shown</Text>
                    <View style={{backgroundColor: 'white', padding: 10, paddingTop: 20, paddingBottom: 15, flexDirection: 'row', flexWrap: 'wrap'}}>
                    {
                        timeSlots.map((time, index) => {
                            return(
                                <CheckBox key={index}
                                    checked={false}
                                    label="12:55"
                                    checkedComponent={
                                        <View style={styles.selectedTimeSlot}>
                                            <Text style={{color: 'white', fontSize: 13}}>{time}</Text>
                                        </View>
                                    }
                                    uncheckedComponent={
                                        <View style={styles.timeSlot}>
                                            <Text style={{color: '#9F9F9F', fontSize: 13}}>{time}</Text>
                                        </View>
                                    }
                                    containerStyle={{justifyContent:'center'}}
                                    onChange={() => {}}
                                />
                            )
                        })
                    }
                    </View>

                    <Text style={{color: '#9B9B9B', fontSize: 14, textAlign: 'center', marginTop: 15, marginBottom: 20, width: '60%', alignSelf: 'center'}}>This will be your training time for the one month course</Text>

                    <View style={{backgroundColor: 'white', margin: 10, padding: 10, marginBottom: 0}}>
                        <Text style={{color: '#4A4A4A', fontSize: 20, marginTop: 10}}>YOUR BOOKING</Text>
                        <Text style={{color: '#9B9B9B', fontSize: 15, marginTop: 20, marginBottom: 10, lineHeight: 20}}>Coach: Rashid Rasool{'\n'}Service: Personal Training (Individual)</Text>
                        <Text style={{color: '#9B9B9B', fontSize: 15, lineHeight: 20}}>
                            Training starts: Nov 10{'\n'}
                            Training ends: After 8 classes{'\n'}
                            Class time: 6 PM to 7 PM (1 hour){'\n'}
                            Location: HalaYalla Sports Complex, Riyadh
                        </Text>
                    </View>
                    <View style={{backgroundColor: 'white', margin: 10, padding: 15, marginTop: 1, marginBottom: 1}}>
                        <Text style={{color: '#129D47', fontSize: 18}}>TOTAL COST: SAR 800</Text>
                    </View>
                    <View style={{backgroundColor: 'white', margin: 10, padding: 15, marginTop: 0}}>
                        <Text style={{color: '#9B9B9B', fontSize: 12}}>
                            Complete payment is required to reserve your booking for this coach.{'\n\n'}
                            Please read our cancellation policy in <Text style={{color: '#129D47'}}>Terms and Conditions</Text>
                        </Text>
                    </View>

                    <TouchableHighlight style={styles.button} >
                        <Text style={{color: 'white', fontSize: 15}}>CONFIRM BOOKING</Text>
                    </TouchableHighlight>
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
    date: {
        backgroundColor: 'white',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 15
    },
    selectedDate: {
        backgroundColor: 'white',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 3,
        borderBottomColor: '#04B25A'
    },
    dateColor: {
        color: '#9B9B9B'
    },
    selectedDateColor: {
        color: '#04B25A'
    },
    timeSlot: {
        margin: 2,
        borderColor: '#D3D3D3',
        borderWidth: 1,
        borderRadius: 7,
        padding: 5
    },
    selectedTimeSlot: {
        margin: 2,
        borderColor: '#D3D3D3',
        borderWidth: 1,
        borderRadius: 7,
        padding: 5,
        backgroundColor: '#129D47'
    },
    button: {
        margin: 20,
        width: '70%',
        backgroundColor: '#00a14c',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 12,
        borderRadius: 30
    },
});