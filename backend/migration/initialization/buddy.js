'use strict'

module.exports = (async (model) => {
  try {
    let Buddy = model.Buddy;

    let first_buddy = Buddy.build({
      name: 'testbuddy',
    });  
    await first_buddy.save();
  } catch (err) {
    throw err;
  }
});
