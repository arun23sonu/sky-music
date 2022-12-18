import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.headerBackground};
  color: ${(props) => props.theme.color};
  justify-content: space-evenly;
  width: 100vw;
  height: 10vh;
  .sky-music {
    width: 100%;
    flex-grow: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
  }
  .skymusic-container {
    display: flex;
    height: 10vh;
    justify-content: center;
    align-items: center;
  }
  .hamburger {
    display: none;
  }
  .music {
    font-size: 2.4em;
    height: 10vh;
    display: flex;
    font-weight: 800;
    background: -webkit-linear-gradient(#ff9e67, #e464d8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    align-items: center;
  }
  .search-button {
    background-color: ${(props) => props.theme.search};
    cursor: pointer;
    height: 5vh;
    width: 3vw;
    border: 1px solid ${(props) => props.theme.search};
    border-top-right-radius: 5px;
  }
  .toggle {
    background: none;
    border: none;
    cursor: pointer;
  }
  .search {
    width: 40vw;
    height: 5vh;
    border: 1px solid ${(props) => props.theme.search};
    border-top-left-radius: 5px;
    font-size: 1rem;
    outline: none;
    padding-inline: 2em;
    background-color: ${(props) => props.theme.headerBackground};
  }
  .search-icon {
    color: ${(props) => props.theme.song};
  }
  .search-bar {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .header-right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 35vw;
  }

  .theme {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .header-contents {
    font-size: 0.9rem;
    cursor: pointer;
    font-weight: 550;
    cursor: pointer;
    font-family: sans-serif;
    :hover {
      color: #ee575a;
    }
  }
  a {
    text-decoration: none;
  }
  .close {
    display: flex;
    width: 100vw;
    justify-content: flex-end;
    height: 2rem;
  }
  @media (max-width: 799px) {
    .hamburger {
      display: block;
      width: 1.5rem;
      height: 1.5rem;
    }
    .header-right {
      display: none;
    }
  }
  @media (max-width: 1280px) {
    .sky-logo {
      width: 5rem;
      height: 4rem;
    }
    .search {
      width: 30vw;
    }
    .header-right {
      display: 40vw;
    }
  }
  @media (max-width: 1080px) {
    .header-right {
      display: none;
    }
    .music {
      padding-bottom: 0.1em;
    }
    .search {
      width: 60vw;
    }
    .hamburger {
      display: block;
      width: 2.5rem;
      height: 2.5rem;
      color: #ee575a;
    }
    .mobile {
      display: flex;
      height: 100vh;
      flex-direction: column;
      justify-content: flex-start;
      position: fixed;
      padding: 2rem;
      inset: 0px 80px 0px 0px;
      background-color: #191b3e;
      color: #fff;
      z-index: 100;
    }
    .login {
      height: 30vh;
      font-size: 1.2rem;
      font-weight: 600;
    }
    .mobile-options {
      height: 50vh;
      display: flex;
      font-size: 1.2rem;
      font-weight: 600;
      flex-direction: column;
      justify-content: flex-start;
      gap: 2rem;
    }
    .mobile-footer {
      height: 20vh;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
    .skymusic-container {
      width: 30vw;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
  @media (max-width: 730px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 14vh;
    padding-block: 1em;
    .search {
      width: 95vw;
      padding: auto;
    }
    .sky-music {
      display: flex;
      gap: 0px;
      align-items: center;
    }
    .music {
      font-size: 1.7em;
      padding-bottom: 0.1em;
    }
    .sky-logo {
      width: 3.5rem;
      height: 2.5rem;
    }
    .hamburger {
      display: block;
      width: 2rem;
      height: 2rem;
      color: #ee575a;
    }
    .skymusic-container {
      height: 5vh;
      width: 100vw;
      display: flex;
      justify-content: flex-start;
      gap: 2rem;
      padding-inline: 2rem;
      flex-shrink: 0;
    }
  }
`;
export { StyledHeader };
