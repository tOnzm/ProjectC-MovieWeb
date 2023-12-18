// รูปภาพ
export function getImageUrl(imagePath) {
    const baseImageUrl = "https://image.tmdb.org/t/p/original";
    if (imagePath && imagePath.length > 0)
        return `${baseImageUrl}${imagePath}`;
    else {
        return require('@/static/movieImg/logos/404logo.png');
    }
}

export function getLogoUrl(logoPath) {
    const baseImageUrl = "https://image.tmdb.org/t/p/w500";
    if (logoPath && logoPath.length > 0)
        return `${baseImageUrl}${logoPath}`;
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
export function getGenresNames(genres) {
    return genres.map((genre, index) => {
        const separator = index !== genres.length - 1 ? ' \u007c ' : '';
        return `${genre.name}${separator}`;
    }).join('');
}

//ภาษา
export function languages(languagesData) {
    if (languagesData && languagesData.length > 0) {
        const englishNames = languagesData.map(
            (language) => language.english_name
        );
        if (englishNames.length > 1) {
            return `${englishNames.length} ภาษา`;
        } else {
            return `${englishNames}`;
        }
    } else {
        return "ไม่พบข้อมูล";
    }
}

//หมวดหมู่หนัง 
export function genres(genresData) {
    if (genresData && genresData.length > 0) {
        const genresNames = genresData.map(
            (genres) => genres.name
        );
        return genresNames.join("\u2800\u007c\u2800");
    } else {
        return "ไม่พบข้อมูล";
    }
}



export async function fetchMovies(axios) {
    const nowPlayingResponse = await axios.$get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=3c79a5d5b0c2bd68652652a202b1c175&language=th"
    );

    const movieDetailsPromises = nowPlayingResponse.results.map(
        async (movie) => {
            const movieId = movie.id;
            const movieDetailsResponse = await axios.$get(
                `https://api.themoviedb.org/3/movie/${movieId}?api_key=3c79a5d5b0c2bd68652652a202b1c175&language=th`
            );
            const movieImagesResponse = await axios.$get(
                `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=3c79a5d5b0c2bd68652652a202b1c175&language=en`
            );
            const moviesLogos = movieImagesResponse.logos[0];

            const mergedMovie = {
                ...movie,
                ...movieDetailsResponse,
                ...moviesLogos,
            };

            console.log(mergedMovie);
            return mergedMovie;
        }
    );

    return Promise.all(movieDetailsPromises);
}
