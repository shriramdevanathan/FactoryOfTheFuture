'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
    .controller('MainCtrl', function($scope, $position, $state, $timeout) {
        $scope.removeflag = false;
        $scope.instrumentObjArr = [{
            id: 1,
            instrumentName: "QuantStudio Q3 & Q5",
            comments: "",
            colour: "green",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            id: 2,
            instrumentName: "ViiA 7",
            comments: "",
            colour: "green",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            id: 3,
            instrumentName: "7500 Fast",
            comments: "",
            colour: "green",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            id: 4,
            instrumentName: "ViiA 7",
            comments: "",
            colour: "yellow",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            id: 5,
            instrumentName: "7500 Fast",
            comments: "",
            colour: "green",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            id: 6,
            instrumentName: "Step One & Step One Plus",
            comments: "",
            colour: "green",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            id: 7,
            instrumentName: "QuantStudio Q3 & Q5",
            comments: "",
            colour: "red",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            id: 15,
            instrumentName: "ViiA 7",
            comments: "",
            colour: "green",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            id: 8,
            instrumentName: "7500 Fast",
            comments: "",
            colour: "green",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            id: 9,
            instrumentName: "ViiA 7",
            comments: "",
            colour: "green",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            id: 10,
            instrumentName: "7500 Fast",
            comments: "",
            colour: "green",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            id: 11,
            instrumentName: "Step One & Step One Plus",
            comments: "",
            colour: "green",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            id: 12,
            instrumentName: "ViiA 7",
            comments: "",
            colour: "green",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            id: 13,
            instrumentName: "7500 Fast",
            comments: "",
            colour: "green",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            id: 14,
            instrumentName: "Step One & Step One Plus",
            comments: "",
            colour: "yellow",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }];

        $scope.clickInstrument = function(instr) {
            if ($scope.removeflag) {
                $scope.removeInstrument(instr.id);
            } else {
                if (instr.type === "button") {
                    $scope.addInstrument();
                } else {
                    $state.go('dashboard.table');
                }
            }
        };
        $scope.addInstrument = function() {
            $scope.instrumentObjArr.push({
                instrumentName: "Step One & Step One Plus",
                comments: "",
                colour: "green",
                linelead: "Shriram",
                supervisor: "Lian Seng",
                type: "comments"
            });
            $timeout(function() {
                $scope.$apply();
            });
        }
        $scope.removeFlagChange = function() {
            $scope.removeflag = !$scope.removeflag;
            $timeout(function() {
                $scope.$apply();
            });
        };
        $scope.removeInstrument = function(id) {
            $scope.instrumentObjArr = $scope.instrumentObjArr.filter(function(el) {
                return el.id !== id;
            });
            $timeout(function() {
                $scope.$apply();
            });
        }
    });