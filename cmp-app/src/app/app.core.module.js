import angular from 'angular';

import 'angular-animate';
import 'angular-cookies';
import 'angular-aria';
import 'angular-messages';

const require = [
    'ngCookies',
    'ngAnimate',
    'ngAria',
    'ngMessages'

];

const coreModule = angular.module('app.core', require);


export default coreModule;
