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

export default class Group extends Component<{}> {
    constructor(){
        super()
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection: 'column', width: '75%'}}>
                    <Text style={styles.groupName}>{this.props.data.name}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.hyPrivateGroupView}>
                            <Text style={styles.hyPrivateGroupText}>Riyadh</Text>
                        </View>
                        <FAIcon name="heart" color="#9b9b9b" size={12} style={{marginTop: 4, marginRight: 3}} />
                        <Text ellipsizeMode="tail" numberOfLines={1} style={{width: '70%', fontSize: 12, marginTop: 2}}>{this.props.data.likes.join(', ')}</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '25%'}}>
                    <View style={{flexDirection: 'column', justifyContent: 'space-around'}}>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={require('../images/new-female.png')} style={[styles.image, {opacity: 0.3}]}/>
                            <Image source={require('../images/new-male.png')} style={styles.image} />
                        </View>
                        <Text style={{fontSize: 12, color: '#9b9b9b'}}>{this.props.data.members + " members"}</Text>
                    </View>
                    <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                        <IonIcon name="ios-arrow-forward" size={20} color="#9b9b9b" />
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#d0d2d3'
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
    image: {
        width: 16,
        height: 22,
        marginRight: 8
    }
});