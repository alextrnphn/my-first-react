"use client";

//import Libraries
import styled from "styled-components";
//import components
import ProfileHeader from "../components/ProfileHeader/ProfileHeader";
import NavigationBar from "../components/NavigationBar/NavigationBar";
//import all icons for nav
import CompassIcon from "../../../public/icons/compass.svg";
import FilmIcon from "../../../public/icons/film.svg";
import HeartIcon from "../../../public/icons/heart.svg";
import HouseIcon from "../../../public/icons/house.svg";
import MagnifyingGlassIcon from "../../../public/icons/magnifyingglass.svg";
import MessageIcon from "../../../public/icons/message.svg";

const ProfileContainer = styled.div`
  /* background-color: red; */
  padding-left: 73px;
  max-width: 935px;
  margin: 30px auto;
`;
export interface Icon {
  path: string;
  altText: string;
  width: number;
  height: number;
}
const iconWidth = 25;
const iconHeight = 25;
const navbarConfigItems: Icon[] = [
  {
    path: CompassIcon,
    altText: "Discover",
    width: iconWidth,
    height: iconHeight,
  },
  { path: HouseIcon, altText: "Home", width: iconWidth, height: iconHeight },
  {
    path: MagnifyingGlassIcon,
    altText: "Search",
    width: iconWidth,
    height: iconHeight,
  },
  { path: FilmIcon, altText: "Reels", width: iconWidth, height: iconHeight },
  {
    path: MessageIcon,
    altText: "Message",
    width: iconWidth,
    height: iconHeight,
  },
  { path: HeartIcon, altText: "Likes", width: iconWidth, height: iconHeight },
];

export default function Profile() {
  return (
    <body>
      {/* navigation bar */}
      <NavigationBar items={navbarConfigItems} />
      <ProfileContainer>
        {/* header */}
        <ProfileHeader />
        {/* photo grid*/}
        {/* video stories*/}
      </ProfileContainer>
    </body>
  );
}
