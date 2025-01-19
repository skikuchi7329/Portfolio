import styles from "./Works.module.scss";

type Props = {
  title: string;
  content: string;
  link?: string;
  language: string;
};

const Works = ({ title, content, language, link }: Props) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.content}>{content}</p>
      <p>{language}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        {link}
      </a>
    </div>
  );
};

export default Works;
