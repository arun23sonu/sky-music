import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../pages/_app";
import { MusicDataProps, selectAlbum } from "../../store/albumSlice";

const Result = ({ title, filter }: any) => {
  const { searchValue } = useSelector(
    (state: RootState | any) => state.albumData
  );
  const album = useSelector(selectAlbum);
  const results = album?.entry;
  return (
    <div style={{width:"500px"}}>
      <h1>{title}</h1>
      <div>
        {results
          .filter((result: any) =>
            result[filter].label
              .toLowerCase()
              .includes(searchValue.toLowerCase())
          )
          .map((album: MusicDataProps) => {
            return (
              <div>
                <img
                  src={album["im:image"][2].label}
                  alt={album["im:name"].label}
                  height="100"
                />
                <h6>{album["im:name"].label}</h6>
              </div>
            );
          })}
      </div>
    </div>
  );
};

const SearchResult = () => {
  const { searchValue } = useSelector(
    (state: RootState | any) => state.albumData
  );
  const album = useSelector(selectAlbum);
  console.log(album);
  return (
    <div style={{display:"flex"}}>
      {/* <div>SearchResults for {searchValue} </div> */}
      {/* <Result tile="Top-category" filter="" /> */}
      <Result tile="Artist" filter="im:artist" />
      <Result tile="Song" filter="im:name" />
    </div>
  );
};

export default SearchResult;
