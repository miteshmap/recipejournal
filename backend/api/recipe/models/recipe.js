const slugify = require('slugify');

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/models.html#life-cycle-callbacks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    async beforeUpdate(param, data) {
      if (data.title) {
        data.slug = slugify(data.title, {lower: true});
      }
    },
  }
};
