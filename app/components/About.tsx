import data from "../../data.json";
import Image from "next/image";
import styles from "./About.module.scss"

const About = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.about}>
        <Image
          className={styles.profileIcon}
          alt="profile"
          src="/images/profileIcon.jpg"
          width={100}
          height={100}
        />
        <h2 className={styles.heading}>About</h2>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.tr}>
              <th className={styles.th}>名前</th>
              <th className={styles.th}>{data.about.name}</th>
            </tr>
            <tr className={styles.tr}>
              <th className={styles.th}>経歴</th>
              <th className={styles.th}>{data.about.carrier}</th>
            </tr>
            <tr className={styles.tr}>
              <th className={styles.th}>趣味</th>
              <th className={styles.th}>{data.about.hobby}</th>
            </tr>
            <tr className={styles.tr}>
              <th className={styles.th}>言語</th>
              <th className={styles.th}>{data.about.language}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default About;
