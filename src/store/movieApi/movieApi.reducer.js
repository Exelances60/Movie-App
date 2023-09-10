import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const key = "e5f56591";

const INITIAL_STATE = {
  selectMovie: [], // Boş dizi olarak güncellendi
  movie: [], // Boş dizi olarak güncellendi
  query: "batman",
  pickMovie: {},
  imbdData: {},
  closeCart: false,
  isLoading: false,
  error: null,
};

export const fetchMovieAsycn = createAsyncThunk(
  "fetch/startMovieFetch",

  async (query) => {
    const data = await fetch(
      `http://www.omdbapi.com/?apikey=${key}&s=${query}`
    );
    return data?.json();
  }
);

export const movieSlice = createSlice({
  name: "movie",
  initialState: INITIAL_STATE,
  reducers: {
    setSelectMovie: (state, action) => {
      state.selectMovie = action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setPickMovie: (state, action) => {
      state.pickMovie = action.payload;
    },
    setİmbdData: (state, action) => {
      state.imbdData = action.payload;
    },
    setCloseCart: (state, action) => {
      state.closeCart = action.payload;
    },
    fetchMovieStart: (state, action) => {
      state.isLoading = true;
    },
    fetchMovieSuccess: (state, action) => {
      state.isLoading = false;
      state.movie = action.payload;
    },
    fetchMovieFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieAsycn.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchMovieAsycn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movie = action.payload;
      })
      .addCase(fetchMovieAsycn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  setSelectMovie,
  setQuery,
  setPickMovie,
  setİmbdData,
  setCloseCart,
  fetchMovieStart,
  fetchMovieSuccess,
  fetchMovieFailed,
} = movieSlice.actions;

export const movieReducer = movieSlice.reducer;

/* export const movieReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case MOVIE_ACTION_TYPES.SET_SELECT_MOVIE:
      return { ...state, selectMovie: payload };
    case MOVIE_ACTION_TYPES.FETCH_MOVIE_START:
      return { ...state, isLoading: true };
    case MOVIE_ACTION_TYPES.FETCH_MOVIE_SUCCESS: // 'SUCCES' -> 'SUCCESS' olarak düzeltildi
      return { ...state, movie: payload, isLoading: false };
    case MOVIE_ACTION_TYPES.FETCH_MOVIE_FAILED:
      return { ...state, error: payload, isLoading: false };
    case MOVIE_ACTION_TYPES.SET_QUERY:
      return { ...state, query: payload };
    case MOVIE_ACTION_TYPES.SET_PİCKMOVİE:
      return { ...state, pickMovie: payload };
    case MOVIE_ACTION_TYPES.SET_IMDBDATA:
      return { ...state, imbdData: payload };
    case MOVIE_ACTION_TYPES.SET_CLOSERCART:
      return { ...state, closeCart: payload };
    default:
      return state;
  }
};
 */
