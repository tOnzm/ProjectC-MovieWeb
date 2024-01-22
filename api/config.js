import * as dotenv from "dotenv"

dotenv.config();
const tmdb_api_key = process.env.TMDB_API_KEY

export default class apiKey{
    static api_key = tmdb_api_key
}