console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

exports.omdb={
  apikey:process.env.apikey
};

exports.bands = {
  id:process.env.Band_id
};