<<<<<<< HEAD
import { createSelector } from "reselect";
const selectData = (state) => state.movieApi; // State içinden "data" parçasını seçiyoruz.

export const selectQuery = createSelector([selectData], (state) => state.query);
export const selectMovie = createSelector(
  [selectData],
  (movieApi) => movieApi.movie
);
export const selectPickMovie = (state) => state.movieApi.pickMovie;
export const selectİmbdData = (state) => state.movieApi.imbdData;
export const selectCloseCart = (state) => state.movieApi.closeCart;
=======
import { createSelector } from "reselect";
const selectData = (state) => state.movieApi; // State içinden "data" parçasını seçiyoruz.

export const selectQuery = createSelector([selectData], (state) => state.query);
export const selectMovie = createSelector(
  [selectData],
  (movieApi) => movieApi.movie.Search
);
export const selectPickMovie = (state) => state.movieApi.pickMovie;
export const selectİmbdData = (state) => state.movieApi.imbdData;
export const selectCloseCart = (state) => state.movieApi.closeCart;
>>>>>>> master
