'use strict';

const axios = require('axios');

/**
 * `Frontend` service.
 */

module.exports = {
  buildStaticWebsite: () => {
    axios
      .post(strapi.config.currentEnvironment.staticWebsiteBuildURL, {'event_type': 'deploy'}, {
        headers: {
          Accept: 'application/vnd.github.everest-preview+json',
          Authorization: `token ${strapi.config.currentEnvironment.staticWebsiteBuildURL}`
        }
      })
      .catch(() => {
        // Ignore
      });
  }
};
