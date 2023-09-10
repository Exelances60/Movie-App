<<<<<<< HEAD
import { ACTION_TRAILER } from "./trailer.types";
const INITIAL_STATE = {
  currentTrailer: [{}],
  watchOpen: false,
};

export const trailerReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TRAILER.SET_ACTION_TRAILER:
      return { ...state, currentTrailer: payload };
    case ACTION_TRAILER.SET_ACTION_WATCHED:
      return { ...state, watchOpen: payload };
    default:
      return state;
  }
};
=======
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = {
  currentTrailer: [{}],
  watchOpen: false,
};

export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f86d7bf77cmsh361a66d2ecd5e84p1f96c5jsn1655ab077970",
    "X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com",
  },
};
export const fetchTrailerData = createAsyncThunk(
  "fetch/Trailer",
  async (query) => {
    try {
      const response = await fetch(
        ` https://simple-youtube-search.p.rapidapi.com/search?query=${query}&safesearch=false`,
        options
      );
      return response?.json();
    } catch (error) {
      console.error(error);
    }
  }
);

export const trailerSlice = createSlice({
  name: "trailer",
  initialState: INITIAL_STATE,
  reducers: {
    setTrailer: (state, action) => {
      state.currentTrailer = action.payload;
    },
    setWatch: (state, action) => {
      state.watchOpen = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchTrailerData.fulfilled, (state, action) => {
      state.currentTrailer = action.payload;
    });
  },
});

export const { setTrailer, setWatch } = trailerSlice.actions;
export const trailerReducer = trailerSlice.reducer;

/* export const trailerReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TRAILER.SET_ACTION_TRAILER:
      return { ...state, currentTrailer: payload };
    case ACTION_TRAILER.SET_ACTION_WATCHED:
      return { ...state, watchOpen: payload };
    default:
      return state;
  }
};
 */
>>>>>>> master
