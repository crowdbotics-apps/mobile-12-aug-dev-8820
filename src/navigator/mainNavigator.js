import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen09832Navigator from '../features/CopyOfBlankScreen09832/navigator';
import BlankScreen19831Navigator from '../features/BlankScreen19831/navigator';
import BlankScreen09830Navigator from '../features/BlankScreen09830/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen09832: { screen: CopyOfBlankScreen09832Navigator },
BlankScreen19831: { screen: BlankScreen19831Navigator },
BlankScreen09830: { screen: BlankScreen09830Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
