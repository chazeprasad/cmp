const bulk = require('bulk-require');


function OnConfig($stateProvider, $mdThemingProvider, $locationProvider, $urlRouterProvider, $compileProvider, $httpProvider) {
    'ngInject';

    if (process.env.NODE_ENV === 'production') {
        $compileProvider.debugInfoEnabled(false);
    }

    $locationProvider.html5Mode({
        enabled    : false,
        requireBase: false
    });


    $urlRouterProvider.otherwise('/companyinfo');

    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = true;

    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

    // delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.common['Accept'] = 'application/json';
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';

    //------------------------------------------//
    var customBlueMap =       $mdThemingProvider.extendPalette('light-blue', {
      'contrastDefaultColor': 'light',
      'contrastDarkColors': ['50'],
      '50': 'ffffff'
    });
    $mdThemingProvider.definePalette('customBlue', customBlueMap);
    $mdThemingProvider.theme('default')
      .primaryPalette('customBlue', {
        'default': '500',
        'hue-1': '50'
      })
      .accentPalette('pink');
    $mdThemingProvider.theme('input', 'default')
          .primaryPalette('grey')


}




export default OnConfig;
