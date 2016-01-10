(function () {
    'use strict';
    angular.module('app')
        .controller('SearchController', ['searchService', '$q', '$mdDialog', SearchController]);
    
    function SearchController(searchService, $q, $mdDialog) {
        var self = this;
        
        self.selected = null;
        self.state = null;
        self.events = [];
        self.selectedIndex = 0;
        self.filterText = null;
        self.selectEvent = selectEvent;
        self.filter = filterEvent;
        
        activate();
        function activate(){
            getState()
            .then(function(){
                $log.debug('state loaded');
            });
        }
        
        //----------------------
        // Internal functions 
        //----------------------
        
        function selectEvent(logEvent, index) {
            self.selected = angular.isNumber(logEvent) ? self.events[logEvent] : logEvent;
            self.selectedIndex = angular.isNumber(logEvent) ? logEvent: index;
        }
        
        function getState() {
           return searchService.state()
            .then(function (state) {
                self.state = state;
            });
        }
        
        function filterEvent() {
            if (self.filterText == null || self.filterText == "") {
                // getAllEvents();
            }
            else {
                // searchService.getByName(self.filterText).then(function (customers) {
                //     self.events = [].concat(customers);
                //     self.selected = customers[0];
                // });
            }
        }
    }

})();