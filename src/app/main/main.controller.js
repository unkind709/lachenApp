(function() {
    'use strict';

    angular
        .module('lachenApp')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($timeout, toastr) {
        var vm = this;

        vm.awesomeThings = [];
        vm.classAnimation = '';
        vm.creationDate = 1481776028474;
        vm.showToastr = showToastr;

        function showToastr() {
            toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
            toastr.success('Have fun storming the castle!', 'Miracle Max Says');
            vm.classAnimation = '';
        }
    }
})();