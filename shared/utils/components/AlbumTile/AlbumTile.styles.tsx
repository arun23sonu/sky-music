import styled from "styled-components";

const StyledAlbumTitle = styled.div`
  height: 14rem;
  width: 14rem;
  display: flex;
  flex-direction: column;
  position: relative;
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
  .heart-icon {
    height: 20px;
    width: 20px;
  }
  .heart {
    z-index: 1;
    background-color: #f0f2f5;
    position: absolute;
    right: 17px;
    top: 17.5px;
    width: 32px;
    height: 32px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
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
