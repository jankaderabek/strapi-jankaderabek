'use strict';

const axios = require('axios');

/**
 * Lifecycle callbacks for the `Talks` model.
 */

module.exports = {
  afterCreate: entry => {
    strapi.services.frontend.buildStaticWebsite();
  },
  afterUpdate: entry => {
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
  },
  afterDestroy: entry => {
    strapi.services.frontend.buildStaticWebsite();
  },
};
