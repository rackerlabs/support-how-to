/* eslint-disable no-console */
var angular = require("angular")
var $ = require("jquery")

module.exports = angular
  .module("drc.controllers.product-news", [])
  .controller("ProductNewsCtrl", [
    "$http",
    "$scope",
    function ($http, $scope) {
      this.articles = []

      $http.get("/product-news-feed").then(
        function (response) {
          var items = []
          var data

          try {
            data = $.parseXML(response.data)
          } catch (e) {
            console.log(e)
            return
          }

          $(data)
            .find("channel item")
            .each(function () {
              var item = {}

              item.title = $(this).find("title").text()
              item.link = $(this).find("link").text()
              item.date = new Date($(this).find("pubDate").text())

              items.push(item)
            })

          this.articles = items
        }.bind(this)
      )
    },
  ])
