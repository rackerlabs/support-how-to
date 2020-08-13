/* global instantsearch algoliasearch */

const search = instantsearch({
  indexName: 'support',
  searchClient: algoliasearch('KL3UEHFLE7', '442a13294aef7a44bf8206e3a4830875'),
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.clearRefinements({
    container: '#clear-refinements',
  }),
  instantsearch.widgets.refinementList({
    container: '#brand-list',
    attribute: 'brand',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
        <div>
          <img src="{{image}}" align="left" alt="{{name}}" />
          <div class="hit-name">
            {{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}
          </div>
          <div class="hit-description">
            {{#helpers.highlight}}{ "attribute": "description" }{{/helpers.highlight}}
          </div>
          <div class="hit-price">\${{price}}</div>
        </div>
      `,
    },
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();
