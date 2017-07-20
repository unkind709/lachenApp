(function () {
    'use strict';

    angular
        .module('testApp')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($log, $scope) {
        var vm = this;

        vm.endTime = new Date("July 20, 2017 15:00:00");
        $scope.timerRunning = true;
        
        vm.pdfUrl = 'assets/pdf/dota2.pdf';


    }
})();