import { createApi } from "@reduxjs/toolkit/query/react";
import { Movie } from "src/types/movies";
import { baseQuery, DEFAULT_QUERY_PARAMS } from "./index";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getMovie: builder.query<{ results: Movie[] }, void>({
      query: () => ({
        url: `movie/popular`,
        params: DEFAULT_QUERY_PARAMS,
      }),
    }),
  }),
});

export const { useGetMovieQuery } = moviesApi;
