'use strict'
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
    .controller('DashboardNewCtrl',
        function($scope, $timeout) {
        $scope.cellStatus = [];
        $scope.limit = 6;
        $scope.fourMDataGrid = [];
        $scope.categoryDropDownEditor = [];
        $scope.fourMOptions = [];
        
        function initFourMDirective() {

            function initFourMTable() {
                $scope.fourMDataSource = [];
               

                
                $scope.onChangeHandler4M = function(dataItem) {
                    console.log("on change");
                    $timeout(function() {
                        $scope.onChangeHandler();
                        $scope.cellStatus[$scope.idFourm] = "green";
                        var data = $scope.fourMDataSource[$scope.idFourm].data();
                        for (var i in data) {
                            if (data[i].today === "red") {
                                $scope.trafficStatus = 2;
                                $scope.cellStatus[$scope.idFourm] = "red";
                                break;
                            }
                            if (data[i].today === "yellow") {
                                $scope.trafficStatus = 1;
                                $scope.cellStatus[$scope.idFourm] = "yellow";
                            }
                        }
                        $scope.$apply();
                        return;
                    });
                }
                $scope.valueTemplate4M = "<div style='background-color: {{dataItem.color}};width:20px;height:20px; -webkit-border-radius: 25px;-moz-border-radius: 25px;border-radius: 25px;margin-left:5px' align='center' class='groupColor'></div>";
                $scope.trafficLightDataSource = new kendo.data.DataSource({
                            data: [{
                                "text": "<div style='background-color: {{dataItem.color}};width:20px;height:20px;'' align='center' class='groupColor'></div>",
                                "value": "red",
                                "color": "red"
                            }, {
                                "text": "yellow",
                                "value": "yellow",
                                "color": "yellow"
                            }, {
                                "text": "green",
                                "value": "green",
                                "color": "green"
                            }]
                });
                
                $scope.categoryDropDownEditor = function(container, options) {
                        var editor = $('<input kendo-drop-down-list required k-data-text-field="\'text\'" k-data-value-field="\'value\'" k-value-template="valueTemplate4M" k-template="valueTemplate4M" k-data-source="trafficLightDataSource" data-bind="value:' + options.field + '"/>')
                            .appendTo(container);
                };
                
                
                for(var i = 0 ;i < $scope.limit; i++) {
                    if(i==1){
                        var dataSource = new kendo.data.DataSource({
                            data: [{
                                id: 1,
                                item: 'Man',
                                yesterday: 'red',
                                today: 'red',
                                remarks: 'Rearks1'
                            }, {
                                id: 2,
                                item: 'Material',
                                yesterday: 'yellow',
                                today: 'green',
                                remarks: 'Remarks'
                            }, {
                                id: 3,
                                item: 'Machine',
                                yesterday: 'yellow',
                                today: 'green',
                                remarks: 'Remarks'
                            }, {
                                id: 4,
                                item: 'Method',
                                yesterday: 'green',
                                today: 'green',
                                remarks: 'Remarks'
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
                    }else{
                        var dataSource = new kendo.data.DataSource({
                            data: [{
                                id: 1,
                                item: 'Man',
                                yesterday: 'red',
                                today: 'green',
                                remarks: 'Remarks'
                            }, {
                                id: 2,
                                item: 'Material',
                                yesterday: 'yellow',
                                today: 'green',
                                remarks: 'Remarks'
                            }, {
                                id: 3,
                                item: 'Machine',
                                yesterday: 'yellow',
                                today: 'green',
                                remarks: 'Remarks'
                            }, {
                                id: 4,
                                item: 'Method',
                                yesterday: 'green',
                                today: 'green',
                                remarks: 'Remarks'
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
                    }
                    var options = {
                        columns: [{
                            field: "item",
                            title: "#",
                            // width: 15
                        }, {
                            field: "yesterday",
                            title: "Yesterday",
                            template: function(dataItem) {
                                var color = "";
                                var style = "width: 20px;height: 20px;-webkit-border-radius: 25px;-moz-border-radius: 25px;border-radius: 25px;";
                                
                                if (dataItem.yesterday === "red") {
                                    color = "red";
                                }
                                if (dataItem.yesterday === "green") {
                                    color="green";
                                }
                                if (dataItem.yesterday === "yellow") {
                                    color = "yellow";
                                }
                                return "<div style='" + style + "background: "+color + "'></div>";
                            },
                            editor: $scope.categoryDropDownEditor,

                            // width: 10
                        }, {
                            field: "today",
                            title: "Today",
                            template: function(dataItem) {
                                var color = "";
                                var style = "width: 20px;height: 20px;-webkit-border-radius: 25px;-moz-border-radius: 25px;border-radius: 25px;";
                                
                                if (dataItem.today === "red") {
                                    color = "red";
                                }
                                if (dataItem.today === "green") {
                                    color="green";
                                }
                                if (dataItem.today === "yellow") {
                                    color = "yellow";
                                }
                                return "<div style='" + style + "background: "+color + "'></div>";
                            },
                            editor: $scope.categoryDropDownEditor,
                            // width: 10
                        }, {
                            field: "remarks",
                            title: "Remarks",
                            // width: 10
                        }],
                        editable: true
                        
                    };
                    $scope.fourMDataSource.push(
                        dataSource
                    );
                    $scope.cellStatus.push("green");
                    $scope.fourMOptions.push(options);
                    $scope.fourMDataGrid.push();
                }
                
            }

            function initTableData() {
                initFourMTable();
            }
            // initTableData();

            
            $scope.getColor = function() {
                if ($scope.outputDaily.target > $scope.outputDaily.today) {
                    return "{color: red;}";
                } else {
                    return "{color: green;}";
                }
            }


            initTableData();

            $timeout(function() {
                $scope.$apply();
            });
        
        }

        function initStat(){

            var instrumentName1 = "QuantStudio Q3 & Q5";
            var instrumentName2 = "ViiA 7";
            var instrumentName3 = "7500 Fast";
            var instrumentName4 = "Step One & Step One Plus";

            $scope.instrumentObjArr = [{
                id: 0,
                instrumentName: instrumentName3,
                comments: "",
                colour: "green",
                linelead: "Shriram",
                supervisor: "Michael",
                type: "comments",
            },
            {
                id: 1,
                instrumentName: instrumentName1,
                comments: "",
                colour: "green",
                linelead: "Shriram",
                supervisor: "Michael",
                type: "comments",
            }, {
                id: 2,
                instrumentName: instrumentName2,
                comments: "",
                colour: "yellow",
                linelead: "Shriram",
                supervisor: "Michael",
                type: "comments"
            }, {
                id: 3,
                instrumentName: instrumentName3,
                comments: "",
                colour: "red",
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
        }
        initFourMDirective();
        initStat();
        $timeout(function(){
           $scope.$apply(); 
        });
            
        
        }
);