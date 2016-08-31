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
        function($scope, $timeout) {

            function initTableData() {
                //Ideally Data should come from 
                $scope.dataSourceSample = new kendo.data.DataSource({
                    data: [{
                        "id": 1,
                        "products": "QS3 0.2 ml",
                        "week1": "Week 1",
                        "week2": "Week 2",
                        "week3": "Week 4",
                        "week4": "Week 4",
                        "remarks": "Achieved"

                    }, {
                        "id": 2,
                        "products": "QS3 0.6 ml",
                        "week1": "Week 1",
                        "week2": "Week 2",
                        "week3": "Week 4",
                        "week4": "Week 4",
                        "remarks": "Ahead"

                    }, {
                        "id": 3,
                        "products": "QS5 0.2 ml",
                        "week1": "Week 1",
                        "week2": "Week 2",
                        "week3": "Week 4",
                        "week4": "Week 4",
                        "remarks": "Behind"

                    }, {
                        "id": 2,
                        "products": "QS3 0.6 ml",
                        "week1": "Week 1",
                        "week2": "Week 2",
                        "week3": "Week 4",
                        "week4": "Week 4",
                        "remarks": "Remarks"

                    }],
                    schema: {
                        model: {
                            id: "id",
                            fields: {
                                products: {
                                    type: "string",
                                    editable: true
                                },

                                week1: {
                                    type: "string",
                                    editable: true
                                },
                                week2: {
                                    type: "string",
                                    editable: true
                                },
                                week3: {
                                    type: "string",
                                    editable: true
                                },
                                week4: {
                                    type: "string",
                                    editable: true
                                },
                                remarks: {
                                    type: "string",
                                    editable: true
                                },
                            }
                        }
                    },
                });
                $scope.sampleOptions = {

                    columns: [{
                            field: "products",
                            title: "Prod",
                            // width: 15
                        }, {
                            field: "week1",
                            title: "Week1",
                            // width: 10
                        }, {
                            field: "week2",
                            title: "Week2",
                            // width: 10
                        }, {
                            field: "week3",
                            title: "Week3",
                            // width: 10
                        },
                        // {
                        //     field: "week4",
                        //     title: "Week4",
                        //     // width: 10
                        // }, 
                        {
                            field: "remarks",
                            title: "Remarks",
                            // width: 15
                        }
                    ],
                    editable: true,
                };
            }
            // initTableData();

            $scope.callOnce = function() {

            };
            $timeout(function() {
                initTableData();
                $scope.$apply();
            });
        }
);