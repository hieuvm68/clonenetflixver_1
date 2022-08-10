import axios from "axios";
import * as Types from "../type";
const API_KEY = "56c899ce630c4a1edf84724aeecabe75";
const BASE_URL = "https://api.themoviedb.org/3";

export const getNetflixOriginals = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`
    );
    dispatch({
      type: Types.GET_NETFLIX_ORIGINALS,
      payload: result.data.results,
    });
    // console.log("day laf store/action", result.data.results);
  } catch (err) {
    console.log("Get netflix original API erro: ", err);
  }
};

export const getTrending = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-us`
    );
    dispatch({
      type: Types.GET_TRENDING_MOVIES,
      payload: result.data.results,
    });
  } catch (err) {
    console.log("Get trending API erro: ", err);
  }
};

export const getTopRated = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-us`
    );
    dispatch({
      type: Types.GET_TOP_RATRED_MOVIES,
      payload: result.data.results,
    });
  } catch (err) {
    console.log("Get top rated API erro: ", err);
  }
};

export const getActionMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`
    );
    dispatch({
      type: Types.GET_ACTION_MOVIES,
      payload: result.data.results,
    });
  } catch (err) {
    console.log("Get action API erro: ", err);
  }
};

export const getComedyMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&with_genres=35`
    );
    dispatch({
      type: Types.GET_COMEDY_MOVIES,
      payload: result.data.results,
    });
  } catch (err) {
    console.log("Get comedy API erro: ", err);
  }
};
export const getHorrorMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&with_genres=27`
    );
    dispatch({
      type: Types.GET_HORROR_MOVIES,
      payload: result.data.results,
    });
  } catch (err) {
    console.log("Get horror API erro: ", err);
  }
};

export const getRomanceMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&with_genres=10749`
    );
    dispatch({
      type: Types.GET_ROMANCE_MOVIES,
      payload: result.data.results,
    });
  } catch (err) {
    console.log("Get Romance API erro: ", err);
  }
};
export const getWarMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&with_genres=10752`
    );
    dispatch({
      type: Types.GET_WAR_MOVIES,
      payload: result.data.results,
    });
    console.log("dayla action", result.data.results);
  } catch (err) {
    console.log("Get Document API erro: ", err);
  }
};

export const setMovieDetail = (movie) => (dispatch) => {
  dispatch({ type: Types.SET_MOVIE_DETAIL, payload: movie });
};

export const getSearchMovies = (keywords) => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&include_adult=false&query=${keywords}`
    );
    dispatch({
      type: Types.GET_SEARCH_MOVIES,
      payload: result.data.results,
    });
    console.log("dayla action2", result.data.results);
  } catch (err) {
    console.log("Get Search MoviesAPI erro: ", err);
  }
};
