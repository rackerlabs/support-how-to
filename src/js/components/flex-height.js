/* eslint-disable no-undef */
// This is the bootstrap affix plugin, modified to be a requireJS-friendly
// Angular directive.

var $ = require("jquery")
var angular = require("angular")

module.exports = angular
  .module("drc.components.flex-height", [])
  .directive("drcFlexHeight", [
    "$rootScope",
    function ($rootScope) {
      return {
        link: function ($scope, $element, $attrs) {
          $element = $($element)

          var flexHeight = function () {
            var rect = $element[0].getBoundingClientRect()
            var bottomDistance =
              ($(window).scrollTop() +
                $(window).height() -
                $(document.body).height()) *
              -1
            bottomClip = Math.max(
              parseFloat($attrs.flexBottom) - bottomDistance,
              0
            )

            var flexHeight = Math.min(
              $(window).height() - Math.abs(rect.top) - bottomClip,
              $(window).height()
            )

            requestAnimationFrame(function () {
              $element.css({
                maxHeight: flexHeight + "px",
              })
            })
          }

          $(window).on("scroll resize", flexHeight.bind(this))
          $rootScope.$on("$drcFlexHeight.flexHeight", flexHeight.bind(this))

          flexHeight()
        },
      }
    },
  ]).name
