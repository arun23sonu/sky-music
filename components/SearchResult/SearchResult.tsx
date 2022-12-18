import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../pages/_app";
import AlbumTile from "../../shared/utils/components/AlbumTile/AlbumTile";
import { CATEGORIES } from "../../shared/utils/Constant/headerOptions";
import { MusicDataProps, selectAlbum } from "../../store/albumSlice";
import {
  StyledAdvancedSearch,
  StyledSearchDetail,
  StyledTrendingSearch,
} from "./SearchResult.styles";
import { ThemeProvider } from "styled-components";
import {
  DARKTHEME,
  LIGHTTHEME,
} from "../../shared/utils/Constant/themeOptions";

interface CategoryProps {
  name: string;
  id: number;
  key: string;
}

const Trending = () => {
  const album = useSelector(selectAlbum);
  const albumData = album?.entry;
  const { theme } = useSelector((state: RootState | any) => state.albumData);

  return (
    <ThemeProvider theme={theme === "Light" ? LIGHTTHEME : DARKTHEME}>
      <StyledTrendingSearch>
        <h2>Trending Searches</h2>
        <div className="trending">
          {albumData?.slice(7, 13)?.map((album: MusicDataProps) => {
            return (
              <AlbumTile
                name={album["im:name"].label}
                hide={true}
                artist={album["im:artist"].label}
                image={album["im:image"][2].label}
                id={album.id.label}
              />
            );
          })}
        </div>
      </StyledTrendingSearch>
    </ThemeProvider>
  );
};
interface SearchDetailProps {
  filter: string;
}
const SearchDetail = ({ filter }: SearchDetailProps) => {
  const albums = useSelector(selectAlbum);
  const { searchValue } = useSelector(
    (state: RootState | any) => state.albumData
  );
  return (
    <StyledSearchDetail>
      {albums?.entry
        ?.filter((albumFilter: MusicDataProps | any) =>
          albumFilter[filter].label
            .toLowerCase()
            .includes(searchValue.toLowerCase())
        )
        .map((album: MusicDataProps) => {
          return (
            <div className="content">
              <img
                src={album["im:image"][2].label}
                height="70px"
                style={{
                  borderRadius: filter === "im:artist" ? "50px" : "10px",
                }}
              />
              {filter === "im:name" && (
                <div className="song">
                  <h4>{album["im:name"].label}</h4>
                  <div className="head">Song</div>
                </div>
              )}
              {filter === "im:artist" && (
                <div className="song">
                  <h4>{album["im:artist"].label}</h4>
                  <div className="head">Artist</div>
                </div>
              )}
            </div>
          );
        })}
    </StyledSearchDetail>
  );
};

const AdvancedSearch = () => {
  const { searchValue } = useSelector(
    (state: RootState | any) => state.albumData
  );
  const { theme } = useSelector((state: RootState | any) => state.albumData);

  return (
    <ThemeProvider theme={theme === "Light" ? LIGHTTHEME : DARKTHEME}>
      <StyledAdvancedSearch>
        <h2>Search results for "{searchValue}"</h2>
        <div className="search-result">
          <div className="category">
            {CATEGORIES.map((category: CategoryProps) => {
              return (
                <div className="search-result">
                  <div className="category-names">
                    <div className="category-name">{category.name}</div>
                  </div>

                  <SearchDetail filter={category.key} />
                </div>
              );
            })}
          </div>
        </div>
      </StyledAdvancedSearch>
    </ThemeProvider>
  );
};
const SearchResult = () => {
  const { searchValue } = useSelector(
    (state: RootState | any) => state.albumData
  );
  return (
    <div data-testid="search-result">
      {searchValue.length > 1 ? <AdvancedSearch /> : <Trending />}
    </div>
  );
};

export default SearchResult;
