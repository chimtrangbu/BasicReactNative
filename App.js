/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Image, Text, View, ScrollView, Linking, TouchableOpacity} from 'react-native';

const info = require('./Info');

const CustomButton = (props) => {
    const {text, onPress} = props;
    return (
        <TouchableOpacity style={homeScreen.buttonStyle} onPress={() => onPress()}>
            <Text style={homeScreen.textStyle}>{text}</Text>
        </TouchableOpacity>
    );
};

const MovieList = (props) => {
    const movies = props.movies.map((movie, index) => (
        <View key={index} style={homeScreen.box}>
            <Text style={homeScreen.boxTitle}>{movie.title}</Text>
            <Image source={{uri: movie.image}} style={homeScreen.boxImage}/>
            <View style={homeScreen.boxButton}>
                <CustomButton text="More Info" onPress={() => {
                    Linking.openURL(movie.url);
                }}/>
            </View>
        </View>
    ));
    return <View style={homeScreen.boxeslist}>{movies}</View>
};


export default class App extends Component {
    render() {
        return (
            <ScrollView>
                <Text style={homeScreen.head}>Basic React Native App</Text>
                <Text style={homeScreen.tip}>Top Ten Movies of IMDB</Text>
                <MovieList movies={info}/>
            </ScrollView>
        );
    }
}

const homeScreen = StyleSheet.create(
    {
        head: {
            color: '#fff',
            backgroundColor: '#3498db',
            fontSize: 30,
            textAlign: 'center',
            paddingTop: 20,
            paddingBottom: 5,
        },
        tip: {
            fontSize: 20,
            textAlign: 'center',
            paddingTop: 20,
            paddingBottom: 15,
            color: '#000',
        },
        boxeslist: {
            flex: 1,
            padding: 5,
            flexDirection: 'column', // main axis
            justifyContent: 'center', // main axis
            alignItems: 'center', // cross axis
            alignSelf: "stretch",
        },
        box: {
            elevation: 1,
            borderRadius: 2,
            flex: 1,
            flexDirection: 'column',  // main axis
            justifyContent: 'flex-start', // main axis
            alignItems: 'center', // cross axis
            marginLeft: 5,
            marginRight: 5,
            marginBottom: 10,
            width: '100%',
        },
        boxTitle: {
            flex: 1,
            padding: 5,
            borderBottomColor: '#dedede',
            borderBottomWidth: 1,
            width: '100%',
            color: '#000',
            fontSize: 18,
        },
        boxImage: {
            width: '97%',
            height: 320,
            margin: 5,
        },
        boxButton: {
            padding: 5,
            flex: 1,
            borderTopColor: '#dedede',
            borderTopWidth: 1,
            width: '100%',
        },

        textStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#3498db',
        textAlign: 'center'
        },

        buttonStyle: {
            padding: 10,
            backgroundColor: '#fafafa',
            borderRadius: 5,
            borderColor: '#3498db',
            borderWidth: 2,
            marginLeft: 5,
            marginRight: 5,
        },
    });