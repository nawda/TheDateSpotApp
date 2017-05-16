import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

class SplashScreen extends Component {
    componentWillMount () {
        setTimeout(this.props.openApp, 500);
    }

    render() {
        return (
            <View>
                <Text>SplashScreen</Text>
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
        openApp: () => dispatch(NavigationActions.navigate({ routeName: 'Login' }))
    };
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(SplashScreen);
