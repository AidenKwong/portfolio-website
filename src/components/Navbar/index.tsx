import "./navbar.scss";
import logo from "../../asset/image/favicon-32x32.png";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="website-name">
        <img
          src={logo}
          style={{ border: "0.25rem solid #001d3d", borderRadius: "0.5rem" }}
        />
        Aiden Kwong
      </div>
      <div>Right</div>
    </div>
  );
}
