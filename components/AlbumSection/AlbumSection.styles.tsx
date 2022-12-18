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
  padding-inline: 5em;
  margin-block: 5em;
  background-color: ${(props) => props.theme.backgroundColor};

  .album-head {
    display: flex;
    justify-content: space-between;
  }
  .more {
    color: #f0383b;
    cursor: pointer;
  }
`;
export { StyledAlbumSection, StyledAlbumCategory };
