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

    inputStyle: {
        borderWidth: scale(1),
        borderColor: 'grey',
        paddingLeft: 20,
        width: width - 20,
        height: scale(50),
        marginTop: verticalScale(50),
    },

    submitButton: {
        marginTop: verticalScale(20),
        width: scale(200),
        height: scale(50),
        borderRadius: scale(25),
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
    },

    submitText: {
        fontSize: scale(20),
        fontWeight: 'bold',
    },

    formText: {
        fontSize: scale(25),
        fontWeight: 'bold',
        marginTop: verticalScale(20),
        marginLeft: scale(20),
    },

    countryListContainer: {
        flex: 1,
    },

    countryListCell: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff95',
        paddingVertical: scale(15),
        borderWidth: scale(0.2),
        borderRadius: scale(10),
        marginTop: verticalScale(15),
        paddingRight: scale(10),
        marginHorizontal: scale(15),
    },

    fieldValue1: {
        fontSize: scale(16),
        color: 'red',
        marginLeft: scale(20),
        marginTop: verticalScale(8),
    },
    fieldValue2: {
        fontSize: scale(16),
        color: 'grey',
        marginLeft: scale(20),
        marginTop: verticalScale(8),
    },
    fieldValue3: {
        fontSize: scale(16),
        color: 'green',
        marginLeft: scale(20),
        marginTop: verticalScale(8),
    },
    fieldValue4: {
        fontSize: scale(16),
        color: 'blue',
        marginLeft: scale(20),
        marginTop: verticalScale(8),
    },
    
    leftView: {
        width: scale(285),
    },
});
