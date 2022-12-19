import styled from "styled-components";

export const StyledFooter = styled.div`
  width: 100vw;
  padding: 10rem 5rem 1rem 5rem;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};

  @media (max-width: 1080px) {
    padding: 2rem;
  }
  .about {
    width: 90vw;
    padding: 2rem;
    border: 0.1px solid gray;
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
  .skymusic {
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 2vh;
    color: ${(props) => props.theme.artist};
  }
  .footer {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    @media (max-width: 1080px) {
      display: flex;
      flex-direction: column;
      gap: 2em;
    }
  }
  .about-sky {
    font-size: 1.3rem;
    font-weight: 600;
  }
  .footer-contents {
    display: flex;
    gap: 1em;
    align-items: center;
  }
  .footer-content {
    font-weight: 600;
  }
  .rights {
    color: ${(props) => props.theme.artist};
    font-weight: 400;
    font-size: 0.8em;
  }
`;
