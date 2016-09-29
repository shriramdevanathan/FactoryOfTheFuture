'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
    .directive('statsnew', function($timeout) {
        return {
            templateUrl: 'scripts/directives/dashboard/statsnew/stats.html',
            restrict: 'E',
            replace: true,
            link: function(scope, iElement, iAttrs) {
                
                function current(page) {
                    var book = $("#book-"+scope.id),
                        pages = book.children(),
                        pagesCount = pages.length,
                        current = pages.filter(".current"),
                        currentIndex = pagesCount - current.index(),
                        newPage;

                    if (!arguments.length) {
                        return currentIndex;
                    }

                    if (book.data("animating")) {
                        return;
                    }

                    $("#wrap-"+scope.id).toggleClass("first-page", page == 1)
                              .toggleClass("last-page", page == pagesCount);

                    if (page != currentIndex) {
                        current.removeClass("current");
                        newPage = pages.eq(pagesCount - page).addClass("current");

                        if (page > currentIndex) {
                            kendo.fx(book).pageturnHorizontal(current, newPage).play();
                        } else {
                            kendo.fx(book).pageturnHorizontal(newPage, current).reverse();
                        }
                    }
                }
                scope.clickNext = function(){
                    current(Math.min(3, current() + 1));
                };
                scope.clickPrevious = function(){
                    current(Math.max(1, current() - 1));
                };

                
            },
            scope: {
                'model': '=',
                'comments': '@',
                'number': '@',
                'name': '@',
                'colour': '@',
                'details': '@',
                'type': '@',
                'goto': '@',
                'supervisor': '@',
                'linelead': '@',
                'removeflag': '=',
                'removeInstrument': '&',
                'clickInstrument': '&',
                'editInstrument': '&',
                'id' : '@',
                'classType': '@',
                'datasource':'=',
                'optionskendo' : '=',
                'trafficsource':'=',
                'valuetemplate' : '=',
                'cellstatus' : '='
            }

        }
    });