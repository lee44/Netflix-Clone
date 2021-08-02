const API_KEY = "b68d2154a7bfc8057efc05238ad11578";

// Must match initial state of mediaSlice
const tvEndPoint = {
  originals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  trending: `trending/tv/day?api_key=${API_KEY}&language=en-US`,
  top_rated: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
  action: `/discover/tv?api_key=${API_KEY}&with_genres=10759`,
  comedy: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  horror: `/discover/tv?api_key=${API_KEY}&with_genres=9648`,
  romance: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
  documentary: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
};

// https://api.themoviedb.org/3/discover/tv?api_key=b68d2154a7bfc8057efc05238ad11578
export default tvEndPoint;
