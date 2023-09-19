import styles from "../components/Navbar.css";
import Image from "next/image";
import logo from "../../../assets/Logo.svg";
import lang from "..//../../assets/lang.svg";
import globe from "../..//../assets/globe.svg";
import Navigation from "./Navigation";

export default function Navbar({navigation}) {
  return (
    <header>
      <div className="logo">
        <Image src={logo} alt="Logo" width={100} height={50} />
      </div>
      <ul>
    <Navigation path="/home" title="Home"/>
    <Navigation path="/about" title="About"/>
    <Navigation path="/services" title="Services"/>
    <Navigation path="/hello" title="Hello"/>
    <Navigation path="/world" title="World"/>
    <Navigation path="/wow" title="Wow"/>
    <Navigation path="/props" title="Using Props"/>
      </ul>
      <div className="icons">
        <Image src={lang} width={80} height={40} />
        <Image src={globe} width={80} height={40} />
      </div>
    </header>

  );
}
