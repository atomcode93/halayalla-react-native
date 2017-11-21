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
    Alert,
    View,
    Dimensions
} from 'react-native';
import Tournament from './components/Tournament';

import DateTimePicker from 'react-native-modal-datetime-picker';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default class TournamentCreate extends Component<{}> {
    static navigationOptions = {
        title: 'Crate Tournament'
    };
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            endDate: new Date(),
            selected: '',
            isDateTimePickerVisible: false,
            switchValue: [false, false],
            selectedFormat: 1
        }
    }

    _showDateTimePicker = (index) => {
        index === 0 ? this.setState( { selected: 'startDate' }) : this.setState({ selected: 'endDate' });
        this.setState({ isDateTimePickerVisible: true })
    }

    _hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false })
    }

    _handleDatePicked = (date) => {
        this.setState({ [this.state.selected]: date });
        this._hideDateTimePicker();
    }

    convertToDate = (date) => {
        return date.getDate() + ' ' + monthNames[date.getMonth()] + ' ' + date.getUTCFullYear();
    }

    changeSwitchValue = (value, index) => {
        let temp = this.state.switchValue;
        temp[index] = value;
        this.setState({ switchValue: temp });
    }

    selectFormat = (index) => {
        this.setState({ selectedFormat: index });
    }

    render() {

        const { navigate } = this.props.navigation;

        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <ImageBackground source={ require('../src/images/header.png') } style={styles.header}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <TouchableHighlight style={{width: '15%'}} underlayColor='transparent' onPress={() => navigate('Home')}>
                            <IonIcon name='md-arrow-round-back' size={24} color='white' style={{backgroundColor: 'transparent'}}/>
                        </TouchableHighlight>
                        <Text style={styles.headerTitle}>Create Tournament</Text>
                        <View style={{width: '15%'}} />
                    </View>
                </ImageBackground>

                <ScrollView style={{backgroundColor:'#fff', padding: 15}}>

                    <View style={styles.section}>
                        <Text style={{color: '#4a4a4a', fontSize: 18}}>Basic Information</Text>
                        <TextInput 
                            style={styles.textInput}
                            placeholder="Tournament name"
                        />
                        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                            <Text style={{color: '#9E9E9E', fontSize: 12, marginTop: 10, marginRight: 10}}>Set min and max</Text>
                            <Switch value={this.state.switchValue[0]} onValueChange={(value) => this.changeSwitchValue(value, 0)} />
                        </View>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Number of teams participating"
                        />
                    </View>

                    <View style={styles.section}>
                        <Text style={{color: '#4a4a4a', fontSize: 18}}>Tournament Format</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginBottom: 20}}>

                            <TouchableHighlight underlayColor='transparent' style={{width: '30%', alignItems: 'center'}} onPress={() => this.selectFormat(0)}>
                                <View style={{width: '100%', alignItems: 'center'}}>
                                    <View style={this.state.selectedFormat===0? styles.selectedFormatView : styles.formatView} >
                                        <Image source={ require('../src/images/group-knockout.png') } style={this.state.selectedFormat===0? styles.selectedImage : styles.image} />
                                    </View>
                                    <Text style={this.state.selectedFormat===0? styles.selectedFormatText : styles.formatText}>Group + Knockout</Text>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight underlayColor='transparent' style={{width: '30%', alignItems: 'center'}} onPress={() => this.selectFormat(1)}>
                                <View style={{width: '100%', alignItems: 'center'}}>
                                    <View style={this.state.selectedFormat===1? styles.selectedFormatView : styles.formatView} >
                                        <Image source={ require('../src/images/league.png') } style={this.state.selectedFormat===1? styles.selectedImage : styles.image} />
                                    </View>
                                    <Text style={this.state.selectedFormat===1? styles.selectedFormatText : styles.formatText}>League</Text>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight underlayColor='transparent' style={{width: '30%', alignItems: 'center'}} onPress={() => this.selectFormat(2)}>
                                <View style={{width: '100%', alignItems: 'center'}}>
                                    <View style={this.state.selectedFormat===2? styles.selectedFormatView : styles.formatView} >
                                        <Image source={ require('../src/images/knockout.png') } style={this.state.selectedFormat===2? styles.selectedImage : styles.image} />
                                    </View>
                                    <Text style={this.state.selectedFormat===2? styles.selectedFormatText : styles.formatText}>Knockout</Text>
                                </View>
                            </TouchableHighlight>

                        </View>
                    </View>

                    <View style={styles.section}>
                        <Text style={{color: '#4a4a4a', fontSize: 18}}>Tournament Details</Text>
                        <TextInput 
                            style={[styles.textInput, {height: 80}]}
                            placeholder="Tournament description"
                            multiline={true}
                        />
                    </View>

                    <View style={styles.section}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{width: '50%'}}>
                                <Text style={{color: '#4A4A4A', fontSize: 16}}>Start date</Text>
                                <View style={{flexDirection: 'row', marginTop: 10}}>
                                    <Text style={styles.date} >{this.convertToDate(this.state.startDate)}</Text>
                                    <TouchableHighlight style={styles.calendarIcon} underlayColor='transparent' onPress={ () => this._showDateTimePicker(0) }>
                                        <FAIcon name='calendar' size={16} color='#04B259' />
                                    </TouchableHighlight>
                                </View>
                            </View>
                            <View style={{width: '50%'}}>
                                <Text style={{color: '#4A4A4A', fontSize: 16}}>End date</Text>
                                <View style={{flexDirection: 'row', marginTop: 10}}>
                                    <Text style={styles.date} >{this.convertToDate(this.state.endDate)}</Text>
                                    <TouchableHighlight style={styles.calendarIcon} underlayColor='transparent' onPress={ () => this._showDateTimePicker(1) } >
                                        <FAIcon name='calendar' size={16} color='#04B259' />
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </View>
                        <DateTimePicker
                            isVisible={ this.state.isDateTimePickerVisible }
                            onConfirm={ this._handleDatePicked }
                            onCancel={ this._hideDateTimePicker }
                            date={ this.state.selected==='startDate'? this.state.startDate : this.state.endDate }
                            minimumDate={ this.state.selected==='endDate'? this.state.startDate : undefined }
                        />
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15, paddingBottom: 15}}>
                            <Text style={{color: '#9E9E9E', width: '80%', fontSize: 12 }}>Start automatically when participating teams number is met</Text>
                            <Switch value={this.state.switchValue[1]} onValueChange={(value) => this.changeSwitchValue(value, 1)} />
                        </View>
                    </View>

                    <TextInput 
                        style={styles.textInput}
                        placeholder="Registration fees"
                    />

                    <TouchableHighlight style={styles.button} >
                        <Text style={{color: 'white'}}>Create Tournament</Text>
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
    headerButton: {
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    section: {
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
        paddingTop: 10
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
    date: {
        borderWidth: 1,
        borderColor: '#C4C4C4',
        padding: 5,
        paddingLeft: 10,
        borderRadius: 5,
        fontSize: 14,
        color: '#4A4A4A',
        width: '80%'
    },
    calendarIcon: {
        marginLeft: -20,
        marginTop: 5,
        backgroundColor: 'transparent'
    },
    button: {
        margin: 20,
        marginBottom: 30,
        width: '70%',
        backgroundColor: '#00a14c',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 10,
        borderRadius: 20
    },
    selectedFormatView: {
        borderWidth: 3,
        borderColor: '#09A24F',
        borderRadius: 6,
        width: '100%',
        alignItems: 'center'
    },
    formatView: {
        width: '100%',
        alignItems: 'center'
    },
    selectedImage: {
        width: '90%',
        height: 90
    },
    image: {
        width: '80%',
        height: 70
    },
    formatText: {
        color: '#D3D3D3',
        fontSize: 10
    },
    selectedFormatText: {
        color: '#09A24F',
        fontSize: 14
    }
});