import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    TouchableHighlight,
    Text,
    View
} from 'react-native';

import IonIcon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default class MatchResult extends Component<{}> {
    constructor(){
        super()
        this.state = {
            edit: false,
            match: null,
            win: false
        }
    }

    componentWillMount() {
        let temp = Object.assign({}, this.props.match);
        this.setState({ match: temp });
        if (temp.homeGoals > temp.awayGoals) this.setState({ win: true });
    }
    
    updateResult = () => {
        this.props.updateResult(this.props.index, this.state.match.homeGoals, this.state.match.awayGoals);
        if (this.state.match.homeGoals > this.state.match.awayGoals) {
            this.setState({ win: true });
        }else {
            this.setState({ win: false });
        }
        this.setState({ edit: false });
    }

    increaseGoals = (who) => {
        let temp = this.state.match;
        temp[who] = temp[who] + 1;
        this.setState({ match: temp });
    }

    decreaseGoals = (who) => {
        let temp = this.state.match;
        if (temp[who] === 0) return;
        temp[who] = temp[who] - 1;
        this.setState({ match: temp });
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
                        <View style={[styles.matchResultView, this.state.win? {backgroundColor: '#61D86C'} : null]}>
                            <Text style={{color: 'white', fontSize: 14}}>{this.props.match.homeGoals + ' - ' + this.props.match.awayGoals}</Text>
                        </View>
                        { this.props.type!=='display' &&
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

                    <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '30%', height: 60}}>
                        <View style={{justifyContent: 'center'}}>
                            <Text style={{color: '#A0A4A1', fontSize: 24}}>{this.state.match.homeGoals}</Text>
                        </View>
                        <View style={{justifyContent: 'space-between'}}>
                            <TouchableHighlight underlayColor='transparent' onPress={() => this.increaseGoals('homeGoals')}>
                                <FAIcon name='chevron-up' size={18} color='#09A24F' />
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor='transparent' onPress={() => this.decreaseGoals('homeGoals')}>
                                <FAIcon name='chevron-down' size={18} color='#09A24F' />
                            </TouchableHighlight>
                        </View>
                    </View>

                    <View style={{justifyContent: 'center'}}>
                        <TouchableHighlight underlayColor='transparent' onPress={this.updateResult}>
                            <Text style={{color: '#09A24F', fontSize: 16}}>SAVE</Text>
                        </TouchableHighlight>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '30%', height: 60}}>
                        <View style={{justifyContent: 'center'}}>
                            <Text style={{color: '#A0A4A1', fontSize: 24}}>{this.state.match.awayGoals}</Text>
                        </View>
                        <View style={{justifyContent: 'space-between'}}>
                            <TouchableHighlight underlayColor='transparent' onPress={() => this.increaseGoals('awayGoals')}>
                                <FAIcon name='chevron-up' size={18} color='#09A24F' />
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor='transparent' onPress={() => this.decreaseGoals('awayGoals')}>
                                <FAIcon name='chevron-down' size={18} color='#09A24F' />
                            </TouchableHighlight>
                        </View>
                    </View>

                </View>
                }

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
    matchResultView: {
        backgroundColor: '#F42F3D',
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 7
    },
    editButton: {
        backgroundColor: '#09A24F',
        paddingLeft: 7,
        paddingRight: 7,
        borderRadius: 7,
        marginTop: 5
    }
});