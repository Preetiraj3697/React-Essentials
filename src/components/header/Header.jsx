import "./Header.css";
import LogoImage from "../../assets/react-core-concepts.png";

const getRadom = (max) => {
  return Math.floor(Math.random() * (max + 1));
};
const data = ["Fundamental", "core", "component"];
export default function Header() {
  return (
    <header>
      <img src={LogoImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {data[getRadom(2)]} React concepts you will need for almost any app you
        are going to build!
      </p>
    </header>
  );
}
