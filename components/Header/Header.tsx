import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { HEADEROPTIONS } from "../../shared/utils/Constant/headerOptions";
import { albumSlice } from "../../store/albumSlice";
import { StyledHeader } from "./Header.style";
import { ThemeProvider } from "styled-components";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import {
  DARKTHEME,
  LIGHTTHEME,
} from "../../shared/utils/Constant/themeOptions";
import { HeaderOptionsProps, HeaderRightProps } from "./Header.type";

const MobileMenu = ({
  setOpen,
}: React.Dispatch<React.SetStateAction<boolean>> | any) => {
  return (
    <div className="mobile">
      <CgClose
        className="close"
        onClick={() => {
          setOpen(false);
        }}
      />
      <div className="login">
        <Link href="/">
          <div>
            <Image alt="sky-music" src="/sky.png" height={70} width={100} />
          </div>
        </Link>
        Login/Sign Up
      </div>
      <div className="mobile-options">
        {HEADEROPTIONS.map((option: HeaderOptionsProps) => {
          return <div className="mobile-option">{option.name}</div>;
        })}
      </div>
      <div className="mobile-footer">footer</div>
    </div>
  );
};

const SkyMusic = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="skymusic-container">
      <GiHamburgerMenu
        className="hamburger"
        onClick={() => {
          setOpen(true);
        }}
      />
      {open && <MobileMenu setOpen={setOpen} />}
      <Link href="/">
        <div className="sky-music">
          <Image
            alt="sky-music"
            src="/sky.png"
            height={70}
            width={100}
            className="sky-logo"
          />
          <div className="music">Music</div>
        </div>
      </Link>
    </div>
  );
};
const SearchBar = () => {
  const dispatch = useDispatch();
  return (
    <div className="search-bar">
      <Link href="/search">
        <input
          type="search"
          placeholder="Search songs,artists & podcast you love!"
          onChange={(event: React.ChangeEvent<HTMLInputElement> | any) =>
            dispatch(albumSlice.actions.addsearch(event.target.value))
          }
          className="search"
        ></input>
        <button type="submit">
          <FaSearch size={15} />{" "}
        </button>
      </Link>
    </div>
  );
};

const HeaderRight = ({ setTheme, theme }: HeaderRightProps) => {
  return (
    <div className="header-right">
      <div className="theme">
        {theme === "Dark" ? (
          <MdOutlineLightMode
            size={20}
            color="white"
            onClick={() => setTheme("Light")}
          />
        ) : (
          <MdDarkMode size={20} onClick={() => setTheme("Dark")} />
        )}
      </div>
      {HEADEROPTIONS.map((options: HeaderOptionsProps) => {
        return (
          <div className="header-contents" key={options.id}>
            {options.name}
          </div>
        );
      })}
    </div>
  );
};
const Header = () => {
  const [theme, setTheme] = useState("Light");
  return (
    <ThemeProvider theme={theme === "Light" ? LIGHTTHEME : DARKTHEME}>
      <StyledHeader data-testid="header">
        <SkyMusic />
        <SearchBar />
        <HeaderRight setTheme={setTheme} theme={theme} />
      </StyledHeader>
    </ThemeProvider>
  );
};

export default Header;
