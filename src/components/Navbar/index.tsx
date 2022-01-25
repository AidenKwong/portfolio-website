import { useState, useRef } from "react";
import "./navbar.scss";
import logo from "../../asset/image/favicon-32x32.png";
import { FaLinkedin, FaGithub, FaGitlab } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";

export default function Navbar() {
  const [dropDown, setDropDown] = useState(false);
  const linksRef = useRef(null);
  return (
    <div className="navbar">
      <div className="website-name">
        <img
          src={logo}
          style={{ border: "0.25rem solid #001d3d", borderRadius: "0.5rem" }}
        />
        Aiden Kwong
      </div>
      <div className="menu">
        <MdOutlineMenu
          onClick={() => {
            setDropDown(!dropDown);
            console.log(dropDown);
          }}
        />
      </div>

      <div className={`${dropDown ? "links" : "links active"}`} ref={linksRef}>
        <a
          href="https://www.linkedin.com/in/aiden-kwong-6b17861b4/"
          target="_blank"
        >
          <FaLinkedin />
          LinkedIn
        </a>
        <a href="https://github.com/AidenKwong" target="_blank">
          <FaGithub />
          GitHub
        </a>
        <a href="https://gitlab.com/aidenkwong5" target="_blank">
          <FaGitlab />
          GitLab
        </a>
      </div>
    </div>
  );
}
