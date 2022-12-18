import React from "react";
import SearchResult from "../components/SearchResult/SearchResult";
import getStore from "../store";
import { getAlbum } from "../store/albumSlice";

const Search = () => {
  return (<div>
    <SearchResult/>
  </div>);
};
export const getServerSideProps = async () => {
  const store = getStore();
  await store.dispatch(getAlbum());
  return {
    props: {
      initialState: store.getState(),
    },
  };
};
export default Search;
