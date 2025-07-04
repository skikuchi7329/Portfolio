import Image from 'next/image';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <a href="http://github.com/skikuchi7329" target="_blank" className={styles.link}>
          <Image priority src="/images/github_icon.png" width={20} height={20} alt="logo"></Image>
        </a>
        <a href="http://twitter.com/skikuchi7329" target="_blank" className={styles.link}>
          <Image priority src="/images/x_icon.png" width={20} height={20} alt="logo"></Image>
        </a>
      </div>
      <div>
        <p className={styles.paragraph}>&copy;copyright Shohei Kikuchi</p>
      </div>
    </footer>
  );
};

export default Footer;
