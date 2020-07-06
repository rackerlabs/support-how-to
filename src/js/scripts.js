/* eslint-disable eqeqeq */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import "./imports/sidebarActiveState"
import contentLoaded from "content-loaded"
import EQCSS from "eqcss"
import HeadingLinks from "./imports/headingLinks"
import LazySizes from "lazysizes"
import LightBox from "./imports/lightbox"
import Nav from "./imports/nav"
import Search from "./imports/algoliaSearch/instantSearch"
import SmoothScroll from "./imports/smoothScroll"
import Shuffle from "shufflejs"
import Sticky from "./imports/sticky"
import AjaxForm from "./imports/ajaxForm"
import {setCodeTabs, initCodeTabs} from "./imports/code-tabs"
import app from "./app"
var $ = require("jquery")

window.setCodeTabs = setCodeTabs
/**
 * Don't fire application logic
 * until the DOM is ready
 */
contentLoaded().then(() => {
  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate
    this.el = el
    this.loopNum = 0
    this.period = parseInt(period, 10) || 2000
    this.txt = ""
    this.tick()
    this.isDeleting = false
  }

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length
    var fullTxt = this.toRotate[i]

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1)
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>"

    var that = this
    var delta = 300 - Math.random() * 100

    if (this.isDeleting) {
      delta /= 2
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period
      this.isDeleting = true
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false
      this.loopNum++
      delta = 500
    }

    setTimeout(function () {
      that.tick()
    }, delta)
  }

  window.onload = function () {
    var elements = document.getElementsByClassName("txt-rotate")
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-rotate")
      var period = elements[i].getAttribute("data-period")
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period)
      }
    }
    // INJECT CSS
    var css = document.createElement("style")
    css.type = "text/css"
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #fff }"
    document.body.appendChild(css)
  }

  const isHome = document.body.classList.contains("home")
  const isDocs = document.body.classList.contains("section-docs")
  const isBlog = document.body.classList.contains("section-blog")

  /**
   * Enable navbar logic
   */
  const nav = new Nav()

  /**
   * Enable search
   */
  try {
    if (isHome) {
      new Search(
        process.env.ALGOLIA_APP_ID,
        process.env.ALGOLIA_SEARCH_KEY,
        "dist"
      )
    } else if (isDocs) {
      new Search(
        process.env.ALGOLIA_APP_ID,
        process.env.ALGOLIA_SEARCH_KEY,
        "docs"
      )
    } else if (isBlog) {
      console.log(isBlog)
      new Search(
        process.env.ALGOLIA_APP_ID,
        process.env.ALGOLIA_SEARCH_KEY,
        "blog"
      )
    }
  } catch (err) {
    console.warn(err)
  }

  /**
   * Enable heading links
   */
  const headingLinks = new HeadingLinks([
    ".single-post",
    ".docs-content .container",
  ])

  /**
   * Actvate smooth scrolling for the entire
   * website for hash links
   */
  SmoothScroll()

  /**
   * Enable position sticky for certain elements
   */
  const sticky = new Sticky([".blog-header--sticky", ".search-header--sticky"])

  /**
   * Hook up add-site-button generator behavior
   */

  /**
   * Enable lightboxes for images
   */
  const lightBoxes = new LightBox([".md-content img:not(.no-lightbox)"])
  /**
   * Tabbed code snippets
   */
  initCodeTabs()
})
