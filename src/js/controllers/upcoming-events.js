/* eslint-disable no-unused-vars */
var angular = require("angular")
var $ = require("jquery")

module.exports = angular
  .module("drc.controllers.upcoming-events", [])
  .controller("UpcomingEventsCtrl", [
    "$http",
    "$scope",
    function ($http, $scope) {
      this.events = []

      $http.get("/events.json").then(
        function (response) {
          var events = []
          var now = new Date()

          response.data.forEach(function (event) {
            var eventDate = new Date(event.date)
            if (eventDate > now) {
              events.push(event)
            }
          })

          this.events = events
        }.bind(this)
      )
    },
  ])
