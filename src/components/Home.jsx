import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

//Components
import HeroImage from './HeroImage';
import Grid from './Grid';

//Hook
import { useHomeFetch } from '../hooks/useHomeFetch';

//Image
import NoImage from '../images/no_image.jpg';

const Home = () => {
  const { state, loading, error } = useHomeFetch();

  return (
    <>
      {state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <Grid header="Popüler Filmler">
        {state.results.map((movie) => (
          <div key={movie.id}>
            {movie.title}
            <img
              src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}`}
              alt=""
              style={{ width: '100%' }}
            />
          </div>
        ))}
      </Grid>
    </>
  );
};

export default Home;
