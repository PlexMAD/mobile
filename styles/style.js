import { StyleSheet } from 'react-native';


export const mainStyle = StyleSheet.create({
    main: {
        flex: 1,
    },
    PhotoItem: {
        flex: 1,
        flexDirection: 'row',
    },
    MusicItem: {
        flex: 1,
        flexDirection: 'row',
    },
    menuItem: {
        borderBlockColor: 'red',
        borderRadius: 2,
        backgroundColor: 'grey',
        width: 150,
        paddingVertical: 30,
        borderRadius: 30,
        fontSize: 5,
        elevation: 10,
    },
    mainMenu: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 10,
    },
    title: {
        fontFamily: 'Montserrat',
        fontSize: 18,
        textAlign: 'center'
    }
})