var angular = require("angular")

var moduleName = "drc.app"
module.exports = moduleName

angular.module(moduleName, [
  require("angular-sanitize"),
  require("./components/code-sample"),
  require("./components/code-sample-parent"),
  require("./components/collapsible-nav"),
  require("./components/collapsible-section"),
  require("./components/database-jump"),
  require("./components/dropdown-toggle"),
  require("./components/flex-height"),
  require("./components/global-sidebar"),
  require("./components/headline-typer"),
  require("./components/language-selector"),
  require("./components/rack-cli-graphic").name,
  require("./components/scroll-indicator"),
  require("./components/sticky"),
  require("./controllers/blog-sidebar"),
  require("./controllers/docs-home-services"),
  require("./controllers/docs-home-sidebar"),
  require("./controllers/carina-signup-form"),
  require("./controllers/upcoming-events").name,
  require("./services/active-language"),
  require("./services/filter"),
])

angular.bootstrap(document, [moduleName])
