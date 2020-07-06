var angular = require("angular")

var SIGNUP_HOST = process.env.CARINA_SIGNUP_HOST || "https://app.getcarina.com"

module.exports = angular
  .module("drc.signup.signup-form", [])
  .controller("SignupFormCtrl", [
    "$http",
    function ($http) {
      this.formData = {
        username: "",
        password: "",
      }

      this.status = "waiting"
      this.errorMessage = ""

      this.submitForm = function () {
        this.status = "submitting"
        this.errorMessage = ""

        $http({
          method: "POST",
          url: SIGNUP_HOST + "/api/signup",
          data: this.formData,
        })
          .then(
            function (response) {
              if (window.ga) {
                window.ga("send", "event", {
                  eventCategory: "signup-conversion",
                  eventLabel: "signup-success",
                  eventAction: "submit",
                })
              }
              this.status = "submitted"
              return
            }.bind(this)
          )
          .catch(
            function (response) {
              this.status = "waiting"
              this.errorMessage =
                response.data.error ||
                "Sorry, we were unable to complete your signup request."

              return
            }.bind(this)
          )
      }
    },
  ]).name
