'use strict'
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
    .controller('ManpowerCtrl',
        function($scope, $timeout) {
            $scope.onChangeHandler = function() {
                $scope.manpowerDataGrid.refresh();
            }

            function initManpowerTable() {
                //Ideally Data should come from 
                $scope.dataSourceManpower = new kendo.data.DataSource({
                    data: [{
                        "id": 1,
                        "name": "Days",
                        "day1": "M",
                        "day2": "T",
                        "day3": "W",
                        "day4": "Th",
                        "day5": "F",
                        "day6": "Sa",
                        "day7": "Su",
                        "day8": "M",
                        "day9": "T",
                        "day10": "W",
                        "day11": "Th",
                        "day12": "F",
                        "day13": "Sa",
                        "day14": "Su",
                        "day15": "M",
                        "day16": "T",
                        "day17": "W",
                        "day18": "Th",
                        "day19": "F",
                        "day20": "Sa",
                        "day21": "Su",
                        "day22": "M",
                        "day23": "T",
                        "day24": "W",
                        "day25": "Th",
                        "day26": "F",
                        "day27": "Sa",
                        "day28": "Su",
                        "day29": "M",
                        "day30": "T",
                        "day31": "W"
                    }, {
                        "id": 2,
                        "name": "Eshu",
                        "day1": "",
                        "day2": "",
                        "day3": "",
                        "day4": "",
                        "day5": "",
                        "day6": "",
                        "day7": "",
                        "day8": "",
                        "day9": "",
                        "day10": "",
                        "day11": "",
                        "day12": "",
                        "day13": "",
                        "day14": "",
                        "day15": "",
                        "day16": "",
                        "day17": "",
                        "day18": "",
                        "day19": "",
                        "day20": "",
                        "day21": "",
                        "day22": "",
                        "day23": "",
                        "day24": "",
                        "day25": "",
                        "day26": "",
                        "day27": "",
                        "day28": "",
                        "day29": "",
                        "day30": "",
                        "day31": ""
                    }, {
                        "id": 3,
                        "name": "Shriram",
                        "day1": "",
                        "day2": "",
                        "day3": "",
                        "day4": "",
                        "day5": "",
                        "day6": "",
                        "day7": "",
                        "day8": "",
                        "day9": "",
                        "day10": "",
                        "day11": "",
                        "day12": "",
                        "day13": "",
                        "day14": "",
                        "day15": "",
                        "day16": "",
                        "day17": "",
                        "day18": "",
                        "day19": "",
                        "day20": "",
                        "day21": "",
                        "day22": "",
                        "day23": "",
                        "day24": "",
                        "day25": "",
                        "day26": "",
                        "day27": "",
                        "day28": "",
                        "day29": "",
                        "day30": "",
                        "day31": ""

                    }, {
                        "id": 4,
                        "name": "Michael",
                        "day1": "",
                        "day2": "",
                        "day3": "",
                        "day4": "",
                        "day5": "",
                        "day6": "",
                        "day7": "",
                        "day8": "",
                        "day9": "",
                        "day10": "",
                        "day11": "",
                        "day12": "",
                        "day13": "",
                        "day14": "",
                        "day15": "",
                        "day16": "",
                        "day17": "",
                        "day18": "",
                        "day19": "",
                        "day20": "",
                        "day21": "",
                        "day22": "",
                        "day23": "",
                        "day24": "",
                        "day25": "",
                        "day26": "",
                        "day27": "",
                        "day28": "",
                        "day29": "",
                        "day30": "",
                        "day31": ""
                    }, {
                        "id": 5,
                        "name": "Yu Shuang",
                        "day1": "",
                        "day2": "",
                        "day3": "",
                        "day4": "",
                        "day5": "",
                        "day6": "",
                        "day7": "",
                        "day8": "",
                        "day9": "",
                        "day10": "",
                        "day11": "",
                        "day12": "",
                        "day13": "",
                        "day14": "",
                        "day15": "",
                        "day16": "",
                        "day17": "",
                        "day18": "",
                        "day19": "",
                        "day20": "",
                        "day21": "",
                        "day22": "",
                        "day23": "",
                        "day24": "",
                        "day25": "",
                        "day26": "",
                        "day27": "",
                        "day28": "",
                        "day29": "",
                        "day30": "",
                        "day31": ""
                    }],
                    schema: {
                        model: {
                            id: "id",
                            fields: {
                                name: {
                                    type: "string",
                                    editable: true
                                },
                                day1: {
                                    type: "string",
                                    editable: true
                                },
                                day2: {
                                    type: "string",
                                    editable: true
                                },
                                day3: {
                                    type: "string",
                                    editable: true
                                },
                                day4: {
                                    type: "string",
                                    editable: true
                                },
                                day5: {
                                    type: "string",
                                    editable: true
                                },
                                day6: {
                                    type: "string",
                                    editable: true
                                },
                                day7: {
                                    type: "string",
                                    editable: true
                                },
                                day8: {
                                    type: "string",
                                    editable: true
                                },
                                day9: {
                                    type: "string",
                                    editable: true
                                },
                                day10: {
                                    type: "string",
                                    editable: true
                                },
                                day11: {
                                    type: "string",
                                    editable: true
                                },
                                day12: {
                                    type: "string",
                                    editable: true
                                },
                                day13: {
                                    type: "string",
                                    editable: true
                                },
                                day14: {
                                    type: "string",
                                    editable: true
                                },
                                day15: {
                                    type: "string",
                                    editable: true
                                },
                                day16: {
                                    type: "string",
                                    editable: true
                                },
                                day17: {
                                    type: "string",
                                    editable: true
                                },
                                day18: {
                                    type: "string",
                                    editable: true
                                },
                                day19: {
                                    type: "string",
                                    editable: true
                                },
                                day20: {
                                    type: "string",
                                    editable: true
                                },
                                day21: {
                                    type: "string",
                                    editable: true
                                },
                                day22: {
                                    type: "string",
                                    editable: true
                                },
                                day23: {
                                    type: "string",
                                    editable: true
                                },
                                day24: {
                                    type: "string",
                                    editable: true
                                },
                                day25: {
                                    type: "string",
                                    editable: true
                                },
                                day26: {
                                    type: "string",
                                    editable: true
                                },
                                day27: {
                                    type: "string",
                                    editable: true
                                },
                                day28: {
                                    type: "string",
                                    editable: true
                                },
                                day29: {
                                    type: "string",
                                    editable: true
                                },
                                day30: {
                                    type: "string",
                                    editable: true
                                },
                                day31: {
                                    type: "string",
                                    editable: true
                                },
                            }
                        }
                    },
                });
                $scope.manpowerOptions = {
                    columns: [{
                        command: {
                            name: "Delete",
                            imageClass: "k-icon k-i-close",
                            click: function(e) {
                                e.preventDefault();
                                var dataItem = this.dataItem($(e.target).closest("tr"));
                                if (confirm('Do you really want to delete this record?')) {
                                    var dataSource = $scope.dataSourceManpower;
                                    dataSource.remove(dataItem);
                                    dataSource.sync();
                                }
                            }
                        },
                        title: " ",
                        width: 100
                    }, {
                        field: "name",
                        title: "Name",
                        width: 100
                    }, {
                        field: "day1",
                        title: "1",
                        // width: 10
                    }, {
                        field: "day2",
                        title: "2",
                        // width: 10
                    }, {
                        field: "day3",
                        title: "3",
                        // width: 10
                    }, {
                        field: "day4",
                        title: "4",
                        // width: 10
                    }, {
                        field: "day5",
                        title: "5",
                        // width: 15
                    }, {
                        field: "day6",
                        title: "6",
                        // width: 15
                    }, {
                        field: "day7",
                        title: "7",
                        // width: 15
                    }, {
                        field: "day8",
                        title: "8",
                        // width: 15
                    }, {
                        field: "day9",
                        title: "9",
                        // width: 15
                    }, {
                        field: "day10",
                        title: "10",
                        // width: 15
                    }, {
                        field: "day11",
                        title: "11",
                        // width: 15
                    }, {
                        field: "day12",
                        title: "12",
                        // width: 15
                    }, {
                        field: "day13",
                        title: "13",
                        // width: 15
                    }, {
                        field: "day14",
                        title: "14",
                        // width: 15
                    }, {
                        field: "day15",
                        title: "15",
                        // width: 15
                    }, {
                        field: "day16",
                        title: "16",
                        // width: 15
                    }, {
                        field: "day17",
                        title: "17",
                        // width: 15
                    }, {
                        field: "day18",
                        title: "18",
                        // width: 15
                    }, {
                        field: "day19",
                        title: "19",
                        // width: 15
                    }, {
                        field: "day20",
                        title: "20",
                        // width: 15
                    }, {
                        field: "day21",
                        title: "21",
                        // width: 15
                    }, {
                        field: "day22",
                        title: "22",
                        // width: 15
                    }, {
                        field: "day23",
                        title: "23",
                        // width: 15
                    }, {
                        field: "day24",
                        title: "24",
                        // width: 15
                    }, {
                        field: "day25",
                        title: "25",
                        // width: 15
                    }, {
                        field: "day26",
                        title: "26",
                        // width: 15
                    }, {
                        field: "day27",
                        title: "27",
                        // width: 15
                    }, {
                        field: "day28",
                        title: "28",
                        // width: 15
                    }, {
                        field: "day29",
                        title: "29",
                        // width: 15
                    }, {
                        field: "day30",
                        title: "30",
                        // width: 15
                    }, {
                        field: "day31",
                        title: "31",
                        // width: 15
                    }],
                    editable: true,
                    save: $scope.onChangeHandler
                };
            }

            function removeManpower(e) {
                e.preventDefault();
                console.log(e);
                console.log("Remove Manpower");
            }

            function initTableData() {
                initManpowerTable();
            }

            $scope.callOnce = function() {};

            $timeout(function() {
                initTableData();
                $scope.$apply();
            });

            $scope.addRow = function() {
                $scope.dataSourceManpower.add({
                    "id": 12,
                    "name": "New",
                    "day1": "",
                    "day2": "",
                    "day3": "",
                    "day4": "",
                    "day5": "",
                    "day6": "",
                    "day7": "",
                    "day8": "",
                    "day9": "",
                    "day10": "",
                    "day11": "",
                    "day12": "",
                    "day13": "",
                    "day14": "",
                    "day15": "",
                    "day16": "",
                    "day17": "",
                    "day18": "",
                    "day19": "",
                    "day20": "",
                    "day21": "",
                    "day22": "",
                    "day23": "",
                    "day24": "",
                    "day25": "",
                    "day26": "",
                    "day27": "",
                    "day28": "",
                    "day29": "",
                    "day30": "",
                    "day31": ""
                });
                $scope.dataSourceManpower.sync();

            }
        }
);