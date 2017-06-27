(function() {
    'use strict';

    angular
        .module('lachenApp')
        .controller('DetailController', DetailController);

    /** @ngInject */
    function DetailController(moment, $log, $http, $rootScope) {
        var vm = this;
    }
})();