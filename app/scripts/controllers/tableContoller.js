'use strict'
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
    .controller('TableCtrl',
        function($scope) {

            function initTableData() {
                $scope.dataSourceSample = new kendo.data.DataSource({
                    data: [{
                        "id": 1,
                        "first": "Shriram",
                        "last": "Deva"
                    }, {
                        "id": 2,
                        "first": "jk",
                        "last": "Deva"
                    }],
                    schema: {
                        model: {
                            id: "id",
                            fields: {
                                first: {
                                    type: "string",
                                    editable: true
                                },

                                last: {
                                    type: "string",
                                    editable: true
                                }
                            }
                        }
                    },
                });
                $scope.sampleOptions = {
                    columns: [{
                        field: "first",
                        title: "First"
                    }, {
                        field: "last",
                        title: "Last",
                    }],
                    editable: true,
                }
            }

            $scope.callOnce = function() {
                initTableData();
            };
        }
);