import React , { Component } from 'react';
import { 
    View, 
    Text,
    SafeAreaView,
    TextInput,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './HomeStyleSheet';
import { TouchableOpacity } from 'react-native-gesture-handler';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: '',
            countryData: null,
        }
    }

    onPressSubmit = async() => {
        try {
            let response = await fetch(
              `https://restcountries.eu/rest/v2/name/${this.state.country}`
            );
            let json = await response.json();
            this.setState({ countryData: json }, () => {
                if(json.status === 404) {
                    alert(json.message);
                    return;
                }

                this.props.navigation.navigate('CountryList', { countryList: this.state.countryData })
            })
          } catch (error) {
          }
    }
    
    renderInputForm = () => {
        return (
            <View>
                <Text style={styles.countryName}>Please Enter Country Name</Text>
                <Animatable.View useNativeDriver animation="bounceIn" duraton="1500">
                <TextInput {...this.props}
                    style={styles.inputStyle}
                    placeholder={'Enter Country'}
                    value={this.state.country}
                    onChangeText={(value) => this.setState({ country: value })}
                    autoCapitalize={false}
                />
                </Animatable.View>
                <Animatable.View useNativeDriver animation="fadeInUpBig" duraton="1500">
                <TouchableOpacity disabled={this.state.country.trim().length === 0} onPress={() => this.onPressSubmit()} style={[styles.submitButton, { backgroundColor: this.state.country.trim().length === 0 ? 'grey' : 'green'}]}>
                    <Text style={[styles.submitText, { color: this.state.country.trim().length === 0 ? '#000000' : '#ffffff'}]}>SUBMIT</Text>
                </TouchableOpacity>
                </Animatable.View>
            </View>
        )
    }
    
    render() {
        return (
            <SafeAreaView style={[styles.container]}>
                    <View style={styles.container}>
                        {this.renderInputForm()}
                    </View>
            </SafeAreaView>
        );
    }
};

export default HomePage;

