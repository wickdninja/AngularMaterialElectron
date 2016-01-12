(function() {
    'use strict';
    var _templateBase = './modules';
   
    angular.module('app')
        .directive('demoWidget', demoWidget);

    demoWidget.$inject = [];

    function demoWidget() {
        return {
            restrict: 'E',
            template: '<h1>DEMO TITLE DIRECTIVE</h1>',
        };
    }
})();