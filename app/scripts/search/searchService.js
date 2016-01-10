(function() {
    'use strict';

    angular.module('app')
        .service('searchService', searchService);

    searchService.$inject = ['$http', '$log', 'esFactory'];

    function searchService($http, $log, esFactory) {
        var self = this;
        var client = esFactory({
            host: 'search.consul.service:9200',
            apiVersion: '1.2',
            log: 'trace'
        });
        self.search = search;
        self.state = state;
        return self;

        function state() {
            return client.cluster.state({
                    metric: [
                        'cluster_name',
                        'nodes',
                        'master_node',
                        'version'
                    ]
                })
                .then(stateComplete)
                .catch(stateFailed);

            function stateComplete(response) {
                return response.data
            }

            function stateFailed(err) {
                // if the err is a NoConnections error, then the client was not able to
                // connect to elasticsearch. In that case, create a more detailed error message
                $log.error(err);
                if (err instanceof esFactory.errors.NoConnections) {
                    $log.error('Unable to connect to elasticsearch');
                }
            }
        }

        function search(query) {
            return client.msearch({
                    body: [
                        // query_string query, on index/mytype
                        {
                            _index: 'default-2016-01-09',
                            _type: 'LogEvent'
                        }, {
                            query: {
                                query_string: {
                                    query: '"test"'
                                }
                            }
                        }
                    ]
                })
                .then(searchComplete)
                .catch(searchFailed);

            function searchComplete(response) {
                return response.data;
            }

            function searchFailed(error) {
                $log.error('XHR Failed for search.' + error.data);
            }
        }
    }
})();
