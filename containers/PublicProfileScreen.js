import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class PublicProfileScreen extends Component {
    render() {
        return (
            <View>
                <Text>PublicProfileScreen</Text>
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
)(PublicProfileScreen);
