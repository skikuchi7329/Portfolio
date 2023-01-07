import Image from "next/image";
import  StyledAbout from "./index.styled";

const About = () => {
  const name = 'Shohei Kikuchi';
  return(
    <StyledAbout>
      <div className="about">
        <Image  className="profileIcon" alt="profile" src='/images/profile.png' width={50} height={50}></Image>
        <h2>自己紹介</h2>
        <table>
          <thead>
            <tr>
              <th>名前</th>
            </tr>
            <tr>
              <th>経歴</th>
            </tr>
            <tr>
              <th>趣味</th>
            </tr>
            <tr>
              <th>言語</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{name}</td>
            </tr>
            <tr>
              <td>東京理科大学理学部第二部数学科</td>
            </tr>
            <tr>
              <td>プログラミング学習、お酒、ゲーム、アニメ、麻雀、温泉</td>
            </tr>
            <tr>
              <td>JavaScript</td>
            </tr>
          </tbody>
        </table>
    </div>
    </StyledAbout>
  );
};

export default About;
