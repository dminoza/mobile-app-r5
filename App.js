import Login from './screens/Authentication/Login';
import Dashboard from './screens/Dashboard';
import Registration from './screens/Authentication/Registration';
import LainNgaScreen from './screens/LainNgaScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// store ug provider dinhi
import store from './plugins/store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Registration} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="LainNgaScreen" component={LainNgaScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
