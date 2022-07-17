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
        <p>오래된 디지털 노동자.</p>
      </div>
    </section>
    <section id="about" class="block block-text">
      <h2 class="block-title underline inner-sm">디지털 공작실</h2>
      <div class="block-content inner-sm">
        <p>이곳은 무형의 생산물을 기록하고 방치하는 공간입니다.<br />
        </p>
      </div>
    </section>
    <section id="about" class="block block-text">
      <h2 class="block-title underline inner-sm">프로그래밍</h2>
      <div class="block-content inner-sm">
        <p>C, C#, Objective-C, Golang, Python, HTML, CSS, JavaScript<br /><br />
        ❌ Java 안함(뇌용량 초과)</p>
      </div>
    </section>
    <section id="about" class="block block-text">
      <h2 class="block-title underline inner-sm">데이터베이스</h2>
      <div class="block-content inner-sm">
        <p>PostgreSQL, MySQL, MSSQL, MongoDB, Redis, SQLite<br /><br />
        ❌ Oracle 안씀(비용 초과)</p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
