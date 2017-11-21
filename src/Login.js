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

export default class Login extends Component<{}> {
    static navigationOptions = {
        title: 'Login'
    };
    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder',texterku:'Useless Placeholder' };
    }

    _onPressButton() {
        Alert.alert('You tapped the button!')
    }

    render() {

        const { navigate } = this.props.navigation;

        const socstylesTw = [styles.soclog,styles.soclogTw];
        const socstylesFb = [styles.soclog,styles.soclogFb];
        const socstylesG = [styles.soclog,styles.soclogG];
        const socstylesGLi = [styles.soclog,styles.soclogLi];
        return (
            <View style={{flex: 1, flexDirection: 'row'}}>
                <ScrollView style={{marginBottom: 60,backgroundColor:'#fff'}}>
                    <View style={{flexDirection: 'column',height: 45}}>
                        <View style={{flex:1,flexDirection: 'row',alignItems: 'center',justifyContent: 'center',backgroundColor:'#efc637'}}>
                            <Text> Feedback </Text>
                            <Text> please & we're </Text>
                            <Text> hiring! </Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'column',marginTop:20}}>
                        <View style={{flex:1,flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
                            <Text style={{fontSize:36,color:'#000'}}> Hala, Sign in!  </Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'column',marginTop:15,marginBottom:10}}>
                        <View style={{flex:1,flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
                            <Text style={{fontSize:14,color:'#000',textAlign:'center'}}> Lifetime FREE Membership Available{"\n"} for a Limited Time Only</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                        <View style={{flex:1,flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
                            <TouchableHighlight
                                style={styles.lang}
                                onPress={this._onPressButton}>
                                <Text style={{color:'#337ab7'}}>English</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={{flexDirection: 'column',paddingLeft:15,paddingRight:15}}>
                        <View style={{marginTop:10}}>
                            <View style={styles.putimgicon}>
                                <Image
                                    source={ require('../src/images/mail.png') }
                                    style={styles.putimg}
                                />
                            </View>
                            <TextInput
                                underlineColorAndroid='transparent'
                                style={styles.put}
                                onChangeText={(text) => this.setState({text})}
                                value={this.state.text}
                            />
                        </View>
                        <View style={{marginTop:10}}>
                            <View style={styles.putimgicon}>
                                <Image
                                    source={ require('../src/images/locked.png') }
                                    style={styles.putimg}
                                />
                            </View>
                            <TextInput
                                underlineColorAndroid='transparent'
                                style={styles.put}
                                onChangeText={(text) => this.setState({texterku})}
                                value={this.state.texterku}
                            />
                        </View>
                    </View>
                    <View style={{flexDirection: 'column',marginTop:10,paddingLeft:15,paddingRight:15}}>
                        <TouchableHighlight
                            style={styles.loginbut}
                            onPress={() => navigate('First')}>
                            <Text style={{color:'#fff',paddingTop:7,textAlign:'center',alignItems: 'center'}}> Sign In </Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{flexDirection: 'column',marginTop:10}}>
                        <View style={{flex:1,flexDirection: 'row',paddingLeft:14}}>
                            <Text style={{color:'#337ab7',height:39,paddingTop:7,textAlign:'left',alignItems: 'center'}}> Forgot Password ?  </Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'column',marginTop:10}}>
                        <View style={styles.regnow}>
                            <Text style={{color:'#337ab7',height:39,paddingTop:9,textAlign:'left',alignItems: 'center'}}>
                                Don't have an account 
                            </Text>
                            <TouchableHighlight onPress={() => navigate('Register')}>
                                <Text style={{fontWeight:'bold', height: 39, marginLeft: 10, paddingTop: 9}}>Register now!</Text>
                            </TouchableHighlight>
                            <Image
                                source={ require('../src/images/reg.png') }
                                style={{height:17,width:12,position:'absolute',top:10,right:15}}
                            />
                        </View>
                    </View>
                    <View style={{flexDirection: 'column',marginTop:10}}>
                        <View style={{flex:1,flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
                            <Text style={{color:'#000',paddingTop:7,textAlign:'center',alignItems: 'center'}}> Or Login Using  </Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row',marginTop:10,paddingLeft:15,paddingRight:15}}>
                        <View style={socstylesTw}>
                            <Image
                                source={ require('../src/images/tw.png') }
                            />
                        </View>
                        <View style={socstylesFb}>
                            <Image
                                source={ require('../src/images/fb.png') }
                            />
                        </View>
                        <View style={socstylesG}>
                            <Image
                                source={ require('../src/images/g.png') }
                            />
                        </View>
                        <View style={socstylesGLi}>
                            <Image
                                source={ require('../src/images/in.png') }
                            />
                        </View>
                    </View>
                    <View style={{flexDirection: 'row',marginTop:10,paddingLeft:15}}>
                        <View style={{flex:1,flexDirection: 'row',alignItems: 'center'}}>
                            <Image
                                source={ require('../src/images/forbes.webp') }
                                style={{width:35,height:41}}
                            />
                            <Image
                                source={ require('../src/images/gitex.webp') }
                                style={{width:35,height:41,marginLeft:15}}
                            />
                            <Image
                                source={ require('../src/images/uxbert.webp') }
                                style={{width:35,height:41,marginLeft:15}}
                            />
                        </View>
                        <View style={{flex:1,flexDirection: 'column'}}>
                            <View style={{flex:1,flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
                                <Text style={{position:'absolute',right:22}}>
                                    <Text style={{color:'#9b9b9b',fontSize:14}}> MADE WITH  </Text>
                                    <Image
                                        source={ require('../src/images/like.png') }

                                    />
                                    <Text style={{color:'#9b9b9b',fontSize:14}}> IN  </Text>
                                    <Image
                                        source={ require('../src/images/flag.png') }
                                    />
                                </Text>
                            </View>
                            <View style={{flex:1,flexDirection: 'column',alignItems: 'center',justifyContent: 'center'}}>
                                <Text style={{color:'#9b9b9b',position:'absolute',right:15}}> v.1.0  </Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    soclogTw:{
        backgroundColor:'#55acee',
    },
    soclogFb:{
        backgroundColor:'#3b5998',
    },
    soclogG:{
        backgroundColor:'#DD4b39',
    },
    soclogLi:{
        backgroundColor:'#2876B4',
    },
    soclog:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight:5,
        width:76,
        height:48
    },
    regnow:{
        flex:1,
        flexDirection: 'row',
        paddingLeft:14,
        borderColor: '#ccc',
        borderTopWidth:1,
        borderBottomWidth:1,
    },
    lang:{
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingTop:3,
        paddingBottom:3,
        paddingRight:10,
        paddingLeft:10,
    },
    put:{
        paddingLeft:50,
        height: 49,
        borderColor: '#ccc',
        borderWidth: 1,
        borderLeftWidth:0,
    },
    putimgicon:{
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
    loginbut:{
        height: 35,
        backgroundColor:'#37b34a',
    }
});