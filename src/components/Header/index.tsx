import Link from "next/link";
import { StyledHeader } from "./index.styled";

const Header = () => {
  return (
    <StyledHeader>
      <header>
        {/* <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="">About</Link></li>
            <li><Link href="">Works</Link></li>
          </ul>
        </nav> */}
        <h1>
          <Link href="/">Welcome To My Blog</Link>
        </h1>
      </header>
    </StyledHeader>
  );
};

export default Header;
