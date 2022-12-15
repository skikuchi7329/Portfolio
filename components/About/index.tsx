import Image from "next/image";
import  StyledAbout from "./index.styled";

const About = () => {
  const name = 'Shohei Kikuchi';
  return(
    <StyledAbout>
      <div className="about">
        <Image  className="profileIcon" alt="profile" src='/images/profile.png' width={50} height={50}></Image>
        <h2>自己紹介</h2>
        <ul>
          <li>名前：{name}</li>
          <li>学歴：東京理科大学理学部第二部数学科</li>
          <li>趣味：プログラミング学習、お酒、ゲーム、アニメ、麻雀、温泉</li>
          <li></li>
        </ul>
    </div>
    </StyledAbout>
  );
};

export default About;