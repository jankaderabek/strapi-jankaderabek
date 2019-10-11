'use strict';

/**
 * Lifecycle callbacks for the `Talks` model.
 */

module.exports = {
  afterCreate: async entry => {
    strapi.services.frontend.buildStaticWebsite();
  },
  afterUpdate: async entry => {
    strapi.services.frontend.buildStaticWebsite();
  },
  afterDestroy: async entry => {
    strapi.services.frontend.buildStaticWebsite();
  },
};
