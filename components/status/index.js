import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, Modal, TextInput } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon';
import style from './style'

const logo = require('./profile.jpg');
const fotoStatus = require('./storyFoto.jpg');

export default function Status(props) {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={style.wrapper}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
            >

                <View style={style.story}>
                   <TouchableOpacity style={style.buttonClose} onPress={() => {
                       setModalVisible(false);
                   }}>

                       <View style={style.storyContent}>
                            <View style={style.storyBar}>
                            <View style={style.storyBar1}>
                                <View style={style.storyBar2} />
                            </View>
                        </View>
                           <Text style={style.storyText}>
                                Meu story do InstagramClone
                                😎👍
                           </Text>
                           <View style={style.storyFotoBorda}>
                            <View style={style.storyFotoHeader}><Image style={style.storyFotoHeaderLogo} source={logo} /><Text style={style.nomePerfil} >Saham Amon</Text></View>
                            <Image style={style.storyFoto} source={fotoStatus} />
                            <Text style={style.storyFotoBordaTexto}>
                                <Text style={{fontWeight: 'bold'}}>saham_amon</Text> Foto de um cachorro fofinho
                            </Text>
                           </View>

                       </View>

                   </TouchableOpacity>

                   <View style={style.comentarios}>
                        <TextInput placeholderTextColor='white' style={style.comentariosInput} placeholder='Escreva seu comentário' />
                        <TouchableOpacity style={style.buttonSend}>
                            <Icon name='send' size={25} color='white' />
                        </TouchableOpacity>
                   </View>
                </View>
                
            </Modal>

            <View style={style.profileImage}>
                <TouchableOpacity onPress={() => {
                    setModalVisible(true);
                }}>
                    <Image style={style.image} source={logo} />
                </TouchableOpacity>
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
