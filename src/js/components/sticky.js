/* eslint-disable eqeqeq */
// This is the bootstrap affix plugin, modified to be a requireJS-friendly
// Angular directive.

var $ = require("jquery")
var angular = require("angular")

var moduleName = "drc.components.sticky"
module.exports = moduleName

angular.module(moduleName, []).directive("drcSticky", function () {
  return {
    scope: {},
    restrict: "A",
    controller: [
      "$scope",
      "$element",
      "$attrs",
      function ($scope, $element, $attrs) {
        $scope.RESET = "sticky sticky-top sticky-bottom"
        $scope.scrollParent = $(window)
        $scope.data = {}
        $scope.affixed = null
        $scope.unpin = null
        $scope.pinnedOffset = null

        $element = $($element)

        $scope.checkPosition = function () {
          if (!$element.is(":visible")) return

          var height = $element.height()
          var offset = $scope.data.offset
          var offsetTop = offset.top
          var offsetBottom = offset.bottom
          var scrollHeight = Math.max(
            $(document).height(),
            $(document.body).height()
          )

          if (typeof offset != "object") offsetBottom = offsetTop = offset
          if (typeof offsetTop == "function") offsetTop = offset.top($element)
          if (typeof offsetBottom == "function")
            offsetBottom = offset.bottom($element)

          var affix = $scope.getState(
            scrollHeight,
            height,
            offsetTop,
            offsetBottom
          )

          if ($scope.affixed != affix) {
            if ($scope.unpin !== null) $element.css("top", "")

            var affixType = "sticky" + (affix ? "-" + affix : "")
            var e = $.Event(affixType)

            $element.trigger(e)

            if (e.isDefaultPrevented()) return

            $scope.affixed = affix
            $scope.unpin = affix == "bottom" ? $scope.getPinnedOffset() : null

            $element
              .removeClass($scope.RESET)
              .addClass(affixType)
              .trigger(affixType.replace("sticky", "affixed"))
          }

          if (affix == "bottom") {
            $element.offset({
              top: scrollHeight - height - offsetBottom,
            })
          }
        }

        $scope.getState = function (
          scrollHeight,
          height,
          offsetTop,
          offsetBottom
        ) {
          var scrollTop = $scope.scrollParent.scrollTop()
          var position = $element.offset()
          var targetHeight = $scope.scrollParent.height()

          if (offsetTop !== null && $scope.affixed == "top")
            return scrollTop < offsetTop ? "top" : false

          if ($scope.affixed == "bottom") {
            if (offsetTop !== null)
              return scrollTop + $scope.unpin <= position.top ? false : "bottom"
            return scrollTop + targetHeight <= scrollHeight - offsetBottom
              ? false
              : "bottom"
          }

          var initializing = $scope.affixed === null
          var colliderTop = initializing ? scrollTop : position.top
          var colliderHeight = initializing ? targetHeight : height

          if (offsetTop !== null && scrollTop <= offsetTop) return "top"
          if (
            offsetBottom !== null &&
            colliderTop + colliderHeight >= scrollHeight - offsetBottom
          )
            return "bottom"

          return false
        }

        $scope.getPinnedOffset = function () {
          if (this.pinnedOffset) return $scope.pinnedOffset

          $element.removeClass($scope.RESET).addClass("sticky")
          var scrollTop = $scope.scrollParent.scrollTop()
          var position = $element.offset()

          return ($scope.pinnedOffset = position.top - scrollTop)
        }

        $scope.checkPositionWithEventLoop = function () {
          setTimeout($scope.checkPosition, 1)
        }
      },
    ],
    link: function ($scope, $element, $attrs) {
      $element = $($element)
      $scope.data = {
        offset: {
          bottom: $attrs.offsetBottom || null,
          top: $attrs.offsetTop || 0,
        },
      }

      $scope.checkPosition()
      $scope.scrollParent.on("scroll", $scope.checkPosition)
    },
  }
})
