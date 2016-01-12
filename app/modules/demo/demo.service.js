(function() {
    'use strict';

    angular.module('app')
        .service('demoService', demoService);

    demoService.$inject = ['$http', '$log'];

    function demoService($http, $log) {
        var self = this;
        self.getData = getData;
        return self;

        function getData(){
          return $http.get('https://api.github.com/users/wickdninja/repos')
          .then(getDataComplete)
          .catch(getDataFail);

          function getDataComplete(response) {
                $log.info(response);
                return response.data;
            }

            function getDataFail(err) {
              $log.error('XHR Failed for getData.' + error.data);
              return error.data;
            }
        }
    }
})();
