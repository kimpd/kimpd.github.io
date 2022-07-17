import React from 'react';

import Layout from "../components/Layout"
import Seo from "../components/Seo"

function DevLogPage() {
  
  return (
    <Layout pageTitle="DevLog">
      <Seo title="DevLog" />
      <section id="hero" class="block block-hero">
        <header class="post-header inner-sm">
          <h1 class="post-title underline">📑 DevLog</h1>
          <div class="block-content inner-sm">
            <p>수작업 개발에 대한 나의 생각</p>
          </div>
        </header>
      </section>
      <section id="about" class="block block-text">
      <h2 class="block-title underline inner-sm">과정은 빠르게, 수정은 쉽게...</h2>
        <div class="block-content inner-sm">
          완성까지의 과정은 최대한 빠르게 : 최소한의 시간과 코딩으로 빠르게 완성한다.<br />
          완성이후의 수정은 최대한 쉽게 : 누구라도 쉽게 고칠수 있는 구조로 개발한다.<br />
        </div>
        <br />
        <br />
        <h2 class="block-title underline inner-sm">새로운 시작은 항상 설레고 흥미롭다.</h2>
        <div class="block-content inner-sm">
          개발은 새로운 문제에 대한 고찰과 해결의 과정을 반복한다.<br />
          하지만 반복되는 지루함과 게으름은 언제나 위기를 가져왔다.<br />
        </div>
        <br />
        <br />
        <h2 class="block-title underline inner-sm">내게 남은 건전지의 수명은?</h2>
        <div class="block-content inner-sm">
          능력이 부족하여 체력으로 때우던 시절도 지나갔다.<br />
          요즘은 능력으로만 버텨야 하는데, 능력도 건전지처럼 소모되고 있었다.<br />
        </div>
        <br />
        <br />
        <h2 class="block-title underline inner-sm">닭 튀기는게 쉬울꺼라는 오산.</h2>
        <div class="block-content inner-sm">
          공사장 잡부로 며칠 노가다 나갔다가 병원비가 더 나왔다.<br />
          키보드 칠 힘이 조금이라도 남아 있다면, 치킨집 보다는 개발을 더 열심히 하는걸로.<br />
        </div>
        <br />
        <br />
        <h2 class="block-title underline inner-sm">틀린 그림 찾기.</h2>
        <div class="block-content inner-sm">
          아날로그 vs. 디지털 | 기계 vs. 컴퓨터 | 공단 vs. 디지털단지 | 공장 vs. 사무실 | 공돌이 vs. 개발자<br />
          디지털단지에서 일하는 개발자의 본질은 많이 &quot;틀려&quot;지셨습니까?<br />
        </div>
        <br />
        <br />
        <h2 class="block-title underline inner-sm">if (choice == red)</h2>
        <div class="block-content inner-sm">
          만약 매트릭스의 빨간약과 파란약처럼, 세상을 선택할 수 있는 기회가 주어진다면,<br />
          빨간약을 선택하여 컴퓨터가 없는 세상에서 살아보고 싶다.<br />
        </div>
        <br />
        <br />
        <h2 class="block-title underline inner-sm">잊혀짐에 대해 슬퍼하지 말자!</h2>
        <div class="block-content inner-sm">
          내가 만든 창작물의 잊혀짐을 너무 슬퍼하지 말자.<br />
          나 또한 시간이 지나면, 자연스럽게 잊혀질 것이니...<br />
        </div>
        <br />
        <br />
        <div class="block-buttons inner-sm">
          <a href="/" class="button">Think Stop!</a>
        </div>
    </section>
    </Layout>
  ) 
}

export default DevLogPage;
