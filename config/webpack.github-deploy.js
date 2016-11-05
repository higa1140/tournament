/**
 * @author: @AngularClass
 */
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const webpackConfig = require('./webpack.dev.js')();
const githubCommon = require('./webpack.github-deploy.common.js')(webpackConfig.metadata.baseUrl,webpackConfig.output.publicPath, webpackConfig.output.path);

 const METADATA = webpackMerge(webpackConfig.metadata, {
  /**
   * Prefixing the REPO name to the baseUrl for router support.
   * This also means all resource URIs (CSS/Images/JS) will have this prefix added by the browser
   * unless they are absolute (start with '/'). We will handle it via `output.publicPath`
   */
   baseUrl: githubCommon.baseUrl
 });

module.exports = function(){return webpackMerge(webpackConfig, {
  /**
   * Merged metadata from webpack.common.js for index.html
   *
   * See: (custom attribute)
   */
  metadata: METADATA,


  output: {
    /**
     * The public path is set to the REPO name.
     *
     * `HtmlElementsPlugin` will add it to all resources url's created by it.
     * `HtmlWebpackPlugin` will add it to all webpack bundels/chunks.
     *
     * In theory publicPath shouldn't be used since the browser should automatically prefix the
     * `baseUrl` into all URLs, however this is not the case when the URL is absolute (start with /)
     *
     * It's important to prefix & suffix the repo name with a slash (/).
     * Prefixing so every resource will be absolute (otherwise it will be url.com/repoName/repoName...
     * Suffixing since chunks will not do it automatically (testes against about page)
     */
    publicPath: githubCommon.publicPath
  },

  plugins: githubCommon.plugins
});
}