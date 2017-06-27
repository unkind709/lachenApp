(function () {
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
        function HomeController(moment, $log, $http, $rootScope) {
            var vm = this;
            vm.changePage = function () {
                $http({
                    method: 'POST',
                    url: $rootScope.api + 'post',
                    data: {
                        'currentPage': vm.currentPage,
                        'pageSize': vm.pageSize
                    }
                }).then(function successCallback(response) {
                    vm.articles = response.data;
                    vm.totalRecord = vm.articles.length;
                    console.log(response);
                    console.log(vm.articles.length);
                }, function errorCallback(response) {
                    console.log(response);
                });
            }
            vm.currentPage = 1;
            vm.pageSize = 6;
            vm.changePage();
        }

    }

})();