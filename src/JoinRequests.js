import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    ImageBackground,
    ScrollView,
    TouchableHighlight,
    Text,
    View,
} from 'react-native';

import FAIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default class JoinRequests extends Component<{}> {
    static navigationOptions = {
        title: 'Join Requests'
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
                        <Text style={styles.headerTitle}>Join Requests</Text>
                        <View style={{width: '15%'}} />
                    </View>
                </ImageBackground>

                <ScrollView style={{backgroundColor:'#fff'}}>
                    <View style={styles.requestView}>
                        <View style={{padding: 15}}>
                            <Text style={{color: '#09A24F', fontSize: 15}}>Soccer PROS in Riyadh</Text>
                            <Text style={{color: '#9E9E9E', fontSize: 12, marginTop: 5}}>Soccer group</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                                <Text style={{color: '#9E9E9E', fontSize: 12}}>12 players</Text>
                                <View style={{flexDirection: 'row', paddingTop: 5, paddingBottom: 5}}>
                                    <FAIcon name='check-circle' color='#09A24F' size={16} />
                                    <Text style={{color: '#4A4A4A', fontSize: 12, marginLeft: 5}}>Ready</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'column', justifyContent: 'center', padding: 15}}>
                                <FAIcon name='chevron-right' size={14} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.requestView}>
                        <View style={{padding: 15}}>
                            <Text style={{color: '#09A24F', fontSize: 15}}>Footballers in Riyadh</Text>
                            <Text style={{color: '#9E9E9E', fontSize: 12, marginTop: 5}}>Soccer group</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                                <Text style={{color: '#9E9E9E', fontSize: 12}}>11 players</Text>
                                <View style={{flexDirection: 'row', paddingTop: 5, paddingBottom: 5}}>
                                    <Text style={{color: '#4A4A4A', fontSize: 12}}>1 player reamining</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'column', justifyContent: 'center', padding: 15}}>
                                <FAIcon name='chevron-right' size={14} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.requestView}>
                        <View style={{padding: 15}}>
                            <Text style={{color: '#09A24F', fontSize: 15}}>Footballers in Riyadh</Text>
                            <Text style={{color: '#9E9E9E', fontSize: 12, marginTop: 5}}>Soccer group</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={[styles.actionButton, {backgroundColor: '#FF7270'}]}>
                                <View style={styles.circleView}>
                                    <IonIcon name='md-close' size={20} color='#FF7270' style={{backgroundColor: 'transparent'}} />
                                </View>
                                <Text style={{color: 'white', fontSize: 12}}>Reject</Text>
                            </View>
                            <View style={[styles.actionButton, {backgroundColor: '#72D27E'}]}>
                                <View style={styles.circleView}>
                                    <IonIcon name='md-checkmark' size={20} color='#72D27E' style={{backgroundColor: 'transparent'}} />
                                </View>
                                <Text style={{color: 'white', fontSize: 12}}>Accept</Text>
                            </View>
                        </View>
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
    requestView: {
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    actionButton: {
        width: 80,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 5
    },
    circleView: {
        width: 25, 
        height: 25, 
        backgroundColor: 'white', 
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    }
});