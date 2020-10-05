const { exec } = require('child_process');
module.exports = {
    onPostBuild: () => {
    console.log('Adding Link checker');
    }
}