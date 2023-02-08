import Image from "next/image";
import StyledFooter from "./index.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <footer>
        <a href="http://github.com/skikuchi7329" target="_blank">
          <Image priority src='/images/github.png' width={20} height={20} alt='logo'></Image>
        </a>
        <a href="http://twitter.com/skikuchi7329" target="_blank">
          <Image priority src='/images/twitter.png' width={20} height={20} alt='logo'></Image>
        </a>
        </footer>
    </StyledFooter>
  );
};

export default Footer;

