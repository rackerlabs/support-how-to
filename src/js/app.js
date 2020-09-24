import contentLoaded from "content-loaded";
import SmoothScroll from "./imports/smoothScroll";


contentLoaded().then(() => {
  /**
   * Enable search
   */
  try {
    let lastRenderArgs;

    const infiniteHits = instantsearch.connectors.connectInfiniteHits(
      (renderArgs, isFirstRender) => {
        const {
          hits,
          showMore,
          widgetParams
        } = renderArgs;
        const {
          container
        } = widgetParams;

        lastRenderArgs = renderArgs;

        if (isFirstRender) {
          const sentinel = document.createElement('div');
          container.appendChild(document.createElement('ul'));
          container.appendChild(sentinel);
          const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting && !lastRenderArgs.isLastPage) {
                showMore();
              }
            });
          });

          observer.observe(sentinel);

          return;
        }

        container.querySelector('ul').innerHTML = hits
          .map(
            hit =>
            `<li class="hit-item-single">
              <div class="row">
                <div class="col-sm-12">
                  <p class="search-product">
                    <a class="search-product-link" href="/support/how-to/">How-To</a> &nbsp; > &nbsp; <a class="search-product-link" href=/support/how-to/${hit.product_url}>${hit.product}</a>
                  </p> 
                  <h2>
                    <a class="search-title" href=/support{{ attribute: 'relpermalink', hit }}>${instantsearch.highlight({ attribute: 'title', hit })}</a>
                  </h2>
                  <a class="search-summary-link" href = /support{{ attribute: 'relpermalink', hit }}>
                    <p class="search-summary">${instantsearch.highlight({ attribute: 'summary', hit })}</p>
                  </a>
                  <span class="search-author" > By &nbsp; ${instantsearch.highlight({ attribute: 'created_by', hit })}</span>
                  <span class="search-date">${hit.created_date}</span> 
              </div>
            </div>
          </li>`
          )
          .join('');
      }
    );
    const renderStats = (renderOptions, isFirstRender) => {
      const {
        nbHits,
        processingTimeMS,
        query,
        widgetParams
      } = renderOptions;

      if (isFirstRender) {
        return;
      }

      let count = '';
      if (nbHits > 1) {
        count += `${nbHits} results`;
      } else if (nbHits === 1) {
        count += `1 result`;
      } else {
        count += `no result`;
      }

      widgetParams.container.innerHTML = `
    ${count} found in ${processingTimeMS}ms
    ${query ? `for <q>${query}</q>` : ''}
  `;
    };

    // Create the custom widget
    const customStats = instantsearch.connectors.connectStats(renderStats);
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
      infiniteHits({
        container: document.querySelector('#hits')
      }),
      customStats({
        container: document.querySelector('#stats'),
      })
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