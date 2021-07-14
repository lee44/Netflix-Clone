const API_KEY = "b68d2154a7bfc8057efc05238ad11578";

const requests = {
  originals: {
    movies: `/discover/movie?api_key=${API_KEY}&with_networks=213`,
    tv: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  },
  trending: {
    movies: `trending/movie/day?api_key=${API_KEY}&language=en-US`,
    tv: `trending/tv/day?api_key=${API_KEY}&language=en-US`,
  },
  top_rated: {
    movies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    tv: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  action: {
    movies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    tv: `/discover/tv?api_key=${API_KEY}&with_genres=28`,
  },
  comedy: {
    movies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    tv: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  },
  horror: {
    movies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    tv: `/discover/tv?api_key=${API_KEY}&with_genres=27`,
  },
  romance: {
    movies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    tv: `/discover/tv?api_key=${API_KEY}&with_genres=27`,
  },
  documentary: {
    movies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    tv: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
  },
};

// https://api.themoviedb.org/3/discover/tv?api_key=b68d2154a7bfc8057efc05238ad11578
export default requests;
