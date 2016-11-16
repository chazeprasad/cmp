import angular from 'angular';

import 'angular-ui-router';
import 'angular-base64';
import 'angular-moment';
import 'ngstorage';
import 'angular-material';
import 'angular-material-icons';



const require = [

    'ui.router',
    'base64',
    'angularMoment',
    'ngStorage',
    'ngMaterial',
    'ngMdIcons'

];

const libModule = angular.module('app.lib', require);


export default libModule;
