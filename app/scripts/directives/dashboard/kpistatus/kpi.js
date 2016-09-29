'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
    .directive('kpi', function() {
        return {
            templateUrl: 'scripts/directives/dashboard/kpistatus/kpi.html',
            restrict: 'E',
            replace: true,
            link: function(scope, iElement, iAttrs) {

            },
            scope: {
                'model': '=',
            }

        }
    });