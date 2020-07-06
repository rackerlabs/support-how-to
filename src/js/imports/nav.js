import {isUndefined} from "util"
import readCookie from "../utils/cookies"

/**
 * Handles all logic for the fixed navbar
 */
export default class NavBar {
  constructor() {
    this.header = document.querySelector(".header")
    this.nav = document.querySelector(".nav")
    this.rightBlock = document.querySelector(".right-block")
    this.mainBuyNow = document.querySelector(".buynow-button.main")
    this.mainLogin = document.querySelector(".login-button.main")
    this.toggle = document.querySelector(".mini-nav--toggle")
    this.html = document.querySelector("html")
    this.body = document.querySelector("body")

    this.init()
  }

  init() {
    this.handleScroll()
    this.handleToggle()
    this.handleTOC()
    this.signedInState()
  }

  /**
   * Handles toggling the navbar state on scroll
   */
  handleScroll() {
    window.addEventListener("scroll", (e) => {
      const scroll = window.pageYOffset

      if (scroll >= 300) {
        this.header.classList.add("scrolled")
      } else {
        this.header.classList.remove("scrolled")
      }

      if (!isUndefined(this.mainBuyNow) && this.mainBuyNow !== null) {
        if (scroll >= 600) {
          this.mainBuyNow.classList.remove("secondary")
          this.mainBuyNow.classList.add("primary")
        } else if (scroll < 600) {
          this.mainBuyNow.classList.remove("primary")
          this.mainBuyNow.classList.add("secondary")
        }
      }
      if (!isUndefined(this.mainLogin) && this.mainLogin !== null) {
        if (scroll >= 600) {
          this.mainLogin.classList.remove("secondary")
          this.mainLogin.classList.add("primary")
        } else if (scroll < 600) {
          this.mainLogin.classList.remove("primary")
          this.mainLogin.classList.add("secondary")
        }
      }
    })
  }

  /**
   * Binds toggle events for the mobile navigation
   */
  handleToggle() {
    this.toggle.addEventListener("click", (e) => {
      this.doToggle()
    })
  }

  /**
   * Executes toggle events for the mobile navigation
   */
  doToggle() {
    this.nav.classList.toggle("expanded")

    if (
      this.html.classList.contains("docs") ||
      this.body.classList.contains("docs")
    ) {
      this.html.classList.toggle("no-overflow")
      this.body.classList.toggle("no-overflow")
    }
  }

  /**
   * Dismisses the nav when a table of contents
   * link is clicked
   */
  handleTOC() {
    const links = Array.from(this.nav.getElementsByTagName("a")).filter(
      (link) => {
        return link.getAttribute("href").indexOf("#") >= 0
      }
    )

    links.forEach((link) =>
      link.addEventListener("click", (e) => {
        this.doToggle()
      })
    )
  }

  /**
   * Conditionally shows the logged out/logged in
   * nav items, and injects data from the cookie
   */
  signedInState() {
    const user = readCookie("signed_in_user")
    const container = document.querySelector("li[data-user]")
    const toHide = document.querySelectorAll("li[data-signed-out]")
    const toShow = document.querySelectorAll("li[data-signed-in]")

    if (user) {
      const name = decodeURIComponent(user.replace(/\+/g, "%20"))
      const target = container.querySelector("a")

      toHide.forEach((e) => {
        e.setAttribute("data-signed-out", "false")
      })

      toShow.forEach((e) => {
        e.setAttribute("data-signed-in", "true")
      })

      if (target) {
        target.textContent = name
      }
    }
  }
}
