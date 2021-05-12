import React from "react";
import "./sidebar.css";
import KeyboardTabIcon from "@material-ui/icons/KeyboardTab";
import HomeIcon from "@material-ui/icons/Home";
import GradeIcon from "@material-ui/icons/Grade";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import InfoIcon from "@material-ui/icons/Info";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import SettingsIcon from "@material-ui/icons/Settings";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const SideBar = () => {
  return (
    <nav className="sidebar">
      <div className="first">
        <h1>
          CINEMA<span className="score">SCORE</span>
        </h1>
        <KeyboardTabIcon className="topIcon" />
      </div>
      <p>General</p>

      <li>
        <HomeIcon />
        <span>Home</span>
      </li>
      <li>
        <GradeIcon />
        <span>Rating</span>
      </li>
      <li>
        <ThumbUpIcon />
        <span>Popular</span>
      </li>
      <li>
        <FavoriteIcon />
        <span>Favourite</span>
      </li>
      <li>
        <CardGiftcardIcon />
        <span>Bonus</span>
      </li>
      <li>
        <InfoIcon />
        <span>About</span>
      </li>
      <div className="second">
        <p>Account</p>
        <li>
          <ChatBubbleIcon />
          <span>Chats</span>
        </li>
        <li>
          <BookmarkIcon />
          <span>Saved</span>
        </li>
        <li>
          <AccountBalanceWalletIcon />
          <span>Wallet</span>
        </li>
        <li>
          <SettingsIcon />
          <span>Settings</span>
        </li>
      </div>
      <li className="infi">
        <img
          className="avatar"
          alt=""
          src="https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg"
        />
        <a
          href="https://infynno.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="txt">Infinite Innovations</span>
        </a>
        <ExpandMoreIcon />
      </li>
    </nav>
  );
};

export default SideBar;
