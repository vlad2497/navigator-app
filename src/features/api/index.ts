import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BASE_HOST = "https://api.themoviedb.org";
export const IMAGES_HOST = "https://image.tmdb.org/";
export const API_V3_HOST = `${BASE_HOST}/3`;
export const API_KEY = "883294f9282d34c0115f30516ae3df8d";
export const DEFAULT_QUERY_PARAMS = {
  api_key: API_KEY,
  language: "ru",
};

export const baseQuery = fetchBaseQuery({
  baseUrl: `${API_V3_HOST}/`,
});
