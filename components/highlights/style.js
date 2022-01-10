import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    wrapper:{
        // backgroundColor: 'black',
        width: '90%',
        top: 0,
        position: 'absolute',
        marginTop: 350,
        flex: 1,
        flexDirection: 'row'
    },
    highlightImage:{
        backgroundColor: '#DBDBDB',
        borderRadius: 50,
        width: 65,
        height: 65,
        marginRight: 10
    },
    image:{
        width: 60,
        height: 60,
        borderRadius: 50,
        top: 2.5,
        left: 2.5,
    },
    highlightText:{
        fontSize: 13,
        textAlign: 'center',
        marginTop: 5,
    },
    novo:{
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: '#fff',
        top: 2.5,
        left: 2.5,
    },
    novoText:{
        fontSize: 30,
        paddingLeft: 20.2,
        paddingTop: 5,
    },
    novoBorda:{
        backgroundColor: '#DBDBDB',
        borderRadius: 50,
        width: 65,
        height: 65,
        marginRight: 10
    },
})

export default style;