export enum MOVIE_ACTION_TYPES {
  SET_SELECT_MOVIE = "SET_SELECT_MOVIE",
  FETCH_MOVIE_START = "FETCH_MOVIE_START",
  FETCH_MOVIE_SUCCESS = "FETCH_MOVIE_SUCCESS",
  FETCH_MOVIE_FAILED = "FETCH_MOVIE_FAILED",
  // SET_MOVIE= "SET_MOVIE",
  SET_QUERY = "SET_QUERY",
  SET_PİCKMOVİE = "SET_PİCKMOVİE",
  SET_IMDBDATA = "SET_IMDBDATA",
  SET_CLOSERCART = "SET_CLOSERCART",
}

export type MovieType = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};
export type PickMovieType = {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Title: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
};
