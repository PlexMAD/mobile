import { StyleSheet } from 'react-native';


export const mainStyle = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: '#F0F8FF'
    },
    PhotoItem: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        marginBottom: 20,
        borderRadius: 10,
        borderColor: 'green',
        borderWidth: 2,
        width: 150,
    },
    MusicItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        borderColor: 'green',
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
    },
    menuItem: {
        borderRadius: 2,
        width: 150,
        paddingVertical: 30,
        borderRadius: 30,
        fontSize: 5,
        elevation: 10,
        backgroundColor: 'white',
        borderColor: 'green',
        borderWidth: 1,
    },
    mainMenu: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 10,
    },
    title: {
        fontFamily: 'Montserrat',
        fontSize: 18,
        textAlign: 'center',
        color: 'green',
    },
    photoList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        width: '100%'
    },
    photoDesc: {
        textAlign: 'center',
        color: 'green',
        fontFamily: 'Montserrat'
    },
    musicList: {
        paddingHorizontal: 20,
    },
    musicDesc: {
        textAlign: 'center',
        color: 'green',
        fontFamily: 'Montserrat'
    },
    musicButton: {
        backgroundColor: '#F0F8FF'
    }
})