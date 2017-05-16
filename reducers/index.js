import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import acceptTermsReducer from './acceptTermsReducer';
import currentUserReducer from './currentUserReducer';
import possibleDatesReducer from './possibleDatesReducer';
import matchScreenReducer from './matchScreenReducer';
import publicProfileScreenReducer from './publicProfileScreenReducer';
import messagingScreenReducer from './messagingScreenReducer';
import navReducer from './navReducer';

const AppReducer = combineReducers({
  acceptTerms: acceptTermsReducer,
  currentUser: currentUserReducer,
  possibleDates: possibleDatesReducer,
  matchScreen: matchScreenReducer,
  publicProfileScreen: publicProfileScreenReducer,
  messagingScreen: messagingScreenReducer,
  nav: navReducer
});

export default AppReducer;