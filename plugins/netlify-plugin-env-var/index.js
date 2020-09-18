module.exports = {
    onPreBuild: async ({ inputs }) => {
        const { CONTEXT } = process.env;
        const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
        console.log(CONTEXT);
        console.log(ALGOLIA_APP_ID);
        const context = process.env.CONTEXT.toUpperCase().replace(/-/g, '_');
        Object.keys(process.env).forEach(key => {
        const envVar = `${context}_${key}`
        const val = process.env[envVar]
        if (process.env[envVar]) {
            console.log(`Exporting ${key}=${val}.`);
            process.env[key] = val
        }
    });
    },
  };