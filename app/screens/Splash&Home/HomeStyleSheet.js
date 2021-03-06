import { StyleSheet, Dimensions, Platform } from 'react-native';
import scale , {verticalScale} from '../../utils/Scale';
const { height, width } = Dimensions.get('window');


export default StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center'
    },

    inputStyle: {
        borderWidth: scale(1),
        borderRadius: scale(50),
        width: width - 30,
        height: scale(50),
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: scale(20),
    },

    countryName:{
        fontSize: scale(20),
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'green',
        marginBottom: verticalScale(50)
    },

    submitButton: {
        marginTop: verticalScale(50),
        alignSelf: 'center',
        width: scale(150),
        height: scale(50),
        borderRadius: scale(25),
        justifyContent: 'center',
        alignItems: 'center'
    },

    submitText: {
        fontSize: scale(15),
        fontWeight: 'bold',
    },

    formText: {
        fontSize: scale(25),
        fontWeight: 'bold',
        marginVertical: scale(20),
        marginLeft: scale(5),
        color: '#241f1f'
    },

    search: {
        fontSize: scale(20),
        marginLeft: scale(20),
        marginVertical: scale(10),
        textAlign: 'left',
        fontWeight: 'bold',
    }
    
});
