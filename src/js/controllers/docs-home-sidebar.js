var angular = require("angular")

var moduleName = "drc.controllers.docs-home-sidebar"
module.exports = moduleName

angular.module(moduleName, []).controller("DocsHomeSidebarCtrl", [
  "$scope",
  "filter",
  function ($scope, filter) {
    var COLLECTION = "docs-home"

    $scope.clickFilter = function (value) {
      if (value === "*") {
        filter.clear(COLLECTION)
        return
      }

      if (
        filter.contains(COLLECTION, function (item) {
          return item === value
        })
      ) {
        return filter.remove(COLLECTION, value)
      }

      filter.add(COLLECTION, value)
    }

    $scope.isFilterActive = function (value) {
      if (filter.get(COLLECTION).length === 0) {
        return value === "*"
      }

      return filter.contains(COLLECTION, function (item) {
        return item === value
      })
    }
  },
])
