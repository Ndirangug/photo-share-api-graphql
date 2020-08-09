var {photos} = require("./sampleData")

module.exports = {
  totalPhotos: () => photos.length,
  allPhotos: () => photos,
};
