const searchClient = algoliasearch('', '');

const search = instantsearch({
  indexName: 'blog',
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),

  instantsearch.widgets.hits({
    container: '#hits',
  })
]);

search.start();