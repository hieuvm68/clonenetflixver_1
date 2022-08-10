import * as Type from "../type";

const reducerMoviesInitiable = {
  NetflixOriginals: null,
  TrendingMovies: null,
  TopRatedMovies: null,
  ActionMovies: null,
  ComedyMovies: null,
  HorrorMovies: null,
  RomanceMovies: null,
  Documentairies: null,
  MovieDetail: null,
  SearchMovies: null,
};
const reducerMovies = (state = reducerMoviesInitiable, action) => {
  const { type, payload } = action;
  switch (type) {
    case Type.GET_NETFLIX_ORIGINALS:
      // console.log(payload);
      return { ...state, NetflixOriginals: payload };
    case Type.GET_TRENDING_MOVIES:
      return { ...state, TrendingMovies: payload };
    case Type.GET_TOP_RATRED_MOVIES:
      return { ...state, TopRatedMovies: payload };
    case Type.GET_ACTION_MOVIES:
      return { ...state, ActionMovies: payload };
    case Type.GET_COMEDY_MOVIES:
      return { ...state, ComedyMovies: payload };
    case Type.GET_HORROR_MOVIES:
      return { ...state, HorrorMovies: payload };
    case Type.GET_ROMANCE_MOVIES:
      return { ...state, RomanceMovies: payload };
    case Type.GET_WAR_MOVIES:
      console.log("day laf phiim war", payload);
      return { ...state, War: payload };
    case Type.SET_MOVIE_DETAIL:
      return { ...state, MovieDetail: payload };
    case Type.GET_SEARCH_MOVIES:
      console.log("daylaf searc", payload);
      return { ...state, SearchMovies: payload };
    default:
      return state;
  }
};
export default reducerMovies;
