/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App'; //importou o App.tsx que é com o padrão typescript, caso queira só com javascripto é só criar o arquivo App.js
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
