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
        <p>이곳은 무형의 생산물을 기록하는 공간입니다.<br />
        </p>
      </div>
    </section>
    <section id="about" class="block block-text">
      <h2 class="block-title underline inner-sm">프로그래밍</h2>
      <div class="block-content inner-sm">
        <p>C, C#, Objective-C, Golang, Python, HTML, CSS, JavaScript, React<br /><br />
        ❌ Java 만능주의 그만</p>
      </div>
    </section>
    <section id="about" class="block block-text">
      <h2 class="block-title underline inner-sm">데이터베이스</h2>
      <div class="block-content inner-sm">
        <p>PostgreSQL, MySQL, MSSQL, MongoDB, Redis, SQLite<br /><br />
        ❌ Oracle 양아치 안씀</p>
      </div>
    </section>
    <section id="about" class="block block-text">
      <h2 class="block-title underline inner-sm">그래픽툴 좋아함</h2>
      <div class="block-content inner-sm">
        <p>Adobe Photoshop, Illustrator, InDesign 중상급 활용 <br />
        Adobe Premiere 중상급 편집 <br />
        Adobe XD, Figma UI/UX 디자인툴 사용 </p>
      </div>
    </section>
    <section id="about" class="block block-text">
      <h2 class="block-title underline inner-sm">관심분야</h2>
      <div class="block-content inner-sm">
        <p>서비스 시스템 기획 및 개발 <br />
        데이터베이스 튜닝 및 쿼리 개선 <br />
        백엔드 성능 향상을 위한 서버튜닝 <br />
        프론트엔드 데이터 로드, 렌더링 최적화 전략</p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
