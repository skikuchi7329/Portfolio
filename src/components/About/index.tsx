import fs from "fs";
import path from "path";
import data from "../../../data.json";
import Image from "next/image";
import StyledAbout from "./index.styled";
import { isConstructorDeclaration } from "typescript";

const About = () => {
  const hobbies = data.about.hobby;

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
          <tr>
            <th>名前</th>
            <td>{data.about.name}</td>
          </tr>
          <tr>
            <th>経歴</th>
            <td>{data.about.carrier}</td>
          </tr>
          <tr>
            <th>趣味</th>
            <td>{hobbies}</td>
          </tr>
          <tr>
            <th>言語</th>
            <td>{data.about.language}</td>
          </tr>
        </table>
      </div>
    </StyledAbout>
  );
};

export default About;
