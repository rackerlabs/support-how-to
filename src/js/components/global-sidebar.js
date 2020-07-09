// This is the bootstrap affix plugin, modified to be a requireJS-friendly
// Angular directive.

var $ = require("jquery")
var angular = require("angular")

var moduleName = "drc.components.global-sidebar"
module.exports = moduleName

angular.module(moduleName, []).directive("drcGlobalSidebar", function () {
  return {
    link: function ($scope, $element, $attrs) {
      $element = $($element)

      $element.find("a").each(function () {
        if (
          this.getAttribute("href") ===
            window.location.pathname + window.location.hash ||
          this.getAttribute("href") === window.location.pathname
        ) {
          $(this).parents("li").addClass("active")
          $(this).parents(".expander").addClass("open")
        }
      })
    },
  }
})
