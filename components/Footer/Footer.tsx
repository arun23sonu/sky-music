import React from "react";
import { useSelector } from "react-redux";
import {
  FOOTEROPTIONS,
  RIGHTS,
  SKYDESCRIPTION,
} from "../../shared/utils/Constant/footerOptions";
import { ThemeProvider } from "styled-components";
import {
  DARKTHEME,
  LIGHTTHEME,
} from "../../shared/utils/Constant/themeOptions";
import { StyledFooter } from "./Footer.styles";
import { RootState } from "../../pages/_app";

interface FooterProps {
  id: number;
  name: string;
}
const Footer = () => {
  const { theme } = useSelector((state: RootState | any) => state.albumData);

  return (
    <ThemeProvider theme={theme === "Light" ? LIGHTTHEME : DARKTHEME}>
      <StyledFooter data-testid="footer">
        <div className="about">
          <div className="about-sky">About Sky Music</div>
          <div className="skymusic">{SKYDESCRIPTION}</div>
        </div>
        <div className="footer">
          <div className="footer-contents">
            {FOOTEROPTIONS.map((footer: FooterProps) => {
              return <div className="footer-content">{footer.name}</div>;
            })}
          </div>
          <div className="rights">{RIGHTS}</div>
        </div>
      </StyledFooter>
    </ThemeProvider>
  );
};

export default Footer;
