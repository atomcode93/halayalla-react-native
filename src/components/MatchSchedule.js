import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    TouchableHighlight,
    Text,
    View
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

import IonIcon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default class MatchSchedule extends Component<{}> {
    constructor(){
        super()
        this.state = {
            edit: false,
            isDateTimePickerVisible: false,
            mode: 'date',
            match: null
        }
    }

    componentWillMount() {
        let temp = Object.assign({}, this.props.match);
        this.setState({ match: temp });
    }

    _showDateTimePicker = (mode) => {
        this.setState({ mode: mode })
        this.setState({ isDateTimePickerVisible: true })
    }

    _hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false })
    }

    _handleDatePicked = (date) => {
        let temp = this.state.match;
        temp.startTime = date;
        this.setState({ match: temp });
        this._hideDateTimePicker();
    }

    getDateString = (date) => {
        return date.getDate() + ' ' + monthNames[date.getMonth()] + ' ' + date.getFullYear();
    }

    updateDateTime = () => {
        this.props.updateDate(this.props.index, this.state.match.startTime);
        this.setState({ edit: false });
    }

    getTime = (date) => {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return hours + ':' + minutes + ' ' + ampm;
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.section}>
                    <View style={{flexDirection: 'row', width: '30%'}}>
                        <Image source={this.props.match.homeAvatarUrl} style={styles.avatar} />
                        <View style={{justifyContent: 'center', marginLeft: 10, width: '60%'}}>
                            <Text style={{color: '#4A4A4A', fontSize: 14}}>{this.props.match.homeTeamName}</Text>
                        </View>
                    </View>
                    <View style={[this.props.type==='display'? {justifyContent: 'center'} : {justifyContent: 'flex-end'}, {alignItems: 'center'}]}>
                        <View style={styles.matchTime}>
                            <Text style={{color: 'white', fontSize: 14}}>{this.getTime(this.props.match.startTime)}</Text>
                        </View>
                        {this.props.type!=='display' &&
                        <TouchableHighlight underlayColor='transparent' style={[styles.editButton, this.state.edit? {backgroundColor: '#F6F6F6'} : null]} onPress={() => this.setState({ edit: true })}>
                            <Text style={[{color: '#F7F7F7', fontSize: 12}, this.state.edit? {color: '#C1C1C1'} : null]}>EDIT</Text>
                        </TouchableHighlight>
                        }
                    </View>
                    <View style={{flexDirection: 'row', width: '30%', justifyContent: 'flex-end'}}>
                        <View style={{justifyContent: 'center', marginRight: 10, width: '60%'}}>
                            <Text style={{color: '#4A4A4A', fontSize: 14, alignSelf: 'flex-end'}}>{this.props.match.awayTeamName}</Text>
                        </View>
                        <Image source={this.props.match.awayAvatarUrl} style={styles.avatar} />
                    </View>
                </View>

                { this.state.edit &&
                <View style={[styles.section, {backgroundColor: '#EFEFEF'}]}>
                    <View style={{width: '30%'}}>
                        <Text style={{color: '#A0A4A1', fontSize: 16}}>{this.getDateString(this.state.match.startTime)}</Text>
                        <TouchableHighlight underlayColor='transparent' onPress={() => this._showDateTimePicker('date')}>
                            <Text style={{color: '#09A24F', fontSize: 12, marginTop: 10}}>Change date</Text>
                        </TouchableHighlight>
                    </View>
                    <View >
                        <Text style={{color: '#A0A4A1', fontSize: 16}}>{this.getTime(this.state.match.startTime)}</Text>
                        <TouchableHighlight underlayColor='transparent' onPress={() => this._showDateTimePicker('time')}>
                            <Text style={{color: '#09A24F', fontSize: 12, marginTop: 10}}>Change time</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'flex-end', width: '30%'}}>
                        <TouchableHighlight underlayColor='transparent' onPress={this.updateDateTime}>
                            <Text style={{color: '#09A24F', fontSize: 16}}>SAVE</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                }

                <DateTimePicker
                    isVisible={ this.state.isDateTimePickerVisible }
                    onConfirm={ this._handleDatePicked }
                    onCancel={ this._hideDateTimePicker }
                    mode={ this.state.mode }
                    date={ this.props.match.startTime }
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        borderTopWidth: 1,
        borderTopColor: '#E8E8E8'
    },
    avatar: {
        width: 40,
        height: 40,
        resizeMode: 'contain'
    },
    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        paddingLeft: 20,
        paddingRight: 20
    },
    matchTime: {
        backgroundColor: '#2F3831',
        paddingLeft: 7,
        paddingRight: 7,
        borderRadius: 7
    },
    editButton: {
        backgroundColor: '#09A24F',
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 7,
        marginTop: 5
    }
});