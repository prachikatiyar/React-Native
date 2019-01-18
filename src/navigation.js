import {createStackNavigator} from 'react-navigation';
import Launch from './screen/launch';

const Navigator = createStackNavigator({
    Launch: {screen: Launch},
});

export default Navigator;
