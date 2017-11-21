import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    ScrollView,
    Button,
    Alert,
    Text,
    View
} from 'react-native';

import { TabNavigator } from 'react-navigation';
import Second from './Second';
import Groups from './Groups';
import Profile from './Profile';

export const MyApp = TabNavigator({
    Second: {
        screen: Second,
    },
    Groups: {
        screen: Groups,
    },
    Profile: {
        screen: Profile,
    }
}, {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: '#e91e63',
        showIcon:true
    },
});


export default class First extends Component<{}> {

    static navigationOptions = {
        title: 'First Page',
        headerRight: <Button title="Info"
            onPress={()=>Alert.alert('You tapped the button!')}
        />
    };

    _onPressButton() {
        Alert.alert('You tapped the button!')
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>

                <MyApp />
            </View>
        )
    }
}

const styles = StyleSheet.create({

});