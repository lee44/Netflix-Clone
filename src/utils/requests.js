const API_KEY = "04ae7689fc21853d7db93ebc5e887fa0";

const requests = {
  fetchMovies: `discover/movie?api_key=${API_KEY}`,
  trending: `trending/all/day?api_key=${API_KEY}&language=en-US`,
  top_rated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  action: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  comedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  horror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  romance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  documentary: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
// https://api.themoviedb.org/3/movie/550?api_key=04ae7689fc21853d7db93ebc5e887fa0
