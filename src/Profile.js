import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    ImageBackground,
    ScrollView,
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import NumberWithText from './components/NumberWithText';
import StarRating from './components/StarRating';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';

export default class Profile extends Component<{}> {
    static navigationOptions = {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('./images/5.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row'}}>
                <ScrollView style={{marginTop: 50}}>
                    <View style={{backgroundColor: '#404041'}}>
                        <ImageBackground source={ require('../src/images/sports-ptrn.png') } style={{width: '100%', height: undefined}}>
                            <View style={styles.changeLanguage}>
                                <Text style={{color: 'white', fontWeight: '600'}}>English</Text>
                            </View>
                            <View style={styles.profileView}>
                                <TouchableHighlight>
                                    <View>
                                        <Image source={ require('../src/images/5.png') } style={styles.avatar} />
                                        <View style={styles.editProfilePic}>
                                            <FAIcon name="pencil" color="white" style={{marginTop: 5, marginLeft: 7, width: 20, height: 20}} size={18}/>
                                        </View>
                                    </View>
                                </TouchableHighlight>
                                <Text style={styles.profileName} >Lasha Butiashvili</Text>
                                <Text style={styles.textStyle1} >Riyadh, Saudi Arabia</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.textStyle1}>Account Verification: </Text>
                                    <IonIcon name="ios-mail-outline" color="white" style={{marginLeft: 10, marginRight: 10}} size={20}/>
                                    <IonIcon name="ios-phone-portrait" color="white" size={20} />
                                </View>
                                <StarRating stars={3} />
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.textStyle1}>Your Referral ID: </Text>
                                    <Text style={[styles.textStyle1, {color: '#efc637'}]}>247652Qm</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={styles.profileInfo}>
                        <NumberWithText number={0} text="Groups" type="profileInfo"/>
                        <NumberWithText number={0} text="Activities" type="profileInfo" />
                        <NumberWithText number={10} text="Points" type="profileInfo" />
                        <NumberWithText number={1} text="Awards" type="profileInfo" />
                    </View>
                    <View style={styles.eventInfo}>
                        <NumberWithText number={0} text="Attended" />
                        <NumberWithText number={0} text="Skipped" />
                        <NumberWithText number={0} text="Lates" />
                        <NumberWithText number={0} text="Misconduct" />
                    </View>
                    <View style={styles.buttonView}>
                        <TouchableHighlight style={styles.button}>
                            <View style={{flexDirection: 'row'}}>
                                <FAIcon name="user-plus" color="white" size={16}/>
                                <Text style={{marginLeft: 10, color: 'white'}}>Request (0)</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.button}>
                            <View style={{flexDirection: 'row'}}>
                                <FAIcon name="users" color="white" size={16} />
                                <Text style={{marginLeft: 10, color: 'white'}}>Friends (0)</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.buttonView}>
                        <TouchableHighlight style={styles.button}>
                            <Text style={{color: 'white'}}>Fitbit</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.button}>
                            <Text style={{color: 'white'}}>My Activities</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.buttonView}>
                        <TouchableHighlight style={styles.button}>
                            <Text style={{color: 'white'}}>Past Classes</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.button}>
                            <Text style={{color: 'white'}}>Payment History</Text>
                        </TouchableHighlight>
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
    profileView: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 10
    },
    changeLanguage: {
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 5,
        padding: 5,
        position: 'absolute',
        left: '80%',
        top: 10
    },
    avatar: {
        width: 100,
        height: 100,
        backgroundColor: '#efc637',
        borderRadius: 50,
        marginBottom: 20
    },
    editProfilePic: {
        position: 'absolute',
        left: 70,
        top: 70,
        backgroundColor: '#00a14c',
        width: 30,
        height: 30,
        borderRadius: 15
    },
    profileName: {
        fontSize: 25,
        fontWeight: '600',
        color: 'white',
        marginBottom: 10,
    },
    profileInfo: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        backgroundColor: '#282829', 
        paddingLeft: 20,
        paddingRight: 20
    },
    eventInfo: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        backgroundColor: 'white', 
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#cacaca',
        marginBottom: 20
    },
    textStyle1: {
        fontSize: 16,
        fontWeight: '500',
        color: 'white',
        marginBottom: 10
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        paddingTop: 5,
        paddingBottom: 5
    },
    button: {
        width: '45%',
        backgroundColor:'#00a14c',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5
    }
});