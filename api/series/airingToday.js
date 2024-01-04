import seriesApi from './_series_config';

async function airingTodayTV () {
  try {
    const response = await seriesApi.get ('/airing_today');
    const seriesData = await Promise.all (
      response.data.results.map (async function(series) {
        const seriesID = series.id;
        const fullData = await seriesApi.get (`/${seriesID}`);
        const imageData = await seriesApi.get (`/${seriesID}/images`);
        const releaseDateData = await seriesApi.get (`/${seriesID}/content_ratings`);
        // const castData = await seriesApi.get (`/${seriesID}/credits`);
        console.log(imageData.data.logos[0],"series")
        //รวมข้อมูล
        const mergedSeries = {
          ...(series || []),
          ...(fullData.data || []),
          ...imageData.data.logos[0] || [],
          certification: releaseDateData.data.results,
          //...(castData || []),
        };

        return mergedSeries;
      })
    );
    return seriesData;
  } catch (error) {
    console.error ('airingTodayTV ',error);
  }
}

export default airingTodayTV;
