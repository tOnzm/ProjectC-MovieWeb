import movieApi from './movie_config';

export default class nowPlaying extends movieApi {
  static async getAll () {
    return await this.api.get ('/now_playing', {}).then (({data}) => data);
  }
}
