(function() {
    'use strict';
    angular.module('app')
        .controller('DemoController', DemoController);
    DemoController.$inject = ['$log', 'demoService'];

    function DemoController($log, demoService) {
        var self = this;
        self.data = null;

        activate();

        function activate() {
            getData().then(activated);
        }

        function getData() {
            return demoService.getData()
                .then(function(data) {
                    self.data = data;
                })
        }

        function activated() {
            $log.debug('controller has been activated');
        }
    }
})();
