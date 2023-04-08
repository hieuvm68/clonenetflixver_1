import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MoviesDetail from "../MoviesDetail/MoviesDetail";
import SearchMovies from "../SearchMovies/SearchMovies";

const Search = (props) => {
  const { MovieDetail } = useSelector((state) => state.infoMovies);
  const [isShowMovieDetail, setIsShowMovieDetail] = useState(false);
  useEffect(() => {
    setIsShowMovieDetail(MovieDetail ? false : true);
  }, [MovieDetail]);
  return (
    <div>
      <SearchMovies />
      <MoviesDetail movie={MovieDetail} showModal={isShowMovieDetail} />
    </div>
  );
};

export default Search;
