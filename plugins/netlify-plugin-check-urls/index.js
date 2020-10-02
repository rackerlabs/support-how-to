const glob = require('glob');
module.exports = {
    onPostBuild: () => {
        await run.command(`
        grep -Eoi '<a [^>]+>' public/**/*.html |
        grep -Eo 'href="[^\"]+"' | 
        grep -Eo '(http|https)://[^/"]+' > urls.txt |
        go run checkUrls / checkUrls.go urls.txt`);
    }
}