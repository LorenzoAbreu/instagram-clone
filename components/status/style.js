import { StyleSheet } from 'react-native';

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
    }
})

export default style;