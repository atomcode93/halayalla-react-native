import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';

export default class InterstingGroup extends Component<{}> {
    constructor(){
        super()
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection: 'column'}}>
                    <Text style={styles.groupName}>{this.props.data.name}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.hyPrivateGroupView}>
                            <Text style={styles.hyPrivateGroupText}>Organizer: Is it you we're waiting for?</Text>
                        </View>
                        <FAIcon name="heart" color="#9b9b9b" size={12} style={{marginTop: 4, marginRight: 3}} />
                    </View>
                </View>
                <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 16, color: '#00a14c', marginRight: 10}}>Start</Text>
                        <IonIcon name="ios-arrow-forward" size={20} color="#00a14c" />
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        paddingLeft: 15,
        paddingRight: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#d0d2d3',
        backgroundColor: 'white'
    },
    groupName: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5
    },
    hyPrivateGroupView: {
        borderWidth: 2,
        borderColor: '#fde521',
        padding: 2,
        marginRight: 10
    },
    hyPrivateGroupText: {
        color: '#a99a0d',
        fontSize: 12,
        fontWeight: '600',
        textAlign: 'center',
    },
});