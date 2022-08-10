import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useViewport } from "../hooks";
import { getSearchMovies, setMovieDetail } from "../store/action";

const moviesList = [
  "https://lumiere-a.akamaihd.net/v1/images/star-wars-the-rise-of-skywalker-theatrical-poster-1000_ebc74357.jpeg?region=0%2C0%2C891%2C1372&width=480",
  "https://lumiere-a.akamaihd.net/v1/images/solo-theatrical-poster-1000_27861ab7.jpeg?region=0%2C0%2C1000%2C1481&width=480",
  "https://lumiere-a.akamaihd.net/v1/images/the-last-jedi-theatrical-poster-film-page_bca06283.jpeg?region=0%2C0%2C480%2C711",
  "https://lumiere-a.akamaihd.net/v1/images/rogueone_onesheeta_1000_309ed8f6.jpeg?region=0%2C0%2C1000%2C1481&width=480",
  "https://lumiere-a.akamaihd.net/v1/images/avco_payoff_1-sht_v7_lg_32e68793.jpeg?region=0%2C0%2C1620%2C2400&width=480",
  "https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Return-Jedi-VI-Poster_a10501d2.jpeg?region=12%2C9%2C618%2C982&width=480",
  "https://lumiere-a.akamaihd.net/v1/images/Star-Wars-New-Hope-IV-Poster_c217085b.jpeg?region=49%2C43%2C580%2C914&width=480",
  "https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Revenge-Sith-III-Poster_646108ce.jpeg?region=0%2C0%2C736%2C1090&width=480",
];

const useQuery = () => new URLSearchParams(useLocation().search);
const SearchMovies = (props) => {
  const [windowWidth] = useViewport();
  const dispatch = useDispatch();
  // console.log(useLocation().search);
  const { SearchMovies } = useSelector((state) => state.infoMovies);
  const keywords = useQuery().get("keyword");
  console.log(keywords);
  useEffect(() => {
    if (keywords) dispatch(getSearchMovies(keywords));
  }, [keywords, dispatch]);
  console.log(SearchMovies);
  // console.log(useLocation().search);
  return (
    <SerachPane>
      {SearchMovies && SearchMovies.length > 0 ? (
        <div
          className="searchContent"
          style={{
            gridTemplateColumns: `repeat(${
              windowWidth > 1200
                ? 5
                : windowWidth > 992
                ? 4
                : windowWidth > 768
                ? 3
                : windowWidth > 600
                ? 2
                : 1
            },auto)`,
          }}
        >
          {SearchMovies.map((movie, index) => {
            if (movie.backdrop_path !== null && movie.media_type !== "person") {
              const imgUrl = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
              return (
                <div
                  key={index}
                  className="movieItem"
                  onClick={() => dispatch(setMovieDetail(movie))}
                >
                  <img src={imgUrl} alt={movie.title || movie.name} />
                  <span>{movie.title || movie.name}</span>
                </div>
              );
            }
          })}
        </div>
      ) : (
        <NotFound>
          <h2>Your search for "" did not have any matches</h2>
        </NotFound>
      )}
    </SerachPane>
  );
};

export default SearchMovies;

const SerachPane = styled.div`
  width: 100%;
  min-height: 92vh;
  padding-top: 80px;
  background: var(--color-background);
  transition: all 0.3s linear;

  .searchContent {
    padding: 40px 60px;
    display: grid;
    gap: 8px;

    &:hover .movieItem {
      opacity: 0.7;
    }
    .movieItem {
      position: relative;
      max-width: 400px;
      width: 100%;
      height: 200px;
      border-radius: 15px;
      margin: 20px 0;
      overflow: hidden;
      transform: scale(1);
      transition: all 0.3s linear;

      &:hover {
        transform: scale(1.2);
        z-index: 10;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      span {
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        text-align: center;
        padding: 4px;
        background: rgba(0, 0, 0, 0.5);
        color: var(--color-white);
        font-weight: bold;
      }
    }
  }
`;
const NotFound = styled.div`
  padding: 5rem 8rem;
  color: var(--color-white);
`;
