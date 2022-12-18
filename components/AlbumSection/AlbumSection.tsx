import React, { useState } from "react";
import { useSelector } from "react-redux";
import AlbumTile from "../../shared/utils/components/AlbumTile/AlbumTile";
import { MusicDataProps, selectAlbum } from "../../store/albumSlice";
import { StyledAlbumCategory, StyledAlbumSection } from "./AlbumSection.styles";
import { ThemeProvider } from "styled-components";
import {
  LIGHTTHEME,
  DARKTHEME,
} from "../../shared/utils/Constant/themeOptions";
import { RootState } from "../../pages/_app";

interface AlbumCategoryProps {
  filterArtist: string;
}
 const AlbumCategory = ({ filterArtist }: AlbumCategoryProps) => {
  const album = useSelector(selectAlbum);
  const albumList = album?.entry;
  const [length, setLength] = useState(5);
  const filteredList = albumList
  ?.filter(
    (albums: MusicDataProps) =>
      albums.category.attributes.term ===
      (filterArtist === "Top 100 Hits"
        ? albums.category.attributes.term
        : filterArtist)
  )
  ?.slice(0, length)
  .map((album: MusicDataProps) => {
    return (
      <AlbumTile
        id={album.id.label}
        artist ={album["im:artist"].label}
        name={album["im:name"].label}
        image={album["im:image"][2].label}
        filteredData={album}
      />
    );
  })  
  return (
    <ThemeProvider theme={"Light" ? LIGHTTHEME : DARKTHEME}>
      <StyledAlbumCategory  >
        <div className="album-head">
          <h3>{filterArtist}</h3>
          {filteredList.length < length ? null :  (
            <div
              className="more"
              onClick={() => setLength((prev: number) => prev + 15)}
            >
              More
            </div>
          )}
        </div>

        <StyledAlbumSection>
          {filteredList}
        </StyledAlbumSection>
      </StyledAlbumCategory>
    </ThemeProvider>
  );
};
const FavoriteSection = () => {
  const { favorite } = useSelector((state: RootState | any) => state.albumData);
  const [length, setLength] = useState(5);

  return (
    <StyledAlbumCategory>
      <div className="album-head">
        <h3>Your Favorites</h3>
        {favorite.length  <= length ? null :  (
          <div
            className="more"
            onClick={() => setLength((prev: number) => prev + 10)}
          >
            More
          </div>
        )}
      </div>

      <StyledAlbumSection>
        {favorite?.slice(0, length)?.map((album: MusicDataProps) => {
          return (
            <AlbumTile
              name={album["im:name"].label}
              artist ={album["im:artist"].label}
              image={album["im:image"][2].label}
              id={album.id.label}
              hide={true}
            />
          );
        })}
      </StyledAlbumSection>
    </StyledAlbumCategory>
  );
};

const AlbumSection = () => {
  const { favorite } = useSelector((state: RootState | any) => state.albumData);

  return (
    <div data-testid="album-section" >
      {favorite.length > 0 && <FavoriteSection />}
      <AlbumCategory filterArtist="Top 100 Hits" />
      <AlbumCategory filterArtist="Christmas" />
      <AlbumCategory filterArtist="Holiday" />
      <AlbumCategory filterArtist="Rock" />
      <AlbumCategory filterArtist="Soundtrack" />
      <AlbumCategory filterArtist="TV Soundtrack" />
      <AlbumCategory filterArtist="Country" />

    </div>
  );
};

export default AlbumSection;
