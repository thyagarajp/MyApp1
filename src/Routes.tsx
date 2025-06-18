import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetail from './screens/ProductDetail';
import Products from './screens/Products';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Settings from './screens/Settings';
import Cart from './screens/Cart';

const Tabs = createBottomTabNavigator();
export default function AppNavigator() {
  return (
    <Tabs.Navigator screenOptions={{headerShown: false}}>
      <Tabs.Screen name="Home" component={ProductNavigator}></Tabs.Screen>
      <Tabs.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{title: 'Settings'}}></Tabs.Screen>
    </Tabs.Navigator>
  );
}
const SettingsStack = createNativeStackNavigator();
function SettingsNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={Settings}
        options={{title: 'Settings'}}
      />
    </SettingsStack.Navigator>
  );
}
const Stack = createNativeStackNavigator();
function ProductNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Products"
        component={Products}
        options={{title: 'Product List'}}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{title: 'Product Detail'}}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{title: 'Cart'}}
      />
    </Stack.Navigator>
  );
}
