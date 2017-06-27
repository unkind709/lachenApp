(function() {
  'use strict';

  angular
    .module('lachenApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope) {

    $log.debug('runBlock end');
    $rootScope.api = "http://localhost:8250/";
  }

})();
