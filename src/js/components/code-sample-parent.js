var $ = require("jquery")
var angular = require("angular")

var moduleName = "drc.components.code-sample-parent"
module.exports = moduleName

angular.module(moduleName, []).directive("drcCodeSampleParent", [
  "$rootScope",
  "activeLanguage",
  function ($rootScope, activeLanguage) {
    return {
      controller: [
        "$scope",
        "$element",
        function ($scope, $element) {
          $element = $($element)

          $scope.isActiveLanguage = function (language) {
            return activeLanguage.get() === language
          }

          $scope.setActiveClass = function (event, data) {
            data = data || activeLanguage.get()

            $element.removeClass(
              "active-language-sh active-language-go active-language-csharp active-language-java active-language-python active-language-javascript active-language-ruby active-language-php"
            )
            $element.addClass("active-language-" + data)
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
