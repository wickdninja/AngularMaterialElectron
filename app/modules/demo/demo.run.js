(function() {
    'use strict';
    var _templateBase = './modules';

    angular.module('app')
        .run(run);

    run.$inject = ['$http', '$templateCache'];

    function run($http, $templateCache) {
        //TODO set up caching

        // var urls = [
        //     // //icons
        //     // './Content/icons/ic_menu_48px.svg'
        // ];
        // // Pre-fetch icons and html by URL and cache in the $templateCache...
        // // subsequent $http calls will look there first.
        // angular.forEach(urls, function(url) {
        //     $http.get(url, {
        //         cache: $templateCache
        //     });
        // });
    }
}());
