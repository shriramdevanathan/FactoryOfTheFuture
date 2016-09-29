'use strict'
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
    .controller('ProdPlanCtrl',
        function($scope, $timeout) {
            $scope.monthlyTarget = "50";
            var currentDate = new Date();
            var dateArr = [];
            $scope.dataSourceScheduler = [];
            
            function populateDataSource() {
                var date  = currentDate;
                var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
                var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
                dateArr = [];
                $scope.schedulerOptions.date= currentDate;
                $scope.schedulerOptions.startTime= currentDate;
                $scope.schedulerOptions.endTime= currentDate;
                
                $scope.dataSourceScheduler.length = 0;
                for (var d = firstDay; d <= lastDay; d.setDate(d.getDate() + 1)) {
                    var day = d.getDay();
                    var isWeekend = (day == 6) || (day == 0);  
                    if(isWeekend){
                        continue;
                    }
                    var d1 = new Date(d);
                    var d2 = new Date(d);
                    d1.setHours("1");
                    d2.setHours("15");
                    dateArr.push(d1);
                    $scope.dataSourceScheduler.push({
                            target: 2,
                            achieved: 1,
                            isTarget: true,
                            start: d1,
                            end: d1
                    });
                    $scope.dataSourceScheduler.push({
                            achieved: 1,
                            target: 2,
                            isTarget: false,
                            start: d2,
                            end: d2
                    });

                }
            }
            

            function scheduler_navigate(e) {
               currentDate = e.date;
               populateDataSource();
               $scope.applyMonthlyTarget();
            }
            function scheduler_save(e) {
               currentDate = e.date;
               populateDataSource();
               $scope.applyMonthlyTarget();
            }

            $scope.schedulerOptions = {
               
                height: 600,
                views: ["month"],
                navigate: scheduler_navigate,
                save: scheduler_save,
                moveEnd: function(e) {
                    e.preventDefault();
                },
                editable: {
                     template: $("#customEditorTemplate").html(),
                },
                eventTemplate: $("#event-template").html(),
                dataSource: $scope.dataSourceScheduler
            }; 
            
            $scope.applyMonthlyTarget = function() {
                console.log("asdf");
                console.log($scope.schedulerOptions.date);
                var eachTarget = $scope.monthlyTarget/dateArr.length;
                for(var i in dateArr) {
                    var dateTemp = dateArr[i];
                    $scope.dataSourceScheduler.filter(function(el) {
                        if(el.start===dateTemp&&el.isTarget)
                        {
                                el.target = parseFloat(String(eachTarget)).toFixed(3);
                        }
                      //return el.start === dateTemp && el.isTarget;
                    });
                    
                }

            };
            populateDataSource();
        }
);