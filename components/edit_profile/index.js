import React, { useState } from 'react'
import { Pressable, TextInput, View, Alert, Modal, Text, Image, TouchableOpacity } from 'react-native'
import style from './style'

export default function EditProfile() {

    const [modalVisible, setModalVisible] = useState(false);
    const logo = require('../status/profile.jpg');

    return (
        <View style={style.wrapper}>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={style.modal}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={() => {
                        setModalVisible(false);
                    }}><Text style={{fontSize: 25, paddingLeft: 10, paddingTop: 5}}>X</Text></TouchableOpacity>
                    <Text style={{paddingTop: 8, paddingLeft: 20, fontWeight: 'bold', fontSize: 20}}>
                        Editar perfil
                    </Text>
                </View>

                <View style={style.modalImage}>
                    <View style={style.profileImage}>
                        <Image style={style.image} source={logo} />
                    </View>
                    <Text style={{color: '#4597d6', fontSize: 18, marginTop: 5}}>
                        Alterar foto do perfil
                    </Text>
                </View>

                <View style={style.form}>
                <View style={style.input}>
                        <Text style={{color: '#737373'}}>Nome</Text>
                        <TextInput value='Saham Amon' autoCorrect={false} style={style.inputText} />
                        <View style={style.bar}></View>
                    </View>

                    <View style={style.input}>
                        <Text style={{color: '#737373'}}>Nome de usuário</Text>
                        <TextInput value='saham_amon' autoCorrect={false} style={style.inputText} />
                        <View style={style.bar}></View>
                    </View>

                    <View style={style.input}>
                        <Text style={{color: '#737373'}}>Site</Text>
                        <TextInput autoCorrect={false} style={style.inputText} />
                        <View style={style.bar}></View>
                    </View>

                    <View style={style.input}>
                        <Text style={{color: '#737373'}}>Bio</Text>
                        <TextInput value='Pagão 🍃
Vegetariano 🐄
Câncer ♋
Programador 💻
Florianópolis 🏞' autoCorrect={false} style={style.inputText} />
                        <View style={style.bar}></View>
                    </View>

                </View>

                    <View style={style.customButtonWrapper}>
                        <View style={style.customButton}>
                        <View style={style.bar2}></View>
                        <Text style={style.customButtonText}>
                            Mudar para conta profissional
                        </Text>
                        <View style={style.bar2}></View>
                        </View>

                        <View style={style.customButton}>
                        <View style={style.bar2}></View>
                        <Text style={style.customButtonText}>
                            Configurações de informações pessoais
                        </Text>
                        <View style={style.bar2}></View>
                        </View>
                    </View>

            </View>

            </Modal>

            <View style={style.fixer}>
                <TouchableOpacity style={style.button} onPress={() => {
                    setModalVisible(true)
                }}>
                    <Text style={style.buttonText}>
                        Editar Perfil
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
