import fs from "fs";
import path from "path";
import data from "../../../data.json";
import Image from "next/image";
import StyledAbout from "./index.styled";
import { isConstructorDeclaration } from "typescript";

const About = () => {
  return (
    <StyledAbout>
      <div className="about">
        <Image
          className="profileIcon"
          alt="profile"
          src="/images/profileIcon.jpg"
          width={100}
          height={100}
        ></Image>
        <h2>About</h2>
        <table>
          <tbody>
            <tr>
              <th>名前</th>
              <th>{data.about.name}</th>
            </tr>
            <tr>
              <th>経歴</th>
              <th>{data.about.carrier}</th>
            </tr>
            <tr>
              <th>趣味</th>
              <th>{data.about.hobby}</th>
            </tr>
            <tr>
              <th>言語</th>
              <th>{data.about.language}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </StyledAbout>
  );
};

export default About;
