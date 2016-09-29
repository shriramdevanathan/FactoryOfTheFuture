'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
    .directive('fourm',function($timeout) {
        return {
            templateUrl: 'scripts/directives/dashboard/fourmstatus/fourm.html',
            restrict: 'E',
            replace: true,
            link: function($scope, iElement, iAttrs) {
                $scope.trafficStatus = 0;
                $scope.flagEditShow = false;
                $scope.flagDoneShow = false;
                $scope.dataSource = $scope.datasource;
                $scope.opts = $scope.optionskendo;
                $scope.valueTemplate4M = $scope.valuetemplate;
                $scope.trafficLightDataSource = $scope.trafficsource;
            },
            scope: {
                'idFourm' : '@',
                'datasource':'=',
                'optionskendo' : '=',
                'trafficsource':'=',
                'valuetemplate' : '='
               
            }

        }
    });