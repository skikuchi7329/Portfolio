import Link from "next/link";
import { StyledHeader } from "./index.styled";

const Header = () => {
  return(
    <StyledHeader>
      <header>
        <h1><Link href="/">Portfolio</Link></h1>
      </header>
    </StyledHeader>
  );
};

export default Header;
