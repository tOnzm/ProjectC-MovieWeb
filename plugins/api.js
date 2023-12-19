// รูปภาพ
export function getImageUrl(imagePath) {
    const baseImageUrl = "https://image.tmdb.org/t/p/original";
    if (imagePath && imagePath !== "")
        return `${baseImageUrl}${imagePath}`;
    else {
        return require('@/static/movieImg/404/16-9.png');
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
// ตัดข้อมูลวันที่ให้เหลือแต่ ปี
export function movieYear(year) {
    if (year && year.length > 0) {
        return year.split("-")[0];
    } else {
        return "ไม่พบข้อมูล";
    }
}

//แปลงนาที เป็น ชม.+ น.
export function movieTime(time) {
    const hours = Math.floor(time / 60);
    const min = time % 60;
    return `${hours} ชั่วโมง ${min} นาที`;

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
//ข้อมูลหนัง
export function overview(overviewData) {
    if (overviewData && overviewData.length > 0) {
        return overviewData
    }
    else {
        return 'ไม่พบข้อมูล';
    }
}

//เรตติ้งอายุหนัง
export function certification(certificationData) {
    if (Array.isArray(certificationData) && certificationData.length > 0) {
        const usCertification = certificationData.find(item => item.iso_3166_1 === "US");

        if (usCertification && usCertification.release_dates && usCertification.release_dates.length > 0) {
            const movieCertifications = usCertification.release_dates.map(({ certification }) => certification);

            if (movieCertifications[0] !== "") {
                return movieCertifications[0];
            } else if (movieCertifications[1] !== "") {
                return movieCertifications[1];
            } else {
                return 'null';
            }
        } else {
            return "null";
        }
    } else {
        return "null";
    }
}

//เรตติ้งอายุซีรีส์
export function certificationSeries(certificationData) {
    if (Array.isArray(certificationData) && certificationData.length > 0) {
        const usCertification = certificationData.find(item => item.iso_3166_1 === "US");

        if (usCertification && typeof usCertification.rating === "string" && usCertification.rating.trim() !== "") {
            return usCertification.rating.trim();
        } else {
            return 'null';
        }
    } else {
        return "null";
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
            const movieCerResponse = await axios.$get(
                `https://api.themoviedb.org/3/movie/${movieId}/release_dates?api_key=3c79a5d5b0c2bd68652652a202b1c175&language=en`
            );
            const movieCertification = movieCerResponse.results;

            const movieImagesResponse = await axios.$get(
                `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=3c79a5d5b0c2bd68652652a202b1c175&language=en`
            );
            const moviesLogos = movieImagesResponse.logos[0];

            const mergedMovie = {
                ...movie,
                ...movieDetailsResponse,
                ...moviesLogos,
                certification: movieCertification,
            };

            console.log(mergedMovie);
            return mergedMovie;
        }
    );

    return Promise.all(movieDetailsPromises);
}
