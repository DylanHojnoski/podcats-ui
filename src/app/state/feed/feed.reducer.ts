import { createReducer, on } from "@ngrx/store";
import { loadFeeds, loadFeedsFailure, loadFeedsSuccess } from "./feed.action";
import { Feed } from "src/app/models/feed";

export interface FeedState {
  feeds: Feed[],
  error: string | null;
}

export const initialState: FeedState = {
  feeds: [],
  error: null,
}

export const feedReducer = createReducer(
  initialState,

  on(loadFeeds, (state) => ({...state})),

  on(loadFeedsSuccess, (state, { feeds }) => ({
    ...state,
    feeds: feeds,
    error: null,
  })),

  on(loadFeedsFailure, (state, { error }) => ({
    ...state,
    error: error,
  })),
)
