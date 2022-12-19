import styled from "styled-components";

const StyledSearchResult = styled.div``;
const StyledSearchDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  height: 100vh;
  color: ${(props) => props.theme.song};

  .head {
    color: ${(props) => props.theme.artist};
  }
  h4 {
    color: ${(props) => props.theme.song};
  }
  .no-results{
      display: flex;
      flex-direction: column;
      gap: 2em;
      align-items: center;
  }
  @media (max-width: 1080px) {
    h4 {
      font-size: 0.7em;
    }
    .head {
      font-size: 0.8em;
    }
  }
`;
const StyledAdvancedSearch = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2em 15em;
  background-color: ${(props) => props.theme.backgroundColor};
  gap: 3em;
  h2 {
    color: ${(props) => props.theme.song};
  }
  .category {
    display: flex;
    justify-content: space-between;
  }
  .category-names {
    border-bottom: 1px solid #f2f2f2;
  }
  .category-name {
    border-bottom: 1px solid #fa3335;
    width: fit-content;
    color: #fa3335;
    padding-bottom: 1em;
  }
  .search-result {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
  .content {
    display: flex;
    gap: 2em;
    align-items: center;
  }
  .song {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 1280px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2em 5em;
    gap: 3em;
  }
  @media (max-width: 780px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2em 2em;
    gap: 3em;
  }
`;
const StyledTrendingSearch = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  gap: 2em;
  background-color: ${(props) => props.theme.backgroundColor};
  justify-content: flex-start;
  padding-block: 10em;
  padding-inline: 10em;
  .trending {
    display: grid;
    align-items: center;
    justify-content: space-around;
    grid-template-columns: repeat(6, 1fr);
  }
  h2 {
    color: ${(props) => props.theme.song};
  }
  @media (max-width: 1280px) {
    .trending {
      display: grid;
      gap: 1em;
      align-items: center;
      justify-content: space-around;
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 780px) {
    display: flex;
    flex-direction: column;
    height: 50vh;
    width: 100vw;
    gap: 2em;
    justify-content: center;
    padding-block: 30em;
    .trending {
      display: grid;
      gap: 1em;
      align-items: center;
      justify-content: space-around;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 580px) {
    display: flex;
    flex-direction: column;
    height: 50vh;
    width: 100vw;
    gap: 2em;
    justify-content: center;
    padding-block: 50em;
    .trending {
      display: grid;
      gap: 1em;
      align-items: center;
      justify-content: space-around;
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
export {
  StyledSearchResult,
  StyledSearchDetail,
  StyledAdvancedSearch,
  StyledTrendingSearch,
};
