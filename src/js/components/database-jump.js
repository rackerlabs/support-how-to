var $ = require("jquery")
var angular = require("angular")

var moduleName = "drc.components.database-jump"
module.exports = moduleName

angular.module(moduleName, []).directive("drcDatabaseJump", [
  function () {
    return {
      restrict: "C",
      link: function (scope, element, attrs) {
        var databasePath = window.location.pathname.match(
          /\/databases\/(.+?)\//
        )[1]

        if (!databasePath) {
          return
        }

        $("[id]").each(function () {
          if (this.id.toLowerCase() === databasePath) {
            window.location.hash = "#" + this.id
          }
        })
      },
    }
  },
])
