var angular = require("angular")

module.exports = angular
  .module("drc.components.rack-cli-graphic", [])
  .directive("rackCliGraphic", [
    function () {
      return {
        restrict: "A",
        link: function ($scope, $element, $attrs) {
          var staticImage = new Image()
          staticImage.onload = function () {
            setTimeout(render, 300)
          }
          staticImage.src = "/assets/src/img/rack-cli-static.png"

          var animatedImage = new Image()
          animatedImage.onload = function () {
            setTimeout(render, 300)
          }
          animatedImage.src = "/assets/src/img/rack-cli-animated.gif"

          // The images we have aren't scaled right for one another, so we have to
          // scale down the GIF.
          var baseScaleFactor = 292 / 382

          var render = function () {
            requestAnimationFrame(function () {
              // debugger;
              var parentScaleFactor =
                staticImage.width / staticImage.naturalWidth
              $element.get(0).innerHTML = ""

              $element.get(0).appendChild(staticImage)
              $element.get(0).appendChild(animatedImage)

              animatedImage.style.position = "absolute"
              animatedImage.style.left = (195 / 625) * 100 + "%"
              animatedImage.style.top = "25.75%"
              animatedImage.style.width =
                animatedImage.naturalWidth *
                  baseScaleFactor *
                  parentScaleFactor +
                "px"
            })
          }

          window.addEventListener("resize", render)
        },
      }
    },
  ])
