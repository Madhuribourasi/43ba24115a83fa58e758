import { StyleSheet, Dimensions, Platform } from 'react-native';
import scale , {verticalScale} from '../../utils/Scale';
const { height, width } = Dimensions.get('window');


export default StyleSheet.create({

    container: {
        flex: 1,
    },

    inputFormHeader: {
        flex: 1,
        alignItems: 'center',
        marginTop: verticalScale(20),
    },

    submitButton: {
        marginTop: verticalScale(40),
        width: scale(200),
        height: scale(50),
        borderRadius: scale(8),
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center'
    },

    submitText: {
        fontSize: scale(15),
        fontWeight: 'bold',
        textAlign: 'center',
    },

    formText: {
        fontSize: scale(25),
        fontWeight: 'bold',
    },

    fieldValue1: {
        fontSize: scale(20),
        color: 'green',
        fontWeight: 'bold',
        marginTop: verticalScale(10),
    },

    fieldValue2: {
        fontSize: scale(20),
        color: 'grey',
        fontWeight: 'bold',
        marginTop: verticalScale(10),
    },

    fieldValue3: {
        fontSize: scale(20),
        color: 'red',
        fontWeight: 'bold',
        marginTop: verticalScale(10),
    },

    fieldValue4: {
        fontSize: scale(20),
        color: '#382626',
        fontWeight: 'bold',
        marginTop: verticalScale(10),
    },

    fieldValue5: {
        fontSize: scale(20),
        color: '#382626',
        fontWeight: 'bold',
        marginTop: verticalScale(10),
    },

    flag: {
        width: scale(300),
        height: scale(200),
        borderWidth: scale(2),
        borderRadius: scale(500),
        overflow: 'hidden'
    },

    weatherData: {
        borderWidth: scale(1),
        borderRadius: scale(10),
        width: scale(300),
        height: scale(105),
        marginTop: verticalScale(50),
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: scale(-15),
    },

    imageIcon: {
        marginTop: verticalScale(30),
        width: scale(50),
        height: scale(50),
        marginRight: scale(40)
    }
});
