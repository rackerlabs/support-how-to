import React from 'react';
import ReactDOM from 'react-dom';
import App from './imports/App';
// import contentLoaded from 'content-loaded';
ReactDOM.render(<App />, document.getElementById('search'));

// contentLoaded().then(() => { 
//     try {
//         var atomicalgolia = require("atomic-algolia");
//         var indexName = ALGOLIA_INDEX_NAME
//         var indexPath = "../public/algolia.json"
//         var cb = function(error, result) {
//             if (err) throw error

//             console.log(result)
//         }

//         atomicalgolia(indexName, indexPath, cb)
//     } catch (err) {
//         console.warn(err);
//     }
// });