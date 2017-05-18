import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button } from 'native-base';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import logo from '../resources/datespot.jpg';


class LoginScreen extends Component {
    login = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'PrivateProfile'})
            ]
        })    
        this.props.navigation.dispatch(resetAction);
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={logo}></Image>  
                <Button>
                   <Text> Login </Text>
                </Button>
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
    };
}
export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(LoginScreen);