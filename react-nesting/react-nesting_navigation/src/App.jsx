import "./App.css";

import Header from "./Header.jsx";
import Nav from "./Navigation.jsx";
import Link from "./Link.jsx";
import Logo from "./Logo.jsx";
import Avatar from "./Avatar.jsx";

export default function App() {
  return (
    <>
      <Header>
        <Logo />
        <Nav>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Nav>
        <Avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
