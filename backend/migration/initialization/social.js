'use strict'

module.exports = (async (model) => {
  try {
    let Social = model.Social;

    await Social.bulkCreate([
      { name: 'wechat' },
      { name: 'weibo' },
      { name: 'facebook' },
      { name: 'instagram' }
    ], {
      ignoreDuplicates: true,
    });
  } catch (err) {
    throw err;
  }
});
