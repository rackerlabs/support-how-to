const TapRender = require('@munter/tap-render');
const hyperlink = require('hyperlink');
const spot = require('tap-spot');
const globby = require('globby');

const canonicalRoot = process.env.URL;
console.log('root:: ', canonicalRoot);

module.exports = {
  onPostBuild: async ({
    constants: { PUBLISH_DIR },
    inputs: {
      entryPoints,
      // skipPatterns,
      // todoPatterns,
      checkExternal,
      pretty
    },
    utils: {
      build: { failBuild },
    },
  }) => {
    /** @type {string} */
    const root = process.env.URL;
    console.log('publish dir:: ', root);

    // /** @type {FilterFunction} */
    // const skipFilter = (report) =>
    //   Object.values(report).some((value) => {
    //     console.log('value:: ', value);
    //     skipPatterns.some((pattern) => {
    //       console.log("report:: ", report);
    //       console.log('pattern:: ', pattern);
    //       String(value).includes(pattern)
    //     })
    //   }
    //   );
    
    // console.log('skipFilter:: ', skipFilter);

    // /** @type {FilterFunction} */
    // const todoFilter = (report) =>
    //   Object.values(report).some((value) =>
    //     todoPatterns.some((pattern) => String(value).includes(pattern))
    //   );

    const t = new TapRender();

    if (pretty) {
      t.pipe(spot()).pipe(process.stdout);
    } else {
      t.pipe(process.stdout);
    }

    await hyperlink(
      {
        root: root,
        canonicalRoot: canonicalRoot,
        internalOnly: !checkExternal,
        pretty: true
      },
      t
    );

    const results = t.close();
    console.log('results:: ', results);

    if (results.fail) {
      return failBuild('Links checking failed');
    }
    return results;
  },
};
