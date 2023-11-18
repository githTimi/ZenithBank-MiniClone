import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const RH = (percentage) => {
    return (percentage / 100) * screenHeight; 
    };
 

export const RW = (percentage) => {
    return (percentage / 100) * screenWidth;
  };

