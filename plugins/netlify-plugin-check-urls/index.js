const { exec } = require('child_process');
module.exports = {
    onPostBuild: () => {
        const grep = exec(`grep -Eoi '<a [^>]+>' public/**/*.html |
        grep -Eo 'href="[^\"]+"' | 
        grep -Eo '(http|https)://[^/"]+' > urls.txt |
        go run checkUrls/checkUrls.go urls.txt`, function (error, stdout, stderr) {
            if (error) {
              console.log(error.stack);
              console.log('Error code: '+error.code);
              console.log('Signal received: '+error.signal);
            }
            console.log('Child Process STDOUT: '+stdout);
            console.log('Child Process STDERR: '+stderr);
          });
          grep.on('exit', function (code) {
            console.log('Child process exited with exit code '+code);
          });
        // exec(`
        // grep -Eoi '<a [^>]+>' public/**/*.html |
        // grep -Eo 'href="[^\"]+"' | 
        // grep -Eo '(http|https)://[^/"]+' > urls.txt |
        // go run checkUrls / checkUrls.go urls.txt`);
    }
}