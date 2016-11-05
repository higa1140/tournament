const ghDeploy = require('./github-deploy');
const ghpages = require('gh-pages');

/**
 * Webpack Constants
 */
const GIT_REMOTE_NAME = 'origin';
const COMMIT_MESSAGE = 'Updates';
const GH_REPO_NAME = ghDeploy.getRepoName(GIT_REMOTE_NAME);



module.exports = function(baseUrl, publicPath, outputPath){
    return{
    baseUrl :'/' + GH_REPO_NAME + '/' + ghDeploy.safeUrl(baseUrl),
    publicPath : '/' + GH_REPO_NAME + '/' + ghDeploy.safeUrl(publicPath),
    plugins : [
    function() {
      this.plugin('done', function(stats) {
        console.log('Starting deployment to GitHub.');

        const logger = function (msg) {
          console.log(msg);
        };

        const options = {
          logger: logger,
          remote: GIT_REMOTE_NAME,
          message: COMMIT_MESSAGE
        };

        ghpages.publish(outputPath, options, function(err) {
          if (err) {
            console.log('GitHub deployment done. STATUS: ERROR.');
            throw err;
          } else {
            console.log('GitHub deployment done. STATUS: SUCCESS.');
          }
        });
      });
    }
  ]  
}
};