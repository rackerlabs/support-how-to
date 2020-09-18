const fs = require('fs')
fs.writeFileSync('../../.env', `ALGOLIA_APP_ID=${process.env.ALGOLIA_APP_ID}\n`)