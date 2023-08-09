import { ACTION_TRAILER } from "./trailer.types";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f86d7bf77cmsh361a66d2ecd5e84p1f96c5jsn1655ab077970",
    "X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com",
  },
};
export const setTrailer = (data) => {
  return { type: ACTION_TRAILER.SET_ACTION_TRAILER, payload: data };
};
export const setWatch = (data) => {
  return { type: ACTION_TRAILER.SET_ACTION_WATCHED, payload: data };
};

export const fetchTrailerData = (query) => async (dispatch) => {
  try {
    const response = await fetch(
      ` https://simple-youtube-search.p.rapidapi.com/search?query=${query}&safesearch=false`,
      options
    );
    const result = await response.json();
    dispatch(setTrailer(result));
  } catch (error) {
    console.error(error);
  }
};
