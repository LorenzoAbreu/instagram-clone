import React from 'react'
import { View, Text, Image } from 'react-native'
import style from './style'

const foto1 = require('./highlight.jpg');
const foto2 = require('./highlight2.jpg');


export default function Highlights(props) {
    return (
        <View style={style.wrapper}>
            <View style={style.highlightImage}>
                <Image style={style.image} source={foto1} />
                <Text style={style.highlightText}>Destaques</Text>
            </View>

            <View style={style.highlightImage}>
                <Image style={style.image} source={foto2} />
                <Text style={style.highlightText}>Destaques 2</Text>
            </View>

            <View style={style.novoBorda}>
                <View style={style.novo}>
                    <Text style={style.novoText}>
                        +
                    </Text>
                </View>
                <Text style={style.highlightText}>Novo</Text>
            </View>
        </View>
    )
}
