'use strict';

/**
 * jobs service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::job.job');
