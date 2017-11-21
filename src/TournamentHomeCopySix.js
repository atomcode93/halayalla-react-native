import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    ImageBackground,
    ScrollView,
    TouchableHighlight,
    Text,
    TextInput,
    Switch,
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

export default class TournamentHomeCopySix extends Component<{}> {
    static navigationOptions = {
        title: 'Create a new group'
    };
    constructor(props) {
        super(props);
        this.state = {
            switchValue: false
        }
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

                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{padding: 10}}>
                        <Text style={{color: '#4A4A4A', fontSize: 18}}>Create a new group</Text>
                        <TextInput 
                            style={styles.textInput}
                            placeholder="Team name"
                        />
                        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                            <Text style={{color: '#9E9E9E', fontSize: 12, marginTop: 10, marginRight: 10}}>I'll specify team members later</Text>
                            <Switch value={this.state.switchValue} onValueChange={(value) => this.setState({ switchValue: value })} />
                        </View>
                    </View>

                    <View style={{width: '100%', height: 5, backgroundColor: '#E4E4E4'}}></View>

                    <View style={{padding: 10, paddingTop: 20}}>
                        <Text style={{color: '#4A4A4A', fontSize: 18}}>Invite Friends</Text>
                        <Text style={{color: '#9E9E9E', fontSize: 12, marginTop: 5}}>You're inviting</Text>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <View style={{backgroundColor: '#09A24F', padding: 3, paddingLeft: 7, paddingRight: 7, borderRadius: 7, marginRight: 5}}>
                                <Text style={{color: 'white', fontSize: 14}}>Ahmed Khaled</Text>
                            </View>
                            <View style={{backgroundColor: '#09A24F', padding: 3, paddingLeft: 7, paddingRight: 7, borderRadius: 7, marginRight: 5}}>
                                <Text style={{color: 'white', fontSize: 14}}>Ahmed Khaled</Text>
                            </View>
                            <View style={{backgroundColor: '#09A24F', padding: 3, paddingLeft: 7, paddingRight: 7, borderRadius: 7}}>
                                <Text style={{color: 'white', fontSize: 14}}>Ahmed Khaled</Text>
                            </View>
                        </View>
                        <Text style={{color: '#4A4A4A', fontSize: 14, marginTop: 30}}>Select group members</Text>
                        <TextInput 
                            style={styles.textInput}
                            placeholder="Team Invite HalaYalla friends"
                        />
                    </View>

                    <View style={{paddingLeft: 10}}>
                        <View style={{width: '100%', height: 1, backgroundColor: '#E4E4E4'}}></View>
                        <Text style={{color: '#4A4A4A', fontSize: 14, marginTop: 10}}>Share this link to invite your friends</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10, paddingTop: 15, paddingBottom: 15}}>
                            <View style={{justifyContent: 'center'}}>
                                <Text style={{color: '#51D3F9', fontSize: 14}}>http://hy.sa/f/38181</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Image source={ require('../src/images/share-icon1.png') } style={styles.shareIcon} />
                                <Image source={ require('../src/images/share-icon2.png') } style={styles.shareIcon} />
                                <Image source={ require('../src/images/share-icon3.png') } style={styles.shareIcon} />
                                <Image source={ require('../src/images/share-icon4.png') } style={styles.shareIcon} />
                            </View>
                        </View>
                        <View style={{width: '100%', height: 1, backgroundColor: '#E4E4E4'}}></View>
                        <Text style={{color: '#4A4A4A', fontSize: 14, marginTop: 15, marginBottom: 5}}>Invite members from your groups</Text>
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

                    <View style={{padding: 10}}>
                        <View style={{backgroundColor: '#F3EC9B', width: '100%', borderRadius: 10, marginTop: 10, padding: 5}}>
                            <Text style={{color: '#9E9E9E', fontSize: 11, textAlign: 'center'}}>To join this tournament you need to select at least 7 members. {'\n'}You can always bring or invite more  people later</Text>
                        </View>
                    </View>

                    <TouchableHighlight  >
                        <View style={styles.button}>
                            <Text style={{color: 'white', fontSize: 16}}>Proceed</Text>
                            <Text style={{color: 'white', fontSize: 10}}>I’ll invite more team members later</Text>
                        </View>
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
        fontSize: 18,
        color: 'white',
        backgroundColor: 'transparent',
    },
    button: {
        margin: 10,
        width: '60%',
        backgroundColor: '#00a14c',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 7,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 40
    },
    textInput: {
        width: '100%',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#c4c4c4',
        padding: 5,
        paddingLeft: 10,
        fontSize: 14,
        marginTop: 15,
        marginBottom: 15
    },
    shareIcon: {
        width: 35,
        height: 35,
        resizeMode: 'contain',
        marginLeft: 5
    },
    groupView: {
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
        padding: 10,
        paddingLeft: 0,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});