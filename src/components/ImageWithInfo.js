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

export default class ImageWithInfo extends Component<{}> {
    constructor(){
        super()
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image source={ this.props.data.url } style={styles.image} />
                </View>
                <View style={styles.infoView}>
                    <Text style={{color: '#4A4A4A', fontSize: 16}}>{this.props.data.name}</Text>
                    <View>
                        <View style={{flexDirection: 'row', marginBottom: 2}}>
                            <FAIcon name='map-marker' size={12} color='#9C9C9C' />
                            <Text style={{color: '#9C9C9C', fontSize:13, marginLeft: 5 }}>{this.props.data.address}</Text>
                        </View>
                        <Text style={{color: '#9C9C9C', fontSize:12 }}>{this.props.data.categories.join(', ')}</Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowOffset: { width: 1, height: 1},
        width: 160,
        height: '90%',
        marginRight: 7,
        borderRadius: 7,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 120,
        resizeMode: 'cover',
    },
    infoView: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: 10,
        paddingTop: 5,
        borderColor: '#E1E1E1',
        borderBottomWidth: 1,
        borderLeftWidth: 1,        
        borderRightWidth: 1,
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
    }
});