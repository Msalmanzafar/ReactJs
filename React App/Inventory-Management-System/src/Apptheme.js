import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {
  // cyan700,
  // grey600,
  // pinkA100, pinkA200, pinkA400,
  fullWhite,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
// import spacing from 'material-ui/styles/spacing';

//Custom Theme to change UI at application level
const darkBaseTheme = getMuiTheme({
  palette: {
    // primary1Color: cyan700,
    primary1Color:'#009688',
    // primary2Color: '#01579b',
    // primary3Color: '#01579b',
    accent1Color: '#3e2723',
    // accent2Color: '#01579b',
    accent3Color: '#3f51b5',
    textColor: '#194d48',
    secondaryTextColor: fade(fullWhite, 0.7),
    // alternateTextColor: '#303030',
    alternateTextColor: '#FAFAFA',
    canvasColor: '#FFFFFF',
    // borderColor: '#3f51b5',
    borderColor: fade('#d2bb79', 0.9),
    // disabledColor: fade(fullWhite, 0.3),
    // pickerHeaderColor: fade('#FAFAFA', 0.12),
    // clockCircleColor: fade('#FAFAFA', 0.12),
  },

});

function AppTheme(){
  return getMuiTheme(darkBaseTheme);
  //return CustomTheme;
}


export default AppTheme();