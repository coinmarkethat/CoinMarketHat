import React from "react";
import { FaSearch, FaMoon, FaUser } from "react-icons/fa";
import { MdStar, MdStarBorder } from "react-icons/md";
const Icon = ({ name, size, color }) => {
  if (name === "search") {
    return <FaSearch size={size} color={color} />;
  } else if (name === "moon") {
    return <FaMoon size={size} color={color} />;
  } else if (name === "user") {
    return <FaUser size={size} color={color} />;
  } else if (name === "star") {
    return <MdStar size={size} color={color} />;
  } else if (name === "border_star") {
    return <MdStarBorder size={size} color={color} />;
  }
};
export default Icon;
