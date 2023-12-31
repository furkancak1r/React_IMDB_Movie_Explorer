import axios from "axios";
export class MovieService {
  apiKey =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjg1YjdiN2NmZGViZmYxMzlhYjU4NDJiYmRhMGY0MSIsInN1YiI6IjY0OTllNmFkOTU1YzY1MDBjN2FmYmRiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZQF_a92qOY7LRxMH--UlS-T3rvaA4C6DCkebIo25IdU";
  api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
      Authorization: "Bearer " + this.apiKey,
    },
  });
  getPopularMovies(pageNumber: number) {
    let url = `movie/popular?language=en-US&page=${pageNumber}`;
    return this.api.get(url);
  }
  getMovieDetails(movieId: number) {
    let url = `movie/${movieId}`;
    return this.api.get(url);
  }
  getTopRatedMovies(pageNumber: number) {
    let url = `movie/top_rated?language=en-US&page=${pageNumber}`;
    return this.api.get(url);
  }
  getUpcomingMovies(pageNumber: number) {
    let url = `movie/upcoming?language=en-US&page=${pageNumber}`;
    return this.api.get(url);
  }
  getNowPlayingMovies(pageNumber: number) {
    let url = `movie/now_playing?language=en-US&page=${pageNumber}`;
    return this.api.get(url);
  }
  getMoviesByName(movieName: string, pageNumber: number) {
    let url = `search/movie?query=${movieName}&include_adult=false&language=en-US&page=${pageNumber}`;
    return this.api.get(url);
  }
}
