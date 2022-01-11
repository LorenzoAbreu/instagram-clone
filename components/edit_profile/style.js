import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    wrapper:{
        position: 'absolute',
        top: 0,
        marginTop: 300,
        width: '100%',
    },
    fixer:{
        marginLeft: 25,
        marginRight: 25,
        flexDirection: 'row'
    },
    button:{
        // backgroundColor: '#f5f5f5',
        borderColor: '#f0f0f0',
        borderWidth: 2,
        width: '100%',
        height: 32,
        borderRadius: 5
    },
    buttonText:{
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 2.5
    },
    modal:{
        backgroundColor: 'white',
        height: '100%',
    },
    image:{
        borderRadius: 50,
        height: 90,
        width: 90
    },
    modalImage:{
        width: '100%',
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
    },
    form:{
        // backgroundColor: 'black',
        position: 'absolute',
        marginTop: 200,
        height: '50%',
        width: '100%'
    },
    input:{
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15
    },
    bar:{
        backgroundColor: '#b3b3b3',
        width: '100%',
        height: 1.2
    },
    inputText:{
        color: 'black',
        fontSize: 18
    },
    customButtonWrapper:{
        position: 'absolute',
        // backgroundColor: 'black',
        top: 0,
        marginTop: 460,
        width: '100%',
    },
    customButton:{
        marginTop: 20,
        width: '100%',
    },
    customButtonText:{
        color: '#4597d6',
        paddingTop: 13,
        paddingBottom: 13,
        paddingLeft: 20,
    },
    bar2:{
        width: '100%',
        height: 1.2,
        backgroundColor: '#f5f5f5',
    },
    icon:{
        paddingLeft: 10
    },
    icon2:{
        right: 0,
        position: 'absolute',
        paddingRight: 10
    },
    topHeader:{
        flexDirection: 'row',
        width: '100%',
    },
    topHeaderText:{
        paddingTop: 3,
        paddingLeft: 15,
        fontWeight: 'bold',
        fontSize: 20
    }
    
})

export default style;