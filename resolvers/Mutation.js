var {_id, photos} = require("./sampleData")

module.exports = {
  postPhoto(parent, args, {pubsub}) {
    var newPhoto = {
      id: _id++,
      ...args.input,
      created: new Date(),
    };
    photos.push(newPhoto);

    pubsub.publish('photo-added', { newPhoto })

    return newPhoto;
  },

};
