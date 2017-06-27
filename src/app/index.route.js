(function() {
  'use strict';

  angular
    .module('lachenApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('detail', {
        url: '/detail/:urldetail',
        templateUrl: 'app/components/detail/detail.html',
        controller: 'DetailController',
        controllerAs: 'detail'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
