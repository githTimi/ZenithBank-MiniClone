import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { MyDrawer} from './src/navigation/drawer';
import {store } from './src/states/store'
import { Provider } from 'react-redux'


export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
               
     
     <MyDrawer />
   
      <StatusBar  style="auto" />
    
    </NavigationContainer>
    </Provider>
  );
}
