
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
          item: function (data) {
            let returnResult = '';
            if (data.product) {
              returnResult = returnResult + `<p class="search-product">How-To &nbsp; > 	&nbsp; ` + data._highlightResult.product.value + `</p>`;
            } else {
              returnResult += `<span></span>`;
            }
            if (data.title) {
              returnResult = returnResult + `<h2>
              <a href="{{ relpermalink }}" class="search-title">`
                +data._highlightResult.title.value+
              `</a>
              </h2>`;
            } else {
              returnResult += `<span></span>`;
            }
            if (data.summary) {
              returnResult = returnResult + `<p class="search-summary">` + data._highlightResult.summary.value + `</p>`;
            } else {
              returnResult += `<span></span>`;
            }
            if (data.created_by) {
              returnResult = returnResult + `<span class="search-author"> By &nbsp;`+ data._highlightResult.created_by.value + `</span>`
            } else {
              returnResult += `<span></span>`;
            }
            if (data.created_date) {
              returnResult = returnResult + `<span class="search-date">`+data._highlightResult.created_date.value + `</span>`
            } else {
              returnResult += `<span></span>`;
            }
            return returnResult;
          }
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