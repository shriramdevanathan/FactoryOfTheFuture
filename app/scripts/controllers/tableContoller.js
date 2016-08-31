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
            $scope.onChangeHandler = function() {
                $scope.fpyDataGrid.refresh();
            }


            function initFPYTable() {
                //Ideally Data should come from 
                $scope.dataSourceSample = new kendo.data.DataSource({
                    data: [{
                        "id": 1,
                        "products": "QS3 0.2 ml",
                        "week1": "5",
                        "week2": "5",
                        "week3": "4",
                        "week4": "6",
                        "remarks": "Achieved"

                    }, {
                        "id": 2,
                        "products": "QS3 0.6 ml",
                        "week1": "13",
                        "week2": "14",
                        "week3": "6",
                        "week4": "11",
                        "remarks": "Ahead"

                    }, {
                        "id": 3,
                        "products": "QS5 0.2 ml",
                        "week1": "1",
                        "week2": "2",
                        "week3": "4",
                        "week4": "4",
                        "remarks": "Behind"

                    }, {
                        "id": 2,
                        "products": "QS3 0.6 ml",
                        "week1": "1",
                        "week2": "2",
                        "week3": "4",
                        "week4": "4",
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
                    }, {
                        field: "week4",
                        title: "Week4",
                        // width: 10
                    }, {
                        field: "remarks",
                        title: "Remarks",
                        // width: 15
                    }],
                    editable: true,
                    save: $scope.onChangeHandler
                };
            }

            function initIssueTrackerTable() {
                //Ideally Data should come from 
                $scope.issueDataSource = new kendo.data.DataSource({
                    data: [{
                        "id": 1,
                        "date": "Fri Mar 30 2012 00:00:00 GMT+0200",
                        "issue": "1",
                        "action": "2",
                        "who": "4",
                        "due": "4",
                        "status": "Behind"

                    }, {
                        "id": 2,
                        "date": "Fri Mar 30 2012 00:00:00 GMT+0200",
                        "issue": "1",
                        "action": "2",
                        "who": "4",
                        "due": "4",
                        "status": "Behind"

                    }, {
                        "id": 3,
                        "date": "Fri Mar 30 2012 00:00:00 GMT+0200",
                        "issue": "1",
                        "action": "2",
                        "who": "4",
                        "due": "4",
                        "status": "Behind"

                    }, {
                        "id": 4,
                        "date": "Fri Mar 30 2012 00:00:00 GMT+0200",
                        "issue": "1",
                        "action": "2",
                        "who": "4",
                        "due": "4",
                        "status": "Behind"

                    }],
                    schema: {
                        model: {
                            id: "id",
                            fields: {
                                date: {
                                    type: "date",
                                    editable: true
                                },

                                issue: {
                                    type: "string",
                                    editable: true
                                },
                                action: {
                                    type: "string",
                                    editable: true
                                },
                                who: {
                                    type: "string",
                                    editable: true
                                },
                                due: {
                                    type: "string",
                                    editable: true
                                },
                                status: {
                                    type: "string",
                                    editable: true
                                },
                            }
                        }
                    },
                });
                $scope.issueOptions = {

                    columns: [{
                        field: "date",
                        title: "Date",
                        // width: 15
                    }, {
                        field: "issue",
                        title: "Issue/Root cause ",
                        // width: 10
                    }, {
                        field: "action",
                        title: "Action(s)",
                        // width: 10
                    }, {
                        field: "who",
                        title: "Who",
                        // width: 10
                    }, {
                        field: "due",
                        title: "Due",
                        // width: 10
                    }, {
                        field: "status",
                        title: "Staus",
                        // width: 15
                    }],
                    editable: true,
                    save: $scope.onChangeHandler
                };
            }


            function initTableData() {
                initFPYTable();
                initIssueTrackerTable();
            }
            // initTableData();

            $scope.addIssueRow = function() {
                $scope.issueDataSource.add({

                    "id": 12,
                    "products": "New Product",
                    "week1": "0",
                    "week2": "0",
                    "week3": "0",
                    "week4": "0",
                    "remarks": "Remarks"


                });
                $scope.issueDataSource.sync();

            }

            $scope.addRow = function() {
                $scope.dataSourceSample.add({

                    "id": 12,
                    "products": "New Product",
                    "week1": "0",
                    "week2": "0",
                    "week3": "0",
                    "week4": "0",
                    "remarks": "Remarks"


                });
                $scope.dataSourceSample.sync();

            }
            $scope.callOnce = function() {

            };
            $timeout(function() {
                initTableData();
                $scope.$apply();
            });
        }
);