import React from "react";
import { useSelector } from "react-redux";
import SearchResult from "../components/SearchResult/SearchResult";
import getStore from "../store";
import { getAlbum, selectAlbum } from "../store/albumSlice";

const Search = () => {
  const album = useSelector(selectAlbum)
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
