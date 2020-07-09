/* eslint-disable eqeqeq */
var $ = require("jquery")
var angular = require("angular")

module.exports = angular
  .module("drc.components.collapsible-section", [])
  .directive("collapsibleSection", [
    "$rootScope",
    "$sce",
    function ($rootScope, $sce) {
      return {
        scope: true,
        restrict: "C",
        controller: [
          "$scope",
          "$element",
          "$attrs",
          "$compile",
          function ($scope, $element, $attrs, $compile) {
            $scope.toggle = function () {
              $element.toggleClass("open")

              // Give the browser a little time to paint so the flexHeight
              // calculations are correct.
              setTimeout(function () {
                $rootScope.$emit("$drcFlexHeight.flexHeight")
              }, 20)
            }

            $scope.open = function () {
              $element.addClass("open")

              // Give the browser a little time to paint so the flexHeight
              // calculations are correct.
              setTimeout(function () {
                $rootScope.$emit("$drcFlexHeight.flexHeight")
              }, 20)
            }

            $scope.openWithId = function (id) {
              var matchingElement = document.getElementById(id)

              if (!matchingElement) {
                return
              }

              if (
                $(matchingElement).parents(".collapsible-section").attr("id") ==
                  $element.attr("id") ||
                $(matchingElement).attr("id") == $element.attr("id")
              ) {
                $scope.open()
              }
            }

            // Compile a toggle element and add it before the section
            $scope.init = function () {
              var toggleTemplate =
                '<div class="collapsible-section-toggle" data-ng-click="toggle()" data-ng-class="{\'show\': !isOpen()}"><a class="toggle" href="">collapse section</a> <h2 data-ng-bind-html="title"></h2></div>'
              var output = $compile(toggleTemplate)($scope)
              $element.before(output)

              $(document).on("click", 'a[href^="#"]', function (e) {
                $scope.openWithId(this.getAttribute("href").replace(/^#/, ""))
              })
            }
          },
        ],
        link: function ($scope, $element, $attrs) {
          $scope.title = $sce.trustAsHtml(
            $element.find(".collapsible-section-title").html()
          )

          $scope.openWithId(window.location.hash.replace(/^#/, ""))

          $scope.isOpen = function () {
            return $element.hasClass("open")
          }

          $scope.init()
        },
      }
    },
  ]).name
