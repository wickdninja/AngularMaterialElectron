(function() {
    'use strict';

    var _templateBase = './scripts';

    angular.module('app', [
            'ngRoute',
            'ngMaterial',
            'ngAnimate',
            'elasticsearch'
        ])
        .config(config);

    config.$inject = ['$routeProvider', '$mdThemingProvider'];

    function config($routeProvider, $mdThemingProvider) {

        $mdThemingProvider.theme('default')
            .primaryPalette('light-blue')
            .accentPalette('orange');

        $routeProvider.when('/', {
            templateUrl: _templateBase + '/search/search.html',
            controller: 'SearchController',
            controllerAs: 'vm'
        });
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }

})();
