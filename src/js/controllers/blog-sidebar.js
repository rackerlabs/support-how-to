var angular = require("angular")

var moduleName = "drc.controllers.blog-sidebar"
module.exports = moduleName

angular.module(moduleName, []).controller("BlogSidebarCtrl", [
  "$scope",
  "filter",
  function ($scope, filter) {
    var COLLECTION = "blog-popular-posts"

    filter.add(COLLECTION, "month")

    $scope.clickPostTab = function (value) {
      filter.clear(COLLECTION)
      filter.add(COLLECTION, value)
    }

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
