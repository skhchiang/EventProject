import { Navigation } from 'react-native-navigation';
import { store } from './src/store';
import { Provider } from 'react-redux';

// import App from './App';
import Start from './src/screens/Start';
import SignUp from './src/screens/SignUp';
import Search from './src/screens/Search';
import Events from './src/screens/Events';
import Profile from './src/screens/Profile';
import Menu from './src/screens/Menu';
import Notification from './src/screens/Notification';
import ViewEvent from './src/screens/ViewEvent';
import CreateEvent from './src/screens/CreateEvent';
import UsersList from './src/screens/ViewEventComponents/UsersList';

// one page no tab ( LandingPage )
Navigation.registerComponent('StartScreen', () => Start, store, Provider);

//drawer
Navigation.registerComponent('MenuScreen', () => Menu, store, Provider);

// inside the app with tab
Navigation.registerComponent('ProfileTabScreen', () => Profile, store, Provider);
Navigation.registerComponent('SearchTabScreen', () => Search, store, Provider);
Navigation.registerComponent('EventsTabScreen', () => Events, store, Provider);
Navigation.registerComponent('NotificationTabScreen', () => Notification, store, Provider);

Navigation.registerComponent('SignUpScreen', () => SignUp, store, Provider);
Navigation.registerComponent('ViewEventScreen', () => ViewEvent, store, Provider);
Navigation.registerComponent('CreateEventScreen', () => CreateEvent, store, Provider);
Navigation.registerComponent('UsersListScreen', () => UsersList, store, Provider);


//TEMP USE, easier access to main screen for testing
//   Navigation.startTabBasedApp({
//   tabs: [
//     {
//       label: 'Search',
//       screen: 'SearchTabScreen', // this is a registered name for a screen
//       icon: require('./src/img/search.png'),
//       selectedIcon: require('./src/img/search.png'), // iOS only
//       title: 'SearchBar',
//       navigatorStyle: { navBarTitleTextCentered: true, navBarHidden: true}
//     },
//     {
//       label: 'Events',
//       screen: 'EventsTabScreen',
//       icon: require('./src/img/Calendar1.png'),
//       selectedIcon: require('./src/img/Calendar1.png'), // iOS only
//       title: 'Events',
//       navigatorStyle: { navBarTitleTextCentered: true }
//     },
//     {
//       label: 'Notification',
//       screen: 'NotificationTabScreen',
//       icon: require('./src/img/notification3.png'),
//       selectedIcon: require('./src/img/notification3.png'), // iOS only
//       title: 'Notification',
//       navigatorStyle: { navBarTitleTextCentered: true }
//     },
//     {
//       label: 'Profile',
//       screen: 'ProfileTabScreen',
//       icon: require('./src/img/profile.png'),
//       selectedIcon: require('./src/img/profile.png'), // iOS only
//       title: 'Profile',
//       navigatorStyle: { navBarTitleTextCentered: true }
//     }
//   ]
// })

// // vvvvv Landing page vvvvv
Navigation.startSingleScreenApp({
  screen: {
    screen: 'StartScreen', // unique ID registered with Navigation.registerScreen
    navigatorStyle: {navBarHidden: true}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
  }
});