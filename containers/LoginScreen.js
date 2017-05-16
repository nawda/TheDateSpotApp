import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

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
            <View>
                <Text>LoginScreen</Text>
                <Button onPress={() => this.login()}>
                    <Text>Login</Text>
                </Button>
            </View>
        )
    }
}

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
