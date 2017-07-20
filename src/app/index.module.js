(function () {
  'use strict';

  angular
    .module('testApp', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'toastr', 'pdf', 'timer'])
    .filter('range', function () {
      return function (input, total) {
        total = parseInt(total);

        for (var i = 0; i < total; i++) {
          input.push(i);
        }
        return input;
      };
    })
    .filter('twopos', function () {
      return function (input) {
        if(input < 9) {
          input = "0"+ input.toString();
        }
        return input;
      };
    });
})();
