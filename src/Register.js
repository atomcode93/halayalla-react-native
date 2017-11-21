import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    ScrollView,
    TouchableHighlight,
    Text,
    TextInput,
    Alert,
    View
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

import FAIcon from 'react-native-vector-icons/FontAwesome';

export default class Register extends Component<{}> {
    static navigationOptions = {
        title: 'Register'
    };
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            dob: new Date(),
            mobileNumber: '',
            password: '',
            confirmPassword: '',
            referralCode: '',
            isDateTimePickerVisible: false,
        }
    }

    _onPressButton() {
        Alert.alert('You tapped the button!')
    }

    _showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true })
    }

    _hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false })
    }

    _handleDatePicked = (date) => {
        this.setState({ dob: date });
        this._hideDateTimePicker();
    }

    render() {

        const { navigate } = this.props.navigation;

        return (
            <View style={{flex: 1, flexDirection: 'row'}}>
                <ScrollView style={{backgroundColor:'#fff'}}>
                    <View style={{flexDirection: 'column',height: 45}}>
                        <View style={{flex:1,flexDirection: 'row',alignItems: 'center',justifyContent: 'center',backgroundColor:'#efc637'}}>
                            <Text> Feedback </Text>
                            <Text> please & we're </Text>
                            <Text> hiring! </Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'column',marginTop:15,marginBottom:10}}>
                        <View style={{flex:1,flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
                            <Text style={{fontSize:14,color:'#000',textAlign:'center'}}> Lifetime FREE Membership Available{"\n"} for a Limited Time Only</Text>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <Text style={{fontSize: 16, color: '#6d6e70', fontWeight: 'bold', marginBottom: 10}}>Enter your details to join Hala Yalla!</Text>
                        <View style={{flexDirection: 'row'}}>
                            <FAIcon name='info-circle' size={16} style={{marginRight: 5}}/>
                            <Text>All fields are mandatory.</Text>
                        </View>
                        <View style={{marginTop: 10, flexDirection: 'row'}}>
                            <View style={styles.putIcon}>
                                <FAIcon name='user' size={24} color="#666" />
                            </View>
                            <TextInput
                                underlineColorAndroid='transparent'
                                style={[styles.put, {width: '50%'}]}
                                placeholder='First Name'
                                onChangeText={(text) => this.setState({ firstName: text })}
                                value={this.state.firstName}
                            />
                            <TextInput
                                underlineColorAndroid='transparent'
                                style={[styles.put, {paddingLeft: 20, width: '50%'}]}
                                placeholder='Last Name'
                                onChangeText={(text) => this.setState({ lastName: text })}
                                value={this.state.lastName}
                            />
                        </View>
                        <View>
                            <View style={styles.putIcon}>
                                <FAIcon name='envelope' size={18} color="#666" />
                            </View>
                            <TextInput
                                underlineColorAndroid='transparent'
                                style={styles.put}
                                placeholder='email@ouremail.com'
                                onChangeText={(text) => this.setState({ email: text })}
                                value={this.state.email}
                            />
                        </View>
                        <View>
                            <View style={styles.putIcon}>
                                <FAIcon name='mobile' size={28} color="#666" />
                            </View>
                            <TextInput
                                underlineColorAndroid='transparent'
                                style={styles.put}
                                placeholder='Mobile Number'
                                keyboardType='number-pad'
                                onChangeText={(text) => this.setState({ mobileNumber: text })}
                                value={this.state.mobileNumber}
                            />
                        </View>
                        <Text style={{fontSize: 16, color: '#6d6e70', fontWeight: 'bold', marginTop: 20, marginBottom: 10}}>Date of Birth:</Text>
                        <TouchableHighlight underlayColor='transparent' onPress={ this._showDateTimePicker }>
                            <View>
                                <View style={styles.putIcon}>
                                    <FAIcon name='calendar' size={20} color="#666" />
                                </View>
                                <Text style={[styles.put, {fontSize: 20, paddingTop: 12}]} >{this.state.dob.getUTCDate() + ' / ' + (this.state.dob.getUTCMonth() + 1) + ' / ' + this.state.dob.getUTCFullYear()}</Text>
                            </View>
                        </TouchableHighlight>
                        <DateTimePicker
                            isVisible={ this.state.isDateTimePickerVisible }
                            onConfirm={ this._handleDatePicked }
                            onCancel={ this._hideDateTimePicker }
                            date={this.state.dob}
                        />
                        <View>
                            <View style={styles.putIcon}>
                                <FAIcon name='lock' size={24} color="#666" />
                            </View>
                            <TextInput
                                underlineColorAndroid='transparent'
                                style={styles.put}
                                placeholder='Enter Password'
                                secureTextEntry={true}
                                onChangeText={(text) => this.setState({ password: text })}
                                value={this.state.password}
                            />
                        </View>
                        <View>
                            <View style={styles.putIcon}>
                                <FAIcon name='lock' size={24} color="#666" />
                            </View>
                            <TextInput
                                underlineColorAndroid='transparent'
                                style={styles.put}
                                placeholder='Enter Password Again'
                                secureTextEntry={true}
                                onChangeText={(text) => this.setState({ confirmPassword: text })}
                                value={this.state.confirmPassword}
                            />
                        </View>
                        <View>
                            <View style={styles.putIcon}>
                                <FAIcon name='mobile' size={28} color="#666" />
                            </View>
                            <TextInput
                                underlineColorAndroid='transparent'
                                style={styles.put}
                                placeholder='Enter Referral Code (optional)'
                                onChangeText={(text) => this.setState({ referralCode: text })}
                                value={this.state.referralCode}
                            />
                        </View>
                        <TouchableHighlight style={styles.button} onPress={this._onPressButton} underlayColor='transparent'>
                            <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>Hala Yalla! Let's Kick It</Text>
                        </TouchableHighlight>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20
    },
    put:{
        paddingLeft: 45,
        height: 49,
        borderColor: '#ccc',
        borderWidth: 1,
        fontSize: 16,
        color: '#666'
    },
    putIcon:{
        position:'absolute',
        left:0,
        top:0,
        width: 45,
        height: 49,
        justifyContent: 'center',
        borderWidth: 1,
        borderRightWidth:0,
        borderColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        marginTop: 15,
        backgroundColor:'#00a14c',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5
    }
});