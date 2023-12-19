import axios from "axios"; // Import axios here

const apiKey = process.env.TMDB_API_KEY;

export async function searchMovie(searchData) {
    try {
        const searchResponse = await axios.get(
            `https://api.themoviedb.org/3/search/movie?query=${searchData}&include_adult=false&language=en-US&page=1&api_key=${apiKey}`
        );
        return searchResponse.data.results;
    } catch (error) {
        return "ไม่พบข้อมูล";
    }
}