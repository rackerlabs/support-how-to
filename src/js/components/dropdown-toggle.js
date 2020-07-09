var $ = require("jquery")
var angular = require("angular")

var moduleName = "drc.components.dropdown-toggle"
module.exports = moduleName

var DROPDOWN_EVENT = "drcDropdownChange"

angular.module(moduleName, []).directive("drcDropdownToggle", [
  "$rootScope",
  function ($rootScope) {
    return {
      link: function ($scope, $element, $attrs, ctrl) {
        $element = $($element)

        var pickDropdown = function (id) {
          $rootScope.$broadcast(DROPDOWN_EVENT, id)
        }

        var hideDropdown = function (id) {
          var selector = "#" + id + ', [data-drc-dropdown-toggle="' + id + '"]'
          $(selector).removeClass("active")
        }

        var showDropdown = function (id) {
          var selector = "#" + id + ', [data-drc-dropdown-toggle="' + id + '"]'
          $(selector).addClass("active")
        }

        $element.on("click", function (e) {
          e.preventDefault()
          pickDropdown($attrs.drcDropdownToggle)
        })

        $rootScope.$on(DROPDOWN_EVENT, function (eventName, data) {
          if (data !== $attrs.drcDropdownToggle) {
            hideDropdown($attrs.drcDropdownToggle)
            return
          }

          if ($element.hasClass("active")) {
            hideDropdown($attrs.drcDropdownToggle)
            return
          }

          setTimeout(function () {
            showDropdown($attrs.drcDropdownToggle)
          }, 300)
        })
      },
    }
  },
])
