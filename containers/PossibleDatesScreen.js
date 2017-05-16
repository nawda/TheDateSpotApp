import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class PossibleDatesScreen extends Component {
    render() {
        return (
            <View>
                <Text>PossibleDatesScreen</Text>
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
)(PossibleDatesScreen);
