import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import SplashScreen from '../containers/SplashScreen';
import LoginScreen from '../containers/LoginScreen';
import TermsAndConditionsScreen from '../containers/TermsAndConditionsScreen';
import PrivateProfileScreen from '../containers/PrivateProfileScreen';
import PossibleDatesScreen from '../containers/PossibleDatesScreen';
import MatchScreen from '../containers/MatchScreen';
import PublicProfileScreen from '../containers/PublicProfileScreen';
import MessagingScreen from '../containers/MessagingScreen';

export const AppNavigator = StackNavigator({
  Splash: { screen: SplashScreen, navigationOptions: { header: null } },
  Login: { screen: LoginScreen, navigationOptions: { header: null } },
  TermsAndConditions: { screen: TermsAndConditionsScreen },
  PrivateProfile: { screen: PrivateProfileScreen },
  PossibleDates: { screen: PossibleDatesScreen},
  Match: { screen: MatchScreen},
  PublicProfile: { screen: PublicProfileScreen},
  Messaging: { screen: MessagingScreen},
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);