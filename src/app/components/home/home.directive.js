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
        function HomeController(moment, $log) {
            var vm = this;
            vm.articles = [{
                title: "TEST1",
                body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                angularjs: true,
                html5: false,
                css: false
            }, {
                title: "TEST2",
                body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                angularjs: false,
                html5: true,
                css: true
            }, {
                title: "TEST3",
                body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                angularjs: true,
                html5: false,
                css: true
            }, {
                title: "TEST4",
                body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                angularjs: true,
                html5: true,
                css: false
            }, {
                title: "TEST5",
                body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                angularjs: false,
                html5: true,
                css: false
            }, {
                title: "TEST6",
                body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                angularjs: true,
                html5: true,
                css: true
            }];
            $log.debug(vm.articles);
            vm.currentPage = 1;
            vm.pageSize = 1; // 21 for 1 Page
            vm.totalRecord = vm.articles.length;
        }

    }

})();