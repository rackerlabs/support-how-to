
import contentLoaded from "content-loaded";
import SmoothScroll from "./imports/smoothScroll";


contentLoaded().then(() => {
  /**
   * Enable search
   */
  try {
    const search = instantsearch({
      indexName: ALGOLIA_SUPPORT_INDEX,
      searchClient: algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SEARCH_KEY),
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
  /**
   * Actvate smooth scrolling for the entire
   * website for hash links
   */
  SmoothScroll()

})