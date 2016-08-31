'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
    .controller('MainCtrl', function($scope, $position, $state) {

        $scope.instrumentObjArr = [{
            instrumentName: "QuantStudio Q3 & Q5",
            comments: "",
            colour: "green",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            instrumentName: "ViiA 7",
            comments: "",
            colour: "green",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            instrumentName: "7500 Fast",
            comments: "",
            colour: "green",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            instrumentName: "ViiA 7",
            comments: "",
            colour: "yellow",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            instrumentName: "7500 Fast",
            comments: "",
            colour: "green",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            instrumentName: "Step One & Step One Plus",
            comments: "",
            colour: "green",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            instrumentName: "QuantStudio Q3 & Q5",
            comments: "",
            colour: "red",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            instrumentName: "ViiA 7",
            comments: "",
            colour: "green",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            instrumentName: "7500 Fast",
            comments: "",
            colour: "green",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            instrumentName: "ViiA 7",
            comments: "",
            colour: "green",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            instrumentName: "7500 Fast",
            comments: "",
            colour: "green",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            instrumentName: "Step One & Step One Plus",
            comments: "",
            colour: "green",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            instrumentName: "ViiA 7",
            comments: "",
            colour: "green",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            instrumentName: "7500 Fast",
            comments: "",
            colour: "green",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }, {
            instrumentName: "Step One & Step One Plus",
            comments: "",
            colour: "yellow",
            linelead: "Shriram",
            supervisor: "Michael",
            type: "comments"
        }];

        $scope.clickInstrument = function(instr) {
            $state.go('dashboard.table');
        }
    });