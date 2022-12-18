import styled from "styled-components";

const StyledAlbumTitle = styled.div`
  height: 14rem;
  width: 14rem;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 7px 29px 0px;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 7px 29px 0px;
  }
  a {
    :hover {
      text-decoration: underline;
      color: gray;
    }
  }
  .album {
    border-radius: 10px;
    padding-bottom: 1em;
  }
  .artist {
    color: ${(props) => props.theme.artist};
    font-size: 0.7rem;
    font-weight: 500;
  }
  .song {
    color: ${(props) => props.theme.song};
    font-size: 1rem;
    font-weight: 500;
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
