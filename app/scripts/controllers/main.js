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
        var instrumentName1 = "QuantStudio Q3 & Q5";
        var instrumentName2 = "ViiA 7";
        var instrumentName3 = "7500 Fast";
        var instrumentName4 = "Step One & Step One Plus";

        $scope.instrumentObjArr = [{
            id: 1,
            instrumentName: instrumentName1,
            comments: "",
            colour: "green",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            id: 2,
            instrumentName: instrumentName2,
            comments: "",
            colour: "green",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            id: 3,
            instrumentName: instrumentName3,
            comments: "",
            colour: "green",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            id: 4,
            instrumentName: instrumentName2,
            comments: "",
            colour: "yellow",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            id: 5,
            instrumentName: instrumentName3,
            comments: "",
            colour: "green",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            id: 6,
            instrumentName: instrumentName4,
            comments: "",
            colour: "green",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            id: 7,
            instrumentName: instrumentName1,
            comments: "",
            colour: "red",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            id: 8,
            instrumentName: instrumentName3,
            comments: "",
            colour: "green",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            id: 9,
            instrumentName: instrumentName2,
            comments: "",
            colour: "green",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            id: 10,
            instrumentName: instrumentName3,
            comments: "",
            colour: "green",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            id: 11,
            instrumentName: instrumentName4,
            comments: "",
            colour: "green",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            id: 12,
            instrumentName: instrumentName2,
            comments: "",
            colour: "green",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            id: 13,
            instrumentName: instrumentName3,
            comments: "",
            colour: "green",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            id: 14,
            instrumentName: instrumentName4,
            comments: "",
            colour: "yellow",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            id: 15,
            instrumentName: instrumentName2,
            comments: "",
            colour: "green",
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
                instrumentName: "Sample Instrument",
                comments: "",
                colour: "green",
                linelead: "Admin",
                supervisor: "Lian Seng",
                type: "comments",
                id: getHighestId()
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
        };

        $scope.editInstrument = function(id) {
            for (var i in $scope.instrumentObjArr) {
                if (id === $scope.instrumentObjArr[i].id) {
                    $scope.idn = i;
                    break;
                }
            }

            $scope.winEditCell.center().open();
        }
        $scope.saveAndCloseWin = function() {
            //Save
            $scope.winEditCell.close();
        }
        $scope.onSelect = function(e) {
            var message = $.map(e.files, function(file) {
                return file.name;
            }).join(", ");
            console.log("event :: select (" + message + ")");
        };

        function getHighestId() {
            var id = -1;
            for (var i in $scope.instrumentObjArr) {
                if ($scope.instrumentObjArr[i].id > id) {
                    id = $scope.instrumentObjArr[i].id;
                }
            }
            return id + 1;
        }
    });