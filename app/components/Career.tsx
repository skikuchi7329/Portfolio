import styles from "./Career.module.scss";

type Props = {
  company: string;
  term: string;
  contents: string;
  details: string;
};

const Career = ({ company, term, contents, details }: Props) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.heading}>{company}</h3>
      <p className={styles.paragraph}>{term}</p>
      <p className={styles.paragraph}>{contents}</p>
      <p className={styles.paragraph}>{details}</p>
    </div>
  );
};

export default Career;
