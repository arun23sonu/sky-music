import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { albumSlice, MusicDataProps } from "../../../../store/albumSlice";
import { StyledAlbumTitle } from "./AlbumTile.styles";

interface AlbumTileProps {
  name: string;
  image: string;
  filteredData?: MusicDataProps | undefined | any;
  hide?: boolean;
  id:string
}
const AlbumTile = ({ name, image, id, filteredData, hide }: AlbumTileProps) => {
  const truncateString = (str: string, num: number) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  const dispatch = useDispatch();
  const [addFavorite, setAddFavorite] = useState(true);
  return (
    <StyledAlbumTitle key={id}>
      <img src={image} className="album" alt={name} />
      <h5>{truncateString(name, 30)}</h5>
      <h3> {truncateString(name, 30)}</h3>

      {hide ? null : (
        <div className="heart">
          {addFavorite ? (
            <img
              src={"heart.svg"}
              className="heart-icon"
              onClick={() => {
                dispatch(albumSlice.actions.addfavorite(filteredData));
                setAddFavorite(false);
              }}
            />
          ) : (
            <img
              src={"red-heart.svg"}
              className="heart-icon"
              onClick={() => {
                dispatch(
                  albumSlice.actions.removefavorite(filteredData.id.label)
                );
                setAddFavorite(true);
              }}
            />
          )}
        </div>
      )}
    </StyledAlbumTitle>
  );
};

export default AlbumTile;
