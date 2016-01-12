(function() {
    'use strict';

    var _templateBase = './modules';
    var _iconBase = '../bower_components/material-design-icons/';
    var _svgBase = '/svg/production/'
    angular.module('app').config(config);

    config.$inject = ['$routeProvider', '$logProvider', '$mdThemingProvider', '$mdIconProvider'];

    function config($routeProvider, $logProvider, $mdThemingProvider, $mdIconProvider) {

        $mdThemingProvider.theme('default')
            .primaryPalette('light-blue')
            .accentPalette('orange');

        //-------------------------------------------------------------------- ICONS
        // Register icon IDs with sources. Future $mdIcon( <id> ) lookups
        // will load by url and retrieve the data via the $http and $templateCache
        $mdIconProvider
            .icon('menu', _iconBase + 'navigation' + _svgBase + 'ic_menu_48px.svg', 48)
            .icon('settings', _iconBase + 'action' + _svgBase + 'ic_settings_48px.svg', 48)
            .icon('search', _iconBase + 'action' + _svgBase + 'ic_search_48px.svg', 48)
            .icon('info', _iconBase + 'action' + _svgBase + 'ic_info_48px.svg', 48)
            ;

        //allow $log.debug for testing.
        //disable in production
        $logProvider.debugEnabled(true)
        $routeProvider.when('/', {
            templateUrl: _templateBase + '/search/layout.html',
            controller: 'SearchController',
            controllerAs: '_search'
        });
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }
})();
