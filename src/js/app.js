import contentLoaded from "content-loaded";
import SmoothScroll from "./imports/smoothScroll";
const Entities = require('html-entities').AllHtmlEntities;


contentLoaded().then(() => {
  (function(){var g=function(e,h,f,g){
    this.get=function(a){for(var a=a+"=",c=document.cookie.split(";"),b=0,e=c.length;b<e;b++){for(var d=c[b];" "==d.charAt(0);)d=d.substring(1,d.length);if(0==d.indexOf(a))return d.substring(a.length,d.length)}return null};
    this.set=function(a,c){var b="",b=new Date;b.setTime(b.getTime()+6048E5);b="; expires="+b.toGMTString();document.cookie=a+"="+c+b+"; path=/; "};
    this.check=function(){var a=this.get(f);if(a)a=a.split(":");else if(100!=e)"v"==h&&(e=Math.random()>=e/100?0:100),a=[h,e,0],this.set(f,a.join(":"));else return!0;var c=a[1];if(100==c)return!0;switch(a[0]){case "v":return!1;case "r":return c=a[2]%Math.floor(100/c),a[2]++,this.set(f,a.join(":")),!c}return!0};
    this.go=function(){if(this.check()){var a=document.createElement("script");a.type="text/javascript";a.src=g;document.body&&document.body.appendChild(a)}};
    this.start=function(){var t=this;"complete"!==document.readyState?window.addEventListener?window.addEventListener("load",function(){t.go()},!1):window.attachEvent&&window.attachEvent("onload",function(){t.go()}):t.go()};};
    try{(new g(100,"r","QSI_S_ZN_7WEcCqVEECKBeIt","https://zn7weccqveeckbeit-rackspaceinc.siteintercept.qualtrics.com/SIE/?Q_ZID=ZN_7WEcCqVEECKBeIt")).start()}catch(i){}})();
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
              const entities = new Entities();
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
                    <span class="search-date">${hit.last_modified_date}</span> 
                </div>
              </div>
            </li>`;
                return entities.decode(renderHTML);
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
        escapeHTML: true
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
            title: item.title.toUpperCase(),
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