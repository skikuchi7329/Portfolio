import fs from "fs";
import path from "path";
import data from "../../../data.json";
import Image from "next/image";
import StyledAbout from "./index.styled";

const About = () => {
  const hobbies = data.about.hobby;
  const hobbyObj = () => {
    for (let i = 0; i < hobbies.length; i++) {}
  };
  return (
    <StyledAbout>
      <div className="about">
        <Image
          className="profileIcon"
          alt="profile"
          src="/images/profile.png"
          width={50}
          height={50}
        ></Image>
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
              <td>{data.about.name}</td>
            </tr>
            <tr>
              <td>{data.about.carrier}</td>
            </tr>
            <tr>
              <td>
                {data.about.hobby[1]} &nbsp;
                {data.about.hobby[2]}&nbsp;
                {data.about.hobby[3]} &nbsp;
                {data.about.hobby[4]} &nbsp;
                {data.about.hobby[5]} &nbsp;
                {data.about.hobby[6]} &nbsp;
              </td>
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
