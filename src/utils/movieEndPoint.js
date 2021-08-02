const API_KEY = "b68d2154a7bfc8057efc05238ad11578";

// Must match initial state of mediaSlice
const movieEndPoint = {
  originals: `/discover/movie?api_key=${API_KEY}&with_networks=213`,
  trending: `trending/movie/day?api_key=${API_KEY}&language=en-US`,
  top_rated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  action: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  comedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  horror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  romance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  documentary: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

// https://api.themoviedb.org/3/discover/tv?api_key=b68d2154a7bfc8057efc05238ad11578
export default movieEndPoint;
