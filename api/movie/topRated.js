import movieApi from './movie_config';

async function topRatedMovies() {
  try {
    const response = await movieApi.get ('/top_rated');
    const movieData = await Promise.all (
      response.data.results.map (async function (movie){
        const movieId = movie.id;
        const fullData = await movieApi.get (`/${movieId}`);
        const imageData = await movieApi.get (`/${movieId}/images`);
        const releaseDateData = await movieApi.get (`/${movieId}/release_dates`);
        const castData = await movieApi.get (`/${movieId}/credits`);

        const mergedMovie = {
          ...(movie || []),
          ...(fullData.data || []),
          logos: imageData.data.logos[0] || [],
          certification: releaseDateData.data.results,
          ...(castData || []),
        };

        return mergedMovie;
      })
    );

    return movieData;
  } catch (error) {
    console.error ('topRated',error);
  }
};

export default topRatedMovies;
