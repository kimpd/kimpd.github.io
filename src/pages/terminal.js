import React from 'react';

import Layout from "../components/Layout"
import Seo from "../components/Seo"

function TerminalPage() {
  return (
    <Layout pageTitle="Terminal">
      <Seo title="Terminal" />
      <section id="hero" class="block block-hero">
        <header class="post-header inner-sm">
          <h1 class="post-title underline">💻 Terminal</h1>
          <div class="block-content inner-sm">
            <p>영혼의 개발 도구</p>
          </div>
        </header>
        <div class="about-image">
          <img src="../../img/login-console.gif" alt="login" />
        </div>
      </section>

      <section id="about" class="block block-text">
      <h2 class="block-title underline inner-sm">데이터가 주인공</h2>
        <div class="block-content inner-sm">
          데이터의 본질에만 집중하는 도구이다.<br />
          최소한의 명령으로 군더더기 없는 결과를 출력한다.<br />
          <br />
        </div>
      </section>

      <section id="about" class="block block-text">
        <h2 class="block-title underline inner-sm">현재 진행중 프로젝트</h2>
        <div class="block-content inner-sm">
          <ul>
            <li>
              웹 지도정보 스크래핑
            </li>
            <li>
              함수형 웹프레임워크 서버 개발 (Elixir)
            </li>
            <li>
              SimStock 서비스 모듈 (React)
            </li>
            <li>
              데이터베이스 REST API 서버 (Golang)
            </li>
          </ul>
        </div>
      </section>
      <section id="about" class="block block-text">
        <h2 class="block-title underline inner-sm">진행 예정인 프로젝트</h2>
        <div class="block-content inner-sm">
          <ul>
            <li>
              2023년 진행이 예정된 프로젝트는 없습니다.
            </li>
          </ul>
        </div>
      </section>
    </Layout>
)
}

export default TerminalPage;
