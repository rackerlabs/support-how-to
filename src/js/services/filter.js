var angular = require("angular")
var _ = require("lodash")

var moduleName = "drc.services.filter"
module.exports = moduleName

var filters = []

angular.module(moduleName, []).factory("filter", [
  "$rootScope",
  function ($rootScope) {
    var addFilter = function (name) {
      if (_.findIndex(filters, {name: name}) !== -1) {
        return _.findIndex(filters, {name: name})
      }

      filters.push({
        name: name,
        items: [],
      })

      return _.findIndex(filters, {name: name})
    }

    return {
      add: function (collection, item) {
        var collectionIndex = addFilter(collection)

        if (filters[collectionIndex].items.indexOf(item) !== -1) {
          return
        }

        filters[collectionIndex].items.push(item)
      },
      remove: function (collection, item) {
        var collectionIndex = addFilter(collection)
        _.pull(filters[collectionIndex].items, item)
      },
      clear: function (collection) {
        var collectionIndex = addFilter(collection)
        filters[collectionIndex].items = []
      },
      contains: function (collection, condition) {
        var collectionIndex = addFilter(collection)

        return _.findIndex(filters[collectionIndex].items, condition) !== -1
      },
      get: function (collection) {
        var collectionIndex = addFilter(collection)

        return filters[collectionIndex].items
      },
    }
  },
])
