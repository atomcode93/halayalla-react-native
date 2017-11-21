import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

import {scores} from '../../constants/scores'

export default class GroupTable extends Component<{}> {
    constructor(){
        super()
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.groupName}>
                    <Text style={{color: 'white', fontSize: 16}}>{this.props.data.name}</Text>
                </View>
                <TableHeader />
                {
                    this.props.data.teams.map((teamNo, index) => {
                        return (
                            <View key={index} style={styles.row}>
                                <TableRow data={scores[teamNo - 1]} scores={scores}/>
                            </View>
                        )
                    })
                }
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        marginBottom: 30
    },
    groupName: {
        height: 40,
        backgroundColor: '#2F3831',
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        height: 40,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8'
    }
});