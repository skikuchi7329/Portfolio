import Head from "next/head";
import Image from "next/image";
import { ReactNode } from "react";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout title="Portfolio" description="about">
      <p>welcome to my blog</p>
    </Layout>
  );
}
