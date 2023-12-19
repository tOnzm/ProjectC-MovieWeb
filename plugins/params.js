
export async function paramsMovies({ axios, params }) {
    // รายละเอียดหนัง
    const movieDetailsResponse = await axios.$get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=3c79a5d5b0c2bd68652652a202b1c175`
    );
    const movieCerResponse = await axios.$get(
        `https://api.themoviedb.org/3/movie/${params.id}/release_dates?api_key=3c79a5d5b0c2bd68652652a202b1c175&language=en`
    );
    const movieCertification = movieCerResponse.results;
    // รูปปก ,โลโก้
    const movieImagesResponse = await axios.$get(
        `https://api.themoviedb.org/3/movie/${params.id}/images?api_key=3c79a5d5b0c2bd68652652a202b1c175&language=en`
    );
    // ตัดเอาแค่ข้อมูลจาก logos => array 0
    const moviesLogos = movieImagesResponse.logos[0];
    // รวมข้อมูล
    const mergedMovie = {
        ...movieDetailsResponse,
        ...moviesLogos,
        certification: movieCertification,
    };
    console.log(mergedMovie);
    return mergedMovie
} 
