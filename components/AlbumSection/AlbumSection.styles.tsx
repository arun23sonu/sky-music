import styled from "styled-components";

const StyledAlbumSection = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  gap: 6rem;

  @media (max-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    gap: 1rem;
  }
  @media (max-width: 1080px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    gap: 1rem;
  }
  @media (max-width: 780px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    gap: 1rem;
  }
  @media (max-width: 580px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    gap: 1rem;
  }
`;
const StyledAlbumCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding: 4em;
  background-color: ${(props) => props.theme.backgroundColor};

  .album-head {
    display: flex;
    justify-content: space-between;
  }
  h3 {
    color: ${(props) => props.theme.song};
  }
  .more {
    color: #f0383b;
    cursor: pointer;
    padding: 0.3em 0.5em;
    :hover {
      background-color: #f0383b;
      color: #fff;
      border-radius: 10px;
      padding: 0.3em 0.5em;
    }
  }
`;
export { StyledAlbumSection, StyledAlbumCategory };
