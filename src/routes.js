import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Dashboard from './screens/Dashboard';
import Detailsmovies from './screens/Detailsmovies';
import Filtermovies from './screens/Filtermovies';

const Routes = createStackNavigator(
  {
    Dashboard,
    Detailsmovies,
    Filtermovies,
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#c0392b',
      headerBackTitleVisible: false,
      headerLeftContainerStyle: {
        marginLeft: 20,
      },

      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        alignSelf: 'center',
      },
      headerTitleAlign: 'center',
    },
  },
);

export default createAppContainer(Routes);
