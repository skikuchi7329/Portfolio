import Image from "next/image";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <a
          href="http://github.com/skikuchi7329"
          target="_blank"
          className={styles.link}
        >
          <Image
            priority
            src="/images/github.png"
            width={20}
            height={20}
            alt="logo"
          ></Image>
        </a>
        <a
          href="http://twitter.com/skikuchi7329"
          target="_blank"
          className={styles.link}
        >
          <Image
            priority
            src="/images/twitter.png"
            width={20}
            height={20}
            alt="logo"
          ></Image>
        </a>
      </div>
      <div>
        <p className={styles.paragraph}>&copy;copyright Shohei Kikuchi</p>
      </div>
    </footer>
  );
};

export default Footer;
