(function() {
    'use strict';

    angular
        .module('lachenApp')
        .directive('lachenHome', lachenHome);

    /** @ngInject */
    function lachenHome() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/home/home.html',
            controller: HomeController,
            controllerAs: 'home',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function HomeController(moment) {

            var vm = this;
        }

    }

})();