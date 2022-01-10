import React from 'react'
import { View, Text, Image } from 'react-native'
import style from './style'

const logo = require('./profile.jpg');

export default function Status(props) {
    return (
        <View style={style.wrapper}>
            <View style={style.profileImage}>
                <Image style={style.image} source={logo} />
            </View>
            <View style={style.about}>
                <View style={style.information}>
                    <Text style={style.number}>
                        {props.publicacoes}
                    </Text>

                    <Text style={style.text}>
                        Publicações
                    </Text>
                </View>

                <View style={style.information}>
                    <Text style={style.number}>
                        {props.seguidores}
                    </Text>

                    <Text style={style.text}>
                        Seguidores
                    </Text>
                </View>

                <View style={style.information}>
                    <Text style={style.number}>
                        {props.seguindo}
                    </Text>

                    <Text style={style.text}>
                        Seguindo
                    </Text>
                </View>
            </View>
        </View>
    )
}
