import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Planner & Developer" />
    <section id="hero" class="block block-hero">
      <h1 class="block-title inner-sm">☕ Welcome</h1>
      <div class="block-content inner-sm">
        <p>KimPD의 디지털 공작실 입니다.</p>
      </div>
    </section>
    <section id="about" class="block block-text">
      <h2 class="block-title underline inner-sm">디지털 노동자</h2>
      <div class="block-content inner-sm">
        <p>이곳은 &quot;디지털 공작실&quot; 입니다.<br />
        무형의 생산물을 기록하고 전시하는 공간입니다.</p>
      </div>
    </section>
    <section id="about" class="block block-text">
      <h2 class="block-title underline inner-sm">언어</h2>
      <div class="block-content inner-sm">
        <p>C, C#, Objective-C, Golang, Python, HTML, CSS, JavaScript<br />
        Java 손절</p>
      </div>
    </section>
    <section id="about" class="block block-text">
      <h2 class="block-title underline inner-sm">도구</h2>
      <div class="block-content inner-sm">
        <p>PostgreSQL, MySQL, MSSQL, MongoDB, Redis, SQLite<br />
        Oracle 손절</p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
