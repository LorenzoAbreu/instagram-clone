import React from 'react'
import { View, Text, Image } from 'react-native'
import style from './style'

export default function Biography(props) {
    return (
        <View style={style.wrapper}>
            <View style={style.bioContent}>
                <Text style={style.name}>{props.name}</Text>
                <Text style={style.bio}>{props.bio}</Text>
            </View>
        </View>
    )
}
