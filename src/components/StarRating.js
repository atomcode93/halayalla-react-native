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

export default class StarRating extends Component<{}> {
    constructor(){
        super()
    }
    render() {
        const stars = [];
        for (let i = 1; i <= 5; i++){
            stars.push(
                this.props.stars>=i?<IonIcon key={i} name='ios-star' color="#ffd119" size={20}/>:<IonIcon key={i} name='ios-star-outline' color="#ffd119" size={20} />
            )
        }
        return (
            <View style={styles.container}>
                {stars}
                <Text style={{color: 'white', fontSize: 16, marginTop: 3}}>(0 </Text>
                <FAIcon name='user' color="white" size={20} />
                <Text style={{color: 'white', fontSize: 16, marginTop: 3}}>)</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 10
    }
});