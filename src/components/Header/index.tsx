import Link from "next/link";
import { StyledHeader } from "./index.styled";

const Header = () => {
  return(
    <StyledHeader>
      <header>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="about">About</Link></li>
            <li><Link href="article">Works</Link></li>
          </ul>
        </nav>
        <h1><Link href="/">Portfolio</Link></h1>
      </header>
    </StyledHeader>
  );
};

export default Header;
