// รูปภาพ
export function getImageUrl(imagePath) {
    const baseImageUrl = "https://image.tmdb.org/t/p/original";
    return `${baseImageUrl}${imagePath}`;
}

export function getLogoUrl(imagePath) {
    const baseImageUrl = "https://image.tmdb.org/t/p/w500";
    if (imagePath && imagePath.length > 0)
        return `${baseImageUrl}${imagePath}`;
    else {
        return require('@/static/movieImg/logos/404logo.png');
    }
}

export function getStaticLogoUrl() {
    return require('@/static/movieImg/logos/404logo.png');
}

export function movieYear(year) {
    return year.split("-")[0];
}

export function movieTime(time) {
    const hours = Math.floor(time / 60);
    const min = time % 60;
    return `${hours} ชั่วโมง ${min} นาที`;
}
// นำข้อมูลใน หมวดหมู่มาแสดง
export function getGenresNames(genres) {
    return genres.map((genre, index) => {
        const separator = index !== genres.length - 1 ? ' \u2022 ' : '';
        return `${genre.name}${separator}`;
    }).join('');
}

export async function fetchMovies(axios) {
    const nowPlayingResponse = await axios.$get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=3c79a5d5b0c2bd68652652a202b1c175"
    );

    // ทำ API calls ทั้งหมดพร้อมกัน
    const movieDetailsPromises = nowPlayingResponse.results.map(
        async (movie) => {
            const movieId = movie.id;
            // รายละเอียดหนัง
            const movieDetailsResponse = await axios.$get(
                `https://api.themoviedb.org/3/movie/${movieId}?api_key=3c79a5d5b0c2bd68652652a202b1c175`
            );
            // รูปปก ,โลโก้
            const movieImagesResponse = await axios.$get(
                `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=3c79a5d5b0c2bd68652652a202b1c175&language=en`
            );
            // ตัดเอาแค่ข้อมูลจาก array 1
            const selectedLogos = movieImagesResponse.logos.slice(0, 1);

            // รวมข้อมูล
            const mergedMovie = {
                ...movie,
                ...movieDetailsResponse,
                image: selectedLogos,
            };

            // เพิ่มหนังที่ผสมแล้วเข้าไปในอาร์เรย์ nowPlayings
            console.log(mergedMovie);
            return mergedMovie;
        }
    );

    // รอให้ทุก API calls เสร็จสมบูรณ์
    return Promise.all(movieDetailsPromises);
}

export async function fetchMovies2(axios) {
    const nowPlayingResponse = await axios.$get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=3c79a5d5b0c2bd68652652a202b1c175"
    );

    // ทำ API calls ทั้งหมดพร้อมกัน
    const movieDetailsPromises = nowPlayingResponse.results.map(
        async (movie) => {
            const movieId = movie.id;
            // รายละเอียดหนัง
            const movieDetailsResponse = await axios.$get(
                `https://api.themoviedb.org/3/movie/${movieId}?api_key=3c79a5d5b0c2bd68652652a202b1c175`
            );
            // รูปปก ,โลโก้
            const movieImagesResponse = await axios.$get(
                `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=3c79a5d5b0c2bd68652652a202b1c175&language=en`
            );
            // ตัดเอาแค่ข้อมูลจาก array 1
            const selectedLogos = movieImagesResponse.logos.slice(0, 1);

            // รวมข้อมูล
            const mergedMovie = {
                ...movie,
                ...movieDetailsResponse,
                image: selectedLogos,
            };

            // เพิ่มหนังที่ผสมแล้วเข้าไปในอาร์เรย์ nowPlayings
            console.log(mergedMovie);
            return mergedMovie;
        }
    );

    // รอให้ทุก API calls เสร็จสมบูรณ์
    return Promise.all(movieDetailsPromises);
}
