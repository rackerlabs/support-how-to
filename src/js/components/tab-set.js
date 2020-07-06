/* eslint-disable no-console */
/* eslint-disable eqeqeq */
var angular = require("angular")
var $ = require("jquery")

var moduleName = "drc.components.tab-set"
module.exports = moduleName

angular.module(moduleName, []).directive("tabSet", [
  function () {
    return {
      restrict: "A",
      controller: [
        "$scope",
        "$element",
        "$attrs",
        function ($scope, $element, $attrs) {
          $scope.activeTab = null
          $scope.tabs = {}

          var updateActiveLink = function (value) {
            $element.find(".tab-buttons [data-tab-link]").each(function () {
              if (this.getAttribute("data-tab-link") == value) {
                this.classList.add("active")

                $scope.activeLinkIndicator.style.width = this.offsetWidth + "px"
                $scope.activeLinkIndicator.style.left =
                  $(this).offset().left -
                  $(".tab-buttons ul").offset().left +
                  "px"
              } else {
                this.classList.remove("active")
              }
            })
          }

          $scope.activeLinkIndicator = document.createElement("li")
          $scope.activeLinkIndicator.className = "active-link-indicator"
          $element
            .find(".tab-buttons ul")
            .get(0)
            .appendChild($scope.activeLinkIndicator)

          $element.find("[data-tab]").each(function (index) {
            if (Object.keys($scope.tabs).length === 0) {
              $scope.activeTab = this.getAttribute("data-tab")
            }

            $scope.tabs[this.getAttribute("data-tab")] = this
          })

          $scope.$watch("activeTab", function (newVal, oldVal) {
            for (var tabId in $scope.tabs) {
              if ($scope.tabs.hasOwnProperty(tabId)) {
                if (newVal === tabId) {
                  $scope.tabs[tabId].classList.remove("ng-hide")
                } else {
                  $scope.tabs[tabId].classList.add("ng-hide")
                }
              }
            }

            updateActiveLink(newVal)
          })

          setTimeout(function () {
            // the calculations change after the webfonts load.
            // We don't really know when that will be.
            updateActiveLink($scope.activeTab)
          }, 1000)

          $element.on("click", "[data-tab-link]", function (e) {
            e.preventDefault()
            console.log("click")

            $scope.$apply(
              function () {
                $scope.activeTab = this.getAttribute("data-tab-link")
              }.bind(this)
            )
          })
        },
      ],
    }
  },
])
