(function () {
    'use strict';

    angular
        .module('testApp')
        .directive('testFooter', testFooter);

    /** @ngInject */
    function testFooter() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/footer/footer.html',
            controller: FooterController,
            controllerAs: 'footer',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function FooterController($log) {
            var vm = this;
        }

    }

})();