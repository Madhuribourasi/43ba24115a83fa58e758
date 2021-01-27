import React , { useEffect } from 'react';
import { 
    View,
    Text, 
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './SplashStyleSheet';

const SplashPage = ({navigation}) => {
    useEffect(() => {
        setTimeout( async() => {
           navigation.replace('Home')
        }, 1500);
      }, []);  

    return (
        <View style={styles.container}>
            <Animatable.View useNativeDriver animation="flash" duraton="1500">
                <Text style={styles.testStyle}>My Country Project</Text>
            </Animatable.View>
        </View>
    );
};

export default SplashPage;

