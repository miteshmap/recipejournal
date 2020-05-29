'use strict';

const slugify = require('slugify');

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/models.html#life-cycle-callbacks)
 * to customize this model
 */

module.exports = {
  beforeSave: async (model, attrs, options) => {
    console.log(options.method);
    console.log(attrs.title);
    if (options.method === 'insert' && attrs.title) {
      model.set('slug', slugify(attrs.title));
    } else if (options.method === 'update' && attrs.title) {
      attrs.slug = slugify(attrs.title);
    }
  },
};
