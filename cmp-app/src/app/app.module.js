import angular from 'angular';

// angular modules
import AppSettings          from './app.settings';
import appConfig            from './app.config';
import appInitHandler       from './app.init.handler';

import './app.core.module';
import './app.lib.module';

import './app.template.module';
import './util';

/* ================== Feature ================== */
import './home';
import './companyinfo';
/* ============================================= */

// create and bootstrap application
const requires = [
    'app.core',
    'app.lib',

    'app.util',
    'app.template',

    'app.home',
    'app.companyinfo',


];

// mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('AppSettings', AppSettings);

angular.module('app').config(appConfig);

angular.module('app').run(appInitHandler);

angular.bootstrap(document, ['app'], {
    strictDi: true
});
