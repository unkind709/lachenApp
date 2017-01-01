(function() {
    'use strict';

    angular
        .module('lachenApp')
        .directive('lachenNavbar', lachenNavbar);

    /** @ngInject */
    function lachenNavbar() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/navbar/navbar.html',
            scope: {
                creationDate: '='
            },
            controller: NavbarController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function NavbarController(moment) {
            initNavbar();
            initNavbarMenuActive();
            var vm = this;

            // "vm.creationDate" is available by directive option "bindToController: true"
            vm.relativeDate = moment(vm.creationDate).fromNow();
        }

        function initNavbar() {

            angular.element('.navbar-toggle').on('click', function() {
                angular.element(this).toggleClass('open');
                angular.element('#navigation').slideToggle(400);
            });

            angular.element('.navigation-menu>li').slice(-1).addClass('last-elements');

            angular.element('.navigation-menu li.has-submenu a[href="#"]').on('click', function(e) {
                if (angular.element(window).width() < 992) {
                    e.preventDefault();
                    angular.element(this).parent('li').toggleClass('open').find('.submenu:first').toggleClass('open');
                }
            });
        }

        // === following js will activate the menu in left side bar based on url ====
        function initNavbarMenuActive($window) {
            angular.element(".navigation-menu a").each(function() {
                if (this.href == $window.location.href) {
                    angular.element(this).parent().addClass("active"); // add active to li of the current link
                    angular.element(this).parent().parent().parent().addClass("active"); // add active class to an anchor
                    angular.element(this).parent().parent().parent().parent().parent().addClass("active"); // add active class to an anchor
                }
            });
        }
    }

})();