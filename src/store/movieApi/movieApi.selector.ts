import { createSelector } from "reselect";
import { MovieState } from "./movieApi.reducer";
import { RootState } from "../store";
const selectData = (state: RootState) => state.movieApi; // State içinden "data" parçasını seçiyoruz.

export const selectQuery = createSelector([selectData], (state) => state.query);
export const selectMovie = createSelector(
  [selectData],
  (movieApi) => movieApi.movie
);
export const selectPickMovie = (state: RootState) => state.movieApi.pickMovie;
export const selectİmbdData = (state: RootState) => state.movieApi.imdbData;
export const selectCloseCart = (state: RootState) => state.movieApi.closeCart;
