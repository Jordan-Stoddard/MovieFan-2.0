import React from "react";
import Slider from "react-slick";
import { useGetTopic } from "../../dummy-api/fetchingHooks";
import {
  setCarouselSlidesOnWidth,
  windowWidth
} from "../../helper-functions/displayFunctions";
import MovieSlide from "./MovieSlide";

// Renders the small carousel's used on home page

export default function SmallMovieCarousel({ topic, genre, media }) {
  const getMovies = useGetTopic(topic);

  return (
    <div className="small-carousel">
      <h2 className="small-carousel-genre">{genre}</h2>
      <Slider
        slidesToShow={setCarouselSlidesOnWidth(windowWidth())}
        infinite
        className="center"
        swipeToSlide
      >
        {getMovies.map(movie => (
          <MovieSlide movie={movie} key={movie.id} media={media} />
        ))}
      </Slider>
    </div>
  );
}
