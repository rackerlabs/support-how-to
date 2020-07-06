var $ = require("jquery")
var angular = require("angular")

var moduleName = "drc.components.code-sample"
module.exports = moduleName

angular.module(moduleName, []).directive("drcCodeSample", [
  "$rootScope",
  "activeLanguage",
  function ($rootScope, activeLanguage) {
    return {
      scope: {},
      controller: [
        "$scope",
        "$element",
        "$attrs",
        function ($scope, $element, $attrs) {
          $element = $($element)

          $scope.isActiveLanguage = function () {
            return activeLanguage.get() === $attrs.drcCodeSample
          }

          $scope.setActiveClass = function () {
            if ($scope.isActiveLanguage()) {
              $element.removeClass("ng-hide")
            } else {
              $element.addClass("ng-hide")
            }
          }

          $rootScope.$on(activeLanguage.changeEventName, $scope.setActiveClass)
        },
      ],
      link: function ($scope, $element, $attrs) {
        $scope.setActiveClass()
      },
    }
  },
])
