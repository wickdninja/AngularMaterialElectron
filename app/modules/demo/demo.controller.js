(function() {
    'use strict';
    angular.module('app')
        .controller('DemoController', DemoController);
    DemoController.$inject = ['$log', 'demoService', '$mdSidenav'];

    function DemoController($log, demoService, $mdSidenav) {
        var self = this;
        self.data = null;
         self.toggleSideNav = toggleSideNav;
        
        activate();

        function activate() {
            getData().then(activated);
        }
function toggleSideNav(navID) {
            $mdSidenav(navID)
                .toggle()
                .then(function() {
                    $log.debug("toggle " + navID + " is dbone");
                });
        }
        function getData() {
            return demoService.getData()
                .then(function(data) {
                    self.data = data;
                });
        }

        function activated() {
            $log.debug('controller has been activated');
        }
    }
})();
