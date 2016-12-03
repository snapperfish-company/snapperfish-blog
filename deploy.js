var ghpages = require('gh-pages');
var path = require('path');

var repo = 'https://github.com/snapperfish-company/snapperfish-company.github.io.git';

function callback() {
  console.log('Deployed!!');
}

ghpages.publish(path.join(__dirname, 'public'), {
  repo: repo,
  branch: 'master',
}, callback);