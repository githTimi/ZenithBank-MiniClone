import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Transfer from '../screens/Transfer'
import Airtime from '../screens/Airtime';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen name="Overview" component={Home} />
    

    </Stack.Navigator>
  );
}
const TransferStack= ()=>{
  return(
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
    >
   
      <Stack.Screen  name="Transfer" component={Transfer} />

    </Stack.Navigator>
  )
}
const AirtimeStack= ()=>{
  return(
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
    >
   
      <Stack.Screen name="Airtime" component={Airtime} />

    </Stack.Navigator>
  )
}

export {MyStack, TransferStack, AirtimeStack}
