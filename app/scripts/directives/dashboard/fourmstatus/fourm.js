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
                $scope.fourMDataGrid = $scope.model;
                $scope.onChangeHandler = function(dataItem) {
                        $scope.fourMDataGrid.refresh();
                }; 
                $scope.onChangeHandler4M = function(idFourm,dataSource) {
                    console.log("on change");
                    $timeout(function() {
                        $scope.onChangeHandler(idFourm);
                        $scope.$parent.$parent.cellStatus[idFourm] = "green";
                        var data = dataSource.data();
                        for (var i in data) {
                            if (data[i].today === "red") {
                                $scope.trafficStatus = 2;
                                $scope.$parent.$parent.cellStatus[idFourm] = "red";
                                break;
                            }
                            if (data[i].today === "yellow") {
                                $scope.trafficStatus = 1;
                                $scope.$parent.$parent.cellStatus[idFourm] = "yellow";
                            }
                        }
                        $scope.$apply();
                        return;
                    });
                }
                $scope.onChangeHandler = function(idFourm) {
                    $scope.fourMDataGrid.refresh();
                    
                };
                

                $scope.dataSource = $scope.datasource;
                $scope.opts = $scope.optionskendo;
                $scope.opts.save = function(){
                    $scope.onChangeHandler4M($scope.idFourm,$scope.dataSource);
                };
                $scope.valueTemplate4M = $scope.valuetemplate;
                $scope.trafficLightDataSource = $scope.trafficsource;


            },
            scope: {
                'idFourm' : '@',
                'datasource':'=',
                'optionskendo' : '=',
                'trafficsource':'=',
                'valuetemplate' : '=',
                'onSaveHandler' : '&',
                'model' : '='
               
            }

        }
    });