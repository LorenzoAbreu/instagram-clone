import { StyleSheet } from 'react-native';

const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}` || '#b8972e';
};

const style = StyleSheet.create({
    wrapper:{
        // backgroundColor: 'black',
        width: '90%',
        top: 0,
        position: 'absolute',
        marginTop: 80,
        flex: 1,
    },
    profileImage: {
        backgroundColor: '#DBDBDB',
        borderRadius: 50,
        width: 85,
        height: 85,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 50,
        top: 2.5,
        left: 2.5
    },
    about: {
        position: 'absolute',
        right: 0,
        flexDirection: 'row',
        // backgroundColor: 'black',
        width: '70%',
        marginTop: 10,
        height: 80,
        marginRight: 25,
    },
    information: {
        padding: 12
    },
    number: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    story:{
        // backgroundColor: '#b8972e',
        backgroundColor: generateColor(),
        height: '100%'
    },
    storyContent:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    storyBar:{
        width: '100%',
        height: 40,
        borderRadius: 5,
        marginTop: -10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    storyBar1:{
        width: '95%',
        height: 3,
        backgroundColor: 'black',
        borderRadius: 5,
        marginTop: 5,
        backgroundColor: '#ABAEAF',
        position: 'absolute'
    },
    storyBar2:{
        width: '25%',
        height: 3,
        backgroundColor: 'black',
        borderRadius: 5,
        backgroundColor: '#fff',
        position: 'absolute'
    },
    buttonClose:{
        height: '100%',
    },
    storyText:{
        color: '#fff',
        fontSize: 20,
        transform: [
            {
                rotate: '10deg'
            }
        ],
        marginTop: 150
    },
    storyFoto:{
        width: 220,
        height: 200,
        // marginTop: -20
    },
    storyFotoBorda:{
        marginTop: 50,
        backgroundColor: '#fff',
        width: 220,
        height: 280,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    storyFotoBordaTexto:{
        marginLeft: 8,
        width: 220
    },
    storyFotoHeader:{
        flexDirection: 'row'
    },
    storyFotoHeaderLogo:{
        width: 30,
        height: 30,
        marginLeft: -80,
        marginBottom: 3,
        borderRadius: 50
    },
    nomePerfil:{
        paddingTop: 4,
        paddingLeft: 5
    },
    comentarios:{
        // backgroundColor: 'grey',
        width: '100%',
        height: 60,
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row'
    },
    comentariosInput:{
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRadius: 50,
        borderColor: '#ABAEAF',
        padding: 5,
        paddingLeft: 10,
        width: '83%',
        margin: 10,
        color: '#fff'
    },
    buttonSend:{
        paddingTop: 12,
        paddingLeft: 5,
        transform: [
            {
                rotate: '-20deg'
            }
        ]
    }
})

export default style;