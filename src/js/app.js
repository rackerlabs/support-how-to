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
            (hit) => {
              let renderHTML = ``;
              if (hit.product_url != null && hit.created_by != null && hit.created_by != '' && hit.created_date != null && !hit.permalink.includes('all-articles')) {
                renderHTML += `<li class="hit-item-single">
                <div class="row">
                  <div class="col-sm-12">
                    <p class="search-product">
                      <a class="search-product-link" href="/support/how-to/">How-To</a> &nbsp; > &nbsp; <a class="search-product-link" href=/support/how-to/${hit.product_url}>${hit.product}</a>
                    </p> 
                    <h2>
                      <a class="search-title" href=/support/how-to/${hit.permalink}>${instantsearch.highlight({ attribute: 'title', hit })}</a>
                    </h2>
                    <a class="search-summary-link" href=/support/how-to/${hit.permalink}>
                      <p class="search-summary">${instantsearch.highlight({ attribute: 'content', hit })}</p>
                    </a>
                    <span class="search-author" > By &nbsp; ${instantsearch.highlight({ attribute: 'created_by', hit })}</span>
                    <span class="search-date">${hit.created_date}</span> 
                </div>
              </div>
            </li>`;
                return renderHTML;
              } else {
                return `<span></span>`;
              }
            }
          )
          .join('');
      }
    );
    const renderStats = (renderOptions, isFirstRender) => {
      const {
        nbHits,
        widgetParams
      } = renderOptions;

      if (isFirstRender) {
        return;
      }

      let count = '';
      if (nbHits > 1) {
        count += `<p class="results-p">${nbHits} results found</p>`;
      } else if (nbHits === 1) {
        count += `<p>1 result found</p>`;
      } else {
        count += `<p class="no-results-p1">No results found</p>
        <p class="no-results-p2">It seems we can’t find any results based on your search.</p>`;
      }
      widgetParams.container.innerHTML = `${count}`;
    };

    // Create the custom widget
    const customStats = instantsearch.connectors.connectStats(renderStats);
    const search = instantsearch({
      indexName: ALGOLIA_SUPPORT_INDEX,
      searchClient: algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SEARCH_KEY),
      searchFunction(helper) {
        const hitsContainer = document.querySelector('#hits');
        const paginationContainer = document.querySelector('#pagination');
        const statsContainer = document.querySelector('#stats');
        hitsContainer.style.display = helper.state.query === '' ? 'none' : '';
        paginationContainer.style.display = helper.state.query === '' ? 'none' : '';
        statsContainer.style.display = helper.state.query === '' ? 'none' : '';
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
        poweredBy: false,
        escapeHTML: false
      }),
      instantsearch.widgets.configure({
        attributesToHighlight: [
          'content:160',
          'title',
          'created_by'
        ],
        attributesToRetrieve: [
          '*'
        ]
      }),
      infiniteHits({
        container: document.querySelector('#hits'),
        transformItems(items) {
          return items.map(item => ({
            ...item,
            content: item.content.toLowerCase(),
          }));
        }
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
  SmoothScroll();

})