/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable compat/compat */
var _ = require("lodash")
var angular = require("angular")
var URL = require("url-parse")

var moduleName = "drc.components.collapsible-nav"
module.exports = moduleName

angular.module(moduleName, []).directive("drcCollapsibleNav", [
  "$rootScope",
  "scrollIndicator",
  function ($rootScope, scrollIndicator) {
    return {
      controller: [
        "$scope",
        "$element",
        "$attrs",
        function ($scope, $element, $attrs) {},
      ],
      link: function ($scope, $element, $attrs) {
        var element = $element[0]

        // Create the caret icon used to indicate collapsing nav
        var createCollapseTarget = function () {
          var target = document.createElement("div")
          target.className = "fa fa-caret-right collapse-target"

          target.addEventListener("click", function (e) {
            var targetParent = e.target.parentNode

            if (targetParent.classList.contains("open")) {
              targetParent.classList.remove("open")
            } else {
              targetParent.classList.add("open")
            }
          })

          return target
        }

        // Opens all parent lists, stopping at the directive element. Adds
        // an "open" class to all <li> elements it finds
        var openParentLists = function (child) {
          // Stop recursing at the element on which this directive is defined
          if (child.parentNode == element) {
            return
          }

          // Only add the open class to parent <li> tags
          if (child.parentNode.tagName.toLowerCase() !== "li") {
            return openParentLists(child.parentNode)
          }

          // Add the open class to the parent li and recurse upwards
          child.parentNode.classList.add("open")
          return openParentLists(child.parentNode)
        }

        var resetActiveLinks = function () {
          var links = element.querySelectorAll("a.active")
          var lists = element.querySelectorAll("li.open")

          // de-activate all links
          _.forEach(links, function (link) {
            link.classList.remove("active")
          })
        }

        // Reset the list and open the currently active link
        var markLinkActive = function (link) {
          resetActiveLinks()
          link.classList.add("active")
          openParentLists(link)

          // Wait a bit for things to render, then try to scroll the active
          // link into view
          setTimeout(function () {
            var rect = element.getBoundingClientRect()
            var paneBottom = rect.bottom
            var paneTop = rect.top
            var linkFromTop = link.getBoundingClientRect().top

            if (
              linkFromTop > paneBottom * 0.85 ||
              linkFromTop < paneTop * 0.85
            ) {
              element.scrollTop = linkFromTop - paneTop
            }
          }, 10)
        }

        // Loop through all the <li> tags we can find
        var listItems = element.querySelectorAll("li")
        _.forEach(listItems, function (item, index, array) {
          if (item.querySelector("ul") === null) {
            return
          }

          // If the <li> has a child <ul>, it is a parent and needs to
          // handle collapsing/de-collapsing
          item.insertBefore(createCollapseTarget(), item.children[0])
        })

        var handleNewURL = function (url) {
          // Loop through all the <a> tags we can find
          var currentURL = new URL(url)
          var links = element.querySelectorAll("a[href]")

          _.forEach(links, function (link, index, array) {
            var linkURL = new URL(link.href)
            // only match URLs with the same pathname as the current location
            if (currentURL.pathname !== linkURL.pathname) {
              return
            }

            if (currentURL.hash && currentURL.hash === linkURL.hash) {
              // Pathname and hash both match, mark this as active
              markLinkActive(link)
            } else if (currentURL.hash === "" && linkURL.hash === "") {
              // Hashes are both empty, mark this as active
              markLinkActive(link)
            }
          })
        }

        handleNewURL(window.location.href)

        $rootScope.$on(scrollIndicator.eventName, function (event, data) {
          handleNewURL(data)
        })
      },
    }
  },
])
