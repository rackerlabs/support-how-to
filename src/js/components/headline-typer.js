/* eslint-disable eqeqeq */
var angular = require("angular")

var moduleName = "drc.components.headline-typer"

module.exports = moduleName

angular.module(moduleName, []).directive("headlineTyper", [
  function () {
    return {
      restrict: "A",
      scope: {
        words: "=headlineTyper",
      },
      controller: [
        "$scope",
        "$element",
        "$attrs",
        "$q",
        function ($scope, $element, $attrs, $q) {
          $scope.wordContainer = $attrs.wordContainer
            ? $element.find($attrs.wordContainer)
            : $element.find(".word")

          $scope.activeWordIndex = $element.text() == $scope.words[0] ? 1 : 0

          $scope.deleteCurrentWord = function () {
            return $q(function (resolve, reject) {
              var backspaceInterval = setInterval(function () {
                $scope.wordContainer.text(function () {
                  return this.textContent.substr(0, this.textContent.length - 1)
                })

                if ($scope.wordContainer.text().length === 0) {
                  clearInterval(backspaceInterval)

                  $scope.activeWordIndex =
                    $scope.activeWordIndex == $scope.words.length - 1
                      ? 0
                      : $scope.activeWordIndex + 1
                  return resolve($scope.words[$scope.activeWordIndex])
                }
              }, 50)
            })
          }

          $scope.typeWord = function (word) {
            return $q(function (resolve, reject) {
              var typeInterval = setInterval(function () {
                $scope.wordContainer.text(function () {
                  return word.substr(0, this.textContent.length + 1)
                })

                if ($scope.wordContainer.text().length === word.length) {
                  clearInterval(typeInterval)

                  return resolve()
                }
              }, 90)
            })
          }
        },
      ],
      link: function ($scope, $element, $attrs) {
        var WORD_DELAY = 4000

        var startWordAnimation = function () {
          return $scope
            .deleteCurrentWord()
            .then($scope.typeWord)
            .then(function () {
              setTimeout(startWordAnimation, WORD_DELAY)
            })
        }

        setTimeout(function () {
          startWordAnimation()
        }, WORD_DELAY)
      },
    }
  },
])
