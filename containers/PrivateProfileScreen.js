import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class PrivateProfileScreen extends Component {
    render() {
        return (
            <View>
                <Text>PrivateProfileScreen</Text>
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
)(PrivateProfileScreen);
