import { createDrawerNavigator } from '@react-navigation/drawer';

import { Image } from 'react-native';
import logo from '../../assets/ze.png'

import CustomDrawer from '../components/customDrawer';
import Tabi from './tab';

const Drawer = createDrawerNavigator();



export const MyDrawer= ()=>{
    return(
        <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
         screenOptions={{
            headerStyle:{ backgroundColor: 'red'},
            headerTintColor: '#fff',
            headerRight: () => (
               <Image source={logo} 
               resizeMode="cover"
               style={{
                width: 40,
                height: 40,
                marginRight: 25,
              }}
               />
             ),
         }}
        >
        <Drawer.Screen name="Overview" component={Tabi} options={{
          title:'Overview'
        }}/>
        <Drawer.Screen name="Transfer" component={Tabi} options={{
          title:'Transfer'
        }} />
        <Drawer.Screen name="Airtime" component={Tabi} options={{
          title:'Airtime'
        }}/>
      </Drawer.Navigator>
    )
  }