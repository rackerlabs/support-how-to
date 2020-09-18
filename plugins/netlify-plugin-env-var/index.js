const algoliasearch = require('algoliasearch');
const fs = require('fs');
const path = require('path');
import * as instantsearch from 'instantsearch.js';

const {
    ALGOLIA_APP_ID: algoliaAppId,
    ALGOLIA_ADMIN_KEY: algoliaAdminKey,
    ALGOLIA_INDEX: algoliaIndex,
    ALGOLIA_SEARCH_KEY: algoliaSearchKey
} = process.env

module.exports = {
    onPostBuild: async ({
        inputs
    }) => {
        if (algoliaAppId === null ||
            algoliaSearchKey === null ||
            algoliaIndex === null ||
            algoliaAdminKey === null) {
            build.failPlugin(
                'Please set your ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY, and ALGOLIA_INDEX using environment variables: https://docs.netlify.com/configure-builds/environment-variables'
            )
        } else {
            try {
                const search = instantsearch({
                    indexName: algoliaIndex,
                    searchClient: algoliasearch(algoliaAppId, algoliaSearchKey),
                    searchFunction(helper) {
                        const hitsContainer = document.querySelector('#hits');
                        const paginationContainer = document.querySelector('#pagination');
                        hitsContainer.style.display = helper.state.query === '' ? 'none' : '';
                        paginationContainer.style.display = helper.state.query === '' ? 'none' : '';
                        helper.search();
                    },
                });
                search.addWidgets([
                    instantsearch.widgets.searchBox({
                        container: '#searchbox',
                        placeholder: '',
                        autofocus: true,
                        showLoadingIndicator: true,
                        searchAsYouType: true,
                        wrapInput: false,
                        magnifier: false,
                        reset: false,
                        poweredBy: false
                    }),
                    instantsearch.widgets.hits({
                        container: '#hits',
                        templates: {
                            item: `
                        <p class="search-product">How-To > {{#helpers.highlight}}{ "attribute": "product" }{{/helpers.highlight}}</p>
                        <h2>
                        <a href="{{ relpermalink }}">
                          {{#helpers.highlight}}{ "attribute": "title" }{{/helpers.highlight}}
                        </a>
                        </h2>
                        <p>{{#helpers.highlight}}{ "attribute": "summary" }{{/helpers.highlight}}</p>
                        <p><span class="search-author">By {{#helpers.highlight}}{ "attribute": "created_by" }{{/helpers.highlight}}</span><span>{{#helpers.highlight}}{ "attribute": "last_modified_date" }{{/helpers.highlight}}</span></p>
                      `,
                        },
                    }),
                    instantsearch.widgets.pagination({
                        container: '#pagination',
                    }),
                ]);

                search.start();
            } catch (err) {
                console.warn(err)
            }
        }
    },
};