import React, { Component } from 'react';
import {
    View,  
    Text,
    SafeAreaView,   
    FlatList,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import COLOR_CONST from '../../theme/ColorConstants';
import styles from './ListStyleSheet';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SvgUri } from 'react-native-svg';

class CountryListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryList: this.props.route.params.countryList
        }
    }

    onPressCountry = (item) => {
        this.props.navigation.navigate('CountryInformation', { countryDetail: item })
    }

    renderCountryCell = (item, index) => {
        return (
            <Animatable.View useNativeDriver animation="bounceInDown" duraton="1500">
                <TouchableOpacity onPress={() => this.onPressCountry(item)} style={styles.countryListCell}>
                    <View style={styles.leftView}>
                        <Text style={styles.fieldValue1}>Name: {item.name}</Text>
                        <Text style={styles.fieldValue2}>Capital: {item.capital}</Text>
                        <Text style={styles.fieldValue3}>Population: {item.population}</Text>
                        <Text style={styles.fieldValue4}>Lating: {item.latlng}</Text>
                    </View>
                    <SvgUri
                        width="15%"
                        height="35%"
                        uri={item.flag}
                    />
                </TouchableOpacity>
            </Animatable.View>
        )
    }

    renderCountryList = () => {
        return (
            <View style={styles.countryListContainer}>
                <FlatList
                    data={this.state.countryList}
                    renderItem={({ item, index }) => this.renderCountryCell(item, index)}
                    keyExtractor={(item) => item.id}
                    extraData={this.state}
                />
            </View>
        )
    }

    render() {
        return (
            <SafeAreaView style={[styles.container]}>
                <View style={styles.container}>
                    {this.renderCountryList()}
                </View>
            </SafeAreaView>
        );
    }
};

export default CountryListPage;

