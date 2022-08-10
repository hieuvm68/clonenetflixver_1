import React from "react";
import MoviesRow from "./MoviesRow";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowCircleUp } from "react-icons/fa";
import { useEffect } from "react";
import { useScrollY } from "../hooks";
import {
  getNetflixOriginals,
  getTrending,
  getTopRated,
  getActionMovies,
  getComedyMovies,
  getHorrorMovies,
  getRomanceMovies,
  getWarMovies,
} from "../store/action";
import { animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
// const movies = [
//   "https://lumiere-a.akamaihd.net/v1/images/star-wars-the-rise-of-skywalker-theatrical-poster-1000_ebc74357.jpeg?region=0%2C0%2C891%2C1372&width=480",
//   "https://lumiere-a.akamaihd.net/v1/images/solo-theatrical-poster-1000_27861ab7.jpeg?region=0%2C0%2C1000%2C1481&width=480",
//   "https://lumiere-a.akamaihd.net/v1/images/the-last-jedi-theatrical-poster-film-page_bca06283.jpeg?region=0%2C0%2C480%2C711",
//   "https://lumiere-a.akamaihd.net/v1/images/rogueone_onesheeta_1000_309ed8f6.jpeg?region=0%2C0%2C1000%2C1481&width=480",
//   "https://lumiere-a.akamaihd.net/v1/images/avco_payoff_1-sht_v7_lg_32e68793.jpeg?region=0%2C0%2C1620%2C2400&width=480",
//   "https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Return-Jedi-VI-Poster_a10501d2.jpeg?region=12%2C9%2C618%2C982&width=480",
//   "https://lumiere-a.akamaihd.net/v1/images/Star-Wars-New-Hope-IV-Poster_c217085b.jpeg?region=49%2C43%2C580%2C914&width=480",
//   "https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Revenge-Sith-III-Poster_646108ce.jpeg?region=0%2C0%2C736%2C1090&width=480",
// ];

const ScrollToTop = () => {
  scroll.scrollToTop();
};
const Contents = (props) => {
  const dispatch = useDispatch();
  const [scrollY] = useScrollY();
  const {
    NetflixOriginals,
    TrendingMovies,
    TopRatedMovies,
    ActionMovies,
    ComedyMovies,
    HorrorMovies,
    RomanceMovies,
    War,
  } = useSelector((state) => state.infoMovies);

  useEffect(() => {
    dispatch(getNetflixOriginals());
    dispatch(getTrending());
    dispatch(getTopRated());
    dispatch(getActionMovies());
    dispatch(getComedyMovies());
    dispatch(getHorrorMovies());
    dispatch(getRomanceMovies());
    dispatch(getWarMovies());
    // console.log("day la:", NetflixOriginals);
  }, [dispatch]);

  return (
    <div>
      <MoviesRow
        idSection="netflix"
        movies={NetflixOriginals}
        title="Netflix Original"
        isNetflix={true}
      />
      <MoviesRow
        idSection="trending"
        movies={TrendingMovies}
        title="Trending Movies"
      />
      <MoviesRow
        idSection="topRated"
        movies={TopRatedMovies}
        title="Top Rated Movies"
      />
      <MoviesRow
        idSection="action"
        movies={ActionMovies}
        title="Actions Movies"
      />
      <MoviesRow
        idSection="comedy"
        movies={ComedyMovies}
        title="Comedy Movies"
      />
      <MoviesRow
        idSection="horror"
        movies={HorrorMovies}
        title="Horror Movies"
      />
      <MoviesRow
        idSection="romance"
        movies={RomanceMovies}
        title="Romace Movies"
      />
      <MoviesRow idSection="war" movies={War} title="War Movies" />
      <GoToTop
        onClick={() => ScrollToTop()}
        style={{
          visibility: `${scrollY > 600 ? "visible" : "hidden"}`,
        }}
      >
        <FaArrowCircleUp />
      </GoToTop>
    </div>
  );
};

export default Contents;

const GoToTop = styled.div`
  position: fixed;
  z-index: 10;
  right: 70px;
  bottom: 50px;
  font-size: 50px;
  color: rgba(255, 255, 255, 0.4);
  transition: all 0.3s linear;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
  @media screen and (max-width: 600px) {
    right: 40px;
  }
`;
