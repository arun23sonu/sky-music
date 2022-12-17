import React from "react";
import { useSelector } from "react-redux";
import { MusicDataProps, selectAlbum } from "../../../../store/albumSlice";
import { StyledAlbumContainer, StyledAlbumTitle } from "./AlbumTile.styles";

const AlbumTile = () => {
  const albums = useSelector(selectAlbum);
  const truncateString = (str: string, num: number) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  return (
    <StyledAlbumContainer data-testid="album">
      {albums?.entry?.map((album: MusicDataProps) => {
        return (
          <StyledAlbumTitle>
            <img
              src={album["im:image"][2].label}
              className="album"
              alt={album.title.label}
            />
            <h5>{truncateString(album["im:name"].label, 30)}</h5>
            <h3> {truncateString(album.title.label, 30)}</h3>
          </StyledAlbumTitle>
        );
      })}
    </StyledAlbumContainer>
  );
};

export default AlbumTile;
