import React from "react";

// Styles found in _homePageStyles
// Direct parent component: Home

const HomeJumbotron = props => {
  return (
    <div>
      <div className="home-jumbotron">
        <div className="jumbo-text-container">
          <h1 className="display-3">MovieFan</h1>
          <br />
          <p className="lead jumbotron-catchphrase">
            Explore. Discover. Remember.
          </p>
          <br />
          <p className="lead lead2">
            MovieFan allows you to browse movies from top rated to upcoming,
            from old favorites to the newest releases.
          </p>
        </div>

        <div
          className="jumbo-img"
          style={{
            backgroundImage:
              "url(https://image.tmdb.org/t/p/original/r39CgvHn1gVEtRGdBdDpC3a6c81.jpg)"
          }}
        />
      </div>
    </div>
  );
};

export default HomeJumbotron;
