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
                $scope.issueDataGrid.refresh();
                $scope.fourMDataGrid.refresh();
            }

            $scope.flagEditShow = false;
            $scope.flagDoneShow = false;
            $scope.outputDaily = {
                id: 10,
                target: '6',
                yesterday: '6',
                today: '6'
            };
            $scope.outputCummulative = {
                id: 20,
                target: '6',
                acheived: '6'
            };
            $scope.underAcheivedToday = false;
            $scope.underAcheivedYday = false;

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
                    }, {
                        command: [{
                            name: "Delete",
                            imageClass: "k-icon k-i-close",
                            click: function(e) {
                                e.preventDefault();
                                var dataItem = this.dataItem($(e.target).closest("tr"));
                                // if (confirm('Do you really want to delete this record?')) {
                                $scope.dataSourceSample.remove(dataItem);
                                $scope.dataSourceSample.sync();
                                // }
                            }
                        }],
                        title: "&nbsp;",
                        width: "100px"
                    }],
                    editable: false,
                    save: $scope.onChangeHandler
                };
            }

            function initFourMTable() {
                $scope.fourMDataSource = new kendo.data.DataSource({
                    data: [{
                        id: 1,
                        item: 'Man',
                        yesterday: 'Mark',
                        today: 'Otto',
                        remarks: '@modo'
                    }, {
                        id: 2,
                        item: 'Material',
                        yesterday: 'jacob',
                        today: 'thornton',
                        remarks: '@fat'
                    }, {
                        id: 3,
                        item: 'Machine',
                        yesterday: 'larry',
                        today: 'the bird',
                        remarks: '@twitter'
                    }, {
                        id: 4,
                        item: 'Method',
                        yesterday: 'larry',
                        today: 'the bird',
                        remarks: '@twitter'
                    }],
                    schema: {
                        model: {
                            id: "id",
                            fields: {
                                item: {
                                    type: "string",
                                    editable: true
                                },
                                yesterday: {
                                    type: "string",
                                    editable: true
                                },
                                today: {
                                    type: "string",
                                    editable: true
                                },
                                remarks: {
                                    type: "string",
                                    editable: true
                                }
                            }
                        }
                    }
                });
                $scope.fourMOptions = {
                    columns: [{
                        field: "item",
                        title: "#",
                        // width: 15
                    }, {
                        field: "yesterday",
                        title: "Yesterday",
                        // width: 10
                    }, {
                        field: "today",
                        title: "Today",
                        // width: 10
                    }, {
                        field: "remarks",
                        title: "Remarks",
                        // width: 10
                    }],
                    editable: false,
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
                                    editable: true,

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
                        format: "{0:MM-dd-yyyy}"
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
                    }, {
                        command: [{
                            name: "Delete",
                            imageClass: "k-icon k-i-close",
                            click: function(e) {
                                e.preventDefault();
                                var dataItem = this.dataItem($(e.target).closest("tr"));
                                //  if (confirm('Do you really want to delete this record?')) {
                                $scope.issueDataSource.remove(dataItem);
                                $scope.issueDataSource.sync();
                                //  }
                            }
                        }],
                        title: "&nbsp;",
                        width: "100px"
                    }],
                    editable: false,
                    save: $scope.onChangeHandler
                };
            }


            function initTableData() {
                initFPYTable();
                initFourMTable();
                initIssueTrackerTable();

            }
            // initTableData();

            $scope.addIssueRow = function() {
                $scope.issueDataSource.add({

                    "id": 4,
                    "date": "Fri Mar 30 2012 00:00:00 GMT+0200",
                    "issue": "1",
                    "action": "2",
                    "who": "4",
                    "due": "4",
                    "status": "Behind"


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
            $scope.getColor = function() {
                if ($scope.outputDaily.target > $scope.outputDaily.today) {
                    return "{color: red;}";
                } else {
                    return "{color: green;}";
                }
            }

            $scope.editTable = function() {
                // 1. output status 
                for (var id = $scope.outputDaily.id; id < $scope.outputDaily.id + 3; id++) {
                    var obj = $("#" + id);
                    obj.attr("readOnly", false);
                }
                for (var id = $scope.outputCummulative.id; id < $scope.outputCummulative.id + 3; id++) {
                    var obj = $("#" + id);
                    obj.attr("readOnly", false);
                }

                // flag
                $scope.flagEditShow = !$scope.flagEditShow;
                $scope.flagDoneShow = !$scope.flagDoneShow;

                $scope.sampleOptions.editable = $scope.flagEditShow;
                $scope.issueOptions.editable = $scope.flagEditShow;
                $scope.fourMOptions.editable = $scope.flagEditShow;
                $timeout(function() {
                    $scope.fpyDataGrid.refresh();
                    $scope.issueDataGrid.refresh();
                    $scope.$apply();
                });
            }

            $scope.editDone = function() {
                // 1. output status 
                for (var id = $scope.outputDaily.id; id < $scope.outputDaily.id + 3; id++) {
                    var obj = $("#" + id);
                    obj.attr("readOnly", true);
                }
                for (var id = $scope.outputCummulative.id; id < $scope.outputCummulative.id + 3; id++) {
                    var obj = $("#" + id);
                    obj.attr("readOnly", true);
                }


                if (($scope.outputDaily.target > $scope.outputDaily.today)) {
                    $scope.underAcheivedToday = true;
                } else {
                    $scope.underAcheivedToday = false;
                }
                if (($scope.outputDaily.target > $scope.outputDaily.yesterday)) {
                    $scope.underAcheivedYday = true;
                } else {
                    $scope.underAcheivedYday = false;
                }

                // flag
                $scope.flagEditShow = !$scope.flagEditShow;
                $scope.flagDoneShow = !$scope.flagDoneShow;
                $timeout(function() {
                    // initTableData();
                    $scope.$apply();

                });
            }

            $scope.callOnce = function() {

            };
            $timeout(function() {
                initTableData();
                $scope.$apply();
            });
        }
);