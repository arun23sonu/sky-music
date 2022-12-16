import { configureStore } from "@reduxjs/toolkit";
import { albumSlice } from "./albumSlice";

export default function getStore(incomingPreloadState?: any) {
  const store = configureStore({
    reducer: {
      albumData: albumSlice.reducer,
    },
    preloadedState: incomingPreloadState,
  });
  return store;
}
