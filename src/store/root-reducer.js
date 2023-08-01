import { combineReducers } from "redux";

import { movieReducer } from "./movieApi/movieApi.reducer";
import { trailerReducer } from "./movietrailerApi/trailer.reducer";

export const rootReducer = combineReducers({
  movieApi: movieReducer,
  trailer: trailerReducer,
});
