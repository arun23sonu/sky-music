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
  return (
    <ThemeProvider theme={"Light" ? LIGHTTHEME : DARKTHEME}>
      <StyledAlbumCategory key={Math.random()}>
        <div className="album-head">
          <h3>{filterArtist}</h3>
          {albumList.length > 4 && (
            <div
              className="more"
              onClick={() => setLength((prev: number) => prev + 5)}
            >
              More
            </div>
          )}
        </div>

        <StyledAlbumSection>
          {albumList
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
                  name={album["im:name"].label}
                  image={album["im:image"][2].label}
                  filteredData={album}
                />
              );
            })}
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
        {favorite.length > 5 && (
          <div
            className="more"
            onClick={() => setLength((prev: number) => prev + 5)}
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
    <div data-testid="album-section" key={Math.random()}>
      {favorite.length > 0 && <FavoriteSection />}
      <AlbumCategory filterArtist="Top 100 Hits" />
      <AlbumCategory filterArtist="Christmas" />
      <AlbumCategory filterArtist="Holiday" />
      <AlbumCategory filterArtist="Country" />
      <AlbumCategory filterArtist="Pop" />
      <AlbumCategory filterArtist="Rock" />
    </div>
  );
};

export default AlbumSection;
