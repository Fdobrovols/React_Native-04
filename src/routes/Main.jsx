import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from '../screens/RegistrationScreen';
import LoginScreen from '../screens/LoginScreen';
import CommentsScreen from '../screens/CommentsScreen';
import HomeRoutes from './Home';
import MapScreen from '../screens/MapScreen';
import CreateHeader from '../Components/CreateHeader';

const MainStack = createStackNavigator();

const MainRoutes = () => (
    <MainStack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen name="Home" component={HomeRoutes} />
        <MainStack.Screen
            name="Comments "
            component={CommentsScreen}
            options={{ title: 'Коментарі', ...CommentsScreenHeaderOption }}
        />
        <MainStack.Screen
            name="Map "
            component={MapScreen}
            options={{ title: 'Мапа', ...mapScreenHeaderOption }}
        />
    </MainStack.Navigator>
);

const CommentsScreenHeaderOption =  {
    headerShown: true,
    header: ({ navigation, route, options }) => (
        <CreateHeader navigation={navigation} route={route} options={options} to={'User'} />
    ),
};

const mapScreenHeaderOption = {
    headerShown: true,
    header: ({ navigation, route, options }) => (
        <CreateHeader navigation={navigation} route={route} options={options} to={'User'} />
    ),
};

export default MainRoutes;
