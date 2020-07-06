var angular = require("angular")

var moduleName = "drc.controllers.docs-home-services"
module.exports = moduleName

angular.module(moduleName, []).controller("DocsHomeServicesCtrl", [
  "$scope",
  "filter",
  function ($scope, filter) {
    var COLLECTION = "docs-home"

    $scope.isSectionActive = function (value) {
      if (filter.get(COLLECTION).length === 0) {
        return true
      }

      return filter.contains(COLLECTION, function (item) {
        return item === value
      })
    }
  },
])
