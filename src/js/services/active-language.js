var angular = require("angular")

var moduleName = "drc.services.active-language"
module.exports = moduleName

var LANGUAGE_KEY = "drc.preferredLanguage"
var LANGUAGE_CHANGE_EVENT = "drcLanguageChange"

angular.module(moduleName, []).factory("activeLanguage", [
  "$rootScope",
  function ($rootScope) {
    // Bootstrap the active language selection by evaluating a "?lang=" query string
    var languageSearchPattern = /lang=([^&]+)/
    if (window.location.search.match(languageSearchPattern)) {
      var chosenLanguage = window.location.search.match(
        languageSearchPattern
      )[1]
      localStorage.setItem(LANGUAGE_KEY, chosenLanguage)
    }

    // If no language has been set, assign a default
    if (!localStorage.getItem(LANGUAGE_KEY)) {
      localStorage.setItem(LANGUAGE_KEY, "sh")
    }

    return {
      set: function (value) {
        localStorage.setItem(LANGUAGE_KEY, value)
        $rootScope.$broadcast(LANGUAGE_CHANGE_EVENT, value)
      },
      get: function () {
        return localStorage.getItem(LANGUAGE_KEY)
      },
      changeEventName: LANGUAGE_CHANGE_EVENT,
    }
  },
])
