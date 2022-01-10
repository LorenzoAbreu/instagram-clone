import React from 'react'
import { View, Text } from 'react-native'
import style from './style'

export default function Header(props) {
    return (
        <View style={style.wrapper}>
            <Text style={style.headerUsername}>{props.username}</Text>
        </View>
    )
}
