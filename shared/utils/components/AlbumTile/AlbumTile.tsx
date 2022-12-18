import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { albumSlice, MusicDataProps } from "../../../../store/albumSlice";
import { StyledAlbumTitle } from "./AlbumTile.styles";
import { ThemeProvider } from "styled-components";
import { DARKTHEME, LIGHTTHEME } from "../../Constant/themeOptions";
import { RootState } from "../../../../pages/_app";

interface AlbumTileProps {
  name: string;
  image: string;
  filteredData?: MusicDataProps | undefined | any;
  hide?: boolean;
  id: string;
  artist: string;
}
const AlbumTile = ({
  name,
  image,
  id,
  artist,
  filteredData,
  hide,
}: AlbumTileProps) => {
  const truncateString = (str: string, num: number) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  const { theme } = useSelector((state: RootState | any) => state.albumData);

  const dispatch = useDispatch();
  const [addFavorite, setAddFavorite] = useState(true);
  return (
    <ThemeProvider theme={theme === "Light" ? LIGHTTHEME : DARKTHEME}>
      <StyledAlbumTitle>
        <img src={image} className="album" alt={name} />
        <a href={id} target="_blank">
          {" "}
          <h5 className="song">{truncateString(name, 30)}</h5>
        </a>
        <h3 className="artist"> {truncateString(artist, 30)}</h3>

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
    </ThemeProvider>
  );
};

export default AlbumTile;
