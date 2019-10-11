'use strict';

/**
 * Lifecycle callbacks for the `Talks` model.
 */

module.exports = {
  afterCreate: entry => {
    strapi.services.frontend.buildStaticWebsite();
  },
  afterUpdate: entry => {
    strapi.services.frontend.buildStaticWebsite();
  },
  afterDestroy: entry => {
    strapi.services.frontend.buildStaticWebsite();
  },
};
