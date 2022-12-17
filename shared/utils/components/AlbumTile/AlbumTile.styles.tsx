import styled from "styled-components";

const StyledAlbumTitle = styled.div`
  height: 14rem;
  width: 14rem;
  display: flex;
  flex-direction: column;
  .album {
    border-radius: 10px;
    padding-bottom: 1em;
  }
  h3 {
    color: #767676;
    font-size: 0.7rem;
  }
  h5 {
    color: #282f35;
    font-size: 1rem;
  }
`;
const StyledAlbumContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 95%;
  padding-block: 10em;
  margin: auto;
  gap: 6rem;
`;
export { StyledAlbumTitle, StyledAlbumContainer };
