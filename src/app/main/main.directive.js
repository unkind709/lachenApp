(function () {
    'use strict';

    angular
        .module('testApp')
        .directive('ngPdfObject', function () {
            return {
                replace: 'true',
                scope: {
                    url: "@url",
                    height: "@height",
                    width: "@width"
                },
                template: '<div id="pdf"></div>',
                link: function (scope, elem, attrs) {
                    var success = new PDFObject({ url: scope.url, width: scope.width, height: scope.height }).embed("pdf");
                }
            }
        })
})();