const { exec } = require('child_process');
module.exports = {
    onPostBuild: () => {
        exec(`
        grep -Eoi '<a [^>]+>' public/**/*.html |
        grep -Eo 'href="[^\"]+"' | 
        grep -Eo '(http|https)://[^/"]+' > urls.txt |
        go run checkUrls / checkUrls.go urls.txt`);
    }
}