const algoliasearch = require('algoliasearch');
const instantsearch = require('instantsearch.js');
const fs = require('fs');
const path = require('path');

const {
    ALGOLIA_APP_ID: algoliaAppId,
    ALGOLIA_ADMIN_KEY: algoliaAdminKey,
    ALGOLIA_INDEX: algoliaIndex,
    ALGOLIA_SEARCH_KEY: algoliaSearchKey
} = process.env
console.log({
    ALGOLIA_APP_ID,
    ALGOLIA_ADMIN_KEY,
    ALGOLIA_INDEX,
    ALGOLIA_SEARCH_KEY
})

module.exports = {
    onPostBuild: async (opts) => {
        const {
            inputs: {
              // custom stopwords to remove from text body, removed before textLength limit applied
              stopwords = [],
              // leave space for keywords and meta - algolia has a 10k byte limit per object
              textLength = 7000,
              // paths to exclude from glob before parse
              exclude = [],
              // output filename
              debugMode,
            },
            constants: { PUBLISH_DIR },
            utils: { build }
          } = opts
      
        if (algoliaAppId === null ||
            algoliaSearchKey === null ||
            algoliaIndex === null ||
            algoliaAdminKey === null) {
            build.failPlugin(
                'Please set your ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY, and ALGOLIA_INDEX using environment variables: https://docs.netlify.com/configure-builds/environment-variables'
            )
        } else {
            try {
                const client = algoliasearch(algoliaAppId, algoliaAdminKey)
                const index = client.initIndex(algoliaIndex)
                // await exporter(index, newIndex)
            } catch (err) {
                      // Not exporting to search index doesn't fail the entire build
                build.failPlugin('Export to Algolia failed', { err })
            }
        }
    },
};