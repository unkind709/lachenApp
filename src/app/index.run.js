(function() {
  'use strict';

  angular
    .module('lachenApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
