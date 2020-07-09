/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable compat/compat */
/* eslint-disable no-undef */
var $ = require("jquery")
var angular = require("angular")
var _ = require("lodash")
var URL = require("url-parse")

var MILESTONE_CHANGE_EVENT = "drcScrollMilestoneChange"

module.exports = angular
  .module("drc.components.scroll-indicator", [])
  .factory("scrollIndicator", [
    "$rootScope",
    function ($rootScope) {
      return {
        eventName: MILESTONE_CHANGE_EVENT,
        findClosestMilestone: function (milestones) {
          var viewThreshold = parseInt(window.innerHeight * 0.1)
          closestMilestone = {
            position: -Infinity,
            element: null,
          }

          _.forEach(milestones, function (milestone) {
            if (!milestone) {
              return
            }

            // This weird edge case happens on some milestones that aren't on the page
            if (
              milestone.getBoundingClientRect().top === 0 &&
              milestone.getBoundingClientRect().bottom === 0
            ) {
              return
            }

            var fromThreshold =
              milestone.getBoundingClientRect().top - viewThreshold

            if (
              fromThreshold < 0 &&
              fromThreshold > closestMilestone.position
            ) {
              closestMilestone.position = fromThreshold
              closestMilestone.element = milestone
            }
          })

          if (!closestMilestone.element) {
            return
          }

          return closestMilestone.element
        },
      }
    },
  ])
  // Can I add comments here?
  .directive("drcScrollPane", [
    "$rootScope",
    "scrollIndicator",
    function ($rootScope, scrollIndicator) {
      return {
        restrict: "A",
        controller: [
          "$scope",
          "$element",
          function ($scope, $element) {
            $scope.closestMilestone = null

            window.addEventListener("scroll", function (e) {
              var el = $element[0]
              var milestones = el.querySelectorAll("[id]")

              var newMilestone = scrollIndicator.findClosestMilestone(
                milestones
              )

              if (newMilestone && newMilestone != $scope.closestMilestone) {
                $scope.closestMilestone = newMilestone

                var url = new URL(window.location.href)
                if (newMilestone != milestones[0]) {
                  url.set("hash", "#" + newMilestone.getAttribute("id"))
                }

                $rootScope.$broadcast(scrollIndicator.eventName, url.toString())
              }
            })
          },
        ],
        link: function ($scope, $element, $attrs) {},
      }
    },
  ]).name
