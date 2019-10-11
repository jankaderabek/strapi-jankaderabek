'use strict';

/**
 * Lifecycle callbacks for the `Talks` model.
 */

module.exports = {
  afterCreate: async entry => {
    await strapi.services.frontend.buildStaticWebsite();
  },
  afterUpdate: async entry => {
    await strapi.services.frontend.buildStaticWebsite();
  },
  afterDestroy: async entry => {
    await strapi.services.frontend.buildStaticWebsite();
  },
};
