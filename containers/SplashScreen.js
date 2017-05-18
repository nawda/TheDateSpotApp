import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import logo from '../resources/datespot.jpg';

class SplashScreen extends Component {
    componentWillMount () {
        setTimeout(this.props.openApp, 1200);
    }

    render() {
        return (
                <View style={styles.container}>
                <Image source={logo}></Image>  
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: { 
        backgroundColor: 'white',
        alignItems:"center",
        justifyContent: "center",
        marginTop: 20,
        flex: 1,
    }
})
const mapStateToProps = function(state) {
    return {

    };
}

const mapDispatchToProps = function(dispatch) {
    return {
        openApp: () => dispatch(NavigationActions.navigate({ routeName: 'Login' }))
    };
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(SplashScreen);
