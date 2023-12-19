export async function fetchSeries(axios) {
    const popularResponse = await axios.$get(
        "https://api.themoviedb.org/3/tv/popular?api_key=3c79a5d5b0c2bd68652652a202b1c175&language=th"
    );

    const seriesDetailsPromises = popularResponse.results.map(
        async (series) => {
            const seriesId = series.id;
            const seriesDetailsResponse = await axios.$get(
                `https://api.themoviedb.org/3/tv/${seriesId}?api_key=3c79a5d5b0c2bd68652652a202b1c175`
            );
            const seriesCerResponse = await axios.$get(
                `https://api.themoviedb.org/3/tv/${seriesId}/content_ratings?api_key=3c79a5d5b0c2bd68652652a202b1c175&language=en`
            );
            const seriesCertification = seriesCerResponse.results;

            const seriesImagesResponse = await axios.$get(
                `https://api.themoviedb.org/3/tv/${seriesId}/images?api_key=3c79a5d5b0c2bd68652652a202b1c175&language=en`
            );
            const seriesLogos = seriesImagesResponse.logos[0];

            const mergedSeries = {
                ...series,
                ...seriesDetailsResponse,
                ...seriesLogos,
                certification: seriesCertification,
            };

            console.log(mergedSeries);
            return mergedSeries;
        }
    );

    return Promise.all(seriesDetailsPromises);
}


export async function paramsSeries({ axios, params }) {
    // รายละเอียดหนัง
    const seriesDetailsResponse = await axios.$get(
        `https://api.themoviedb.org/3/tv/${params.id}?api_key=3c79a5d5b0c2bd68652652a202b1c175`
    );
    const seriesCerResponse = await axios.$get(
        `https://api.themoviedb.org/3/tv/${params.id}/content_ratings?api_key=3c79a5d5b0c2bd68652652a202b1c175&language=en`
    );
    const seriesCertification = seriesCerResponse.results;
    // รูปปก ,โลโก้
    const seriesImagesResponse = await axios.$get(
        `https://api.themoviedb.org/3/tv/${params.id}/images?api_key=3c79a5d5b0c2bd68652652a202b1c175&language=en`
    );
    // ตัดเอาแค่ข้อมูลจาก logos => array 0
    const seriesLogos = seriesImagesResponse.logos[0];
    // รวมข้อมูล
    const mergedseries = {
        ...seriesDetailsResponse,
        ...seriesLogos,
        certification: seriesCertification,
    };
    console.log(mergedseries);
    return mergedseries;

    
} 
