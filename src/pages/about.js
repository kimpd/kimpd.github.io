import React from 'react';

import Layout from "../components/Layout"
import Seo from "../components/Seo"

function AboutPage() {
  return (
    <Layout pageTitle="About">
      <Seo title="About" />
      <article class="post page post-full">
        <header class="post-header inner-sm">
          <h1 class="post-title underline">👨‍💻 About</h1>
          <div class="post-subtitle inner-sm">8bit 에서 인공지능 까지.</div>
        </header>
        <div class="about-image">
          <img src="../../img/MSX-DOS2.gif" alt="MSX-DOS" />
        </div>
        <div class="post-content inner-sm">
          <p>처음으로 MSX 8비트 개인용 컴퓨터를 샀던, 그날의 파란 첫 화면을 아직도 생생하게 기억합니다.<br />
          컴퓨터부 활동을 시작으로, 전산학을 전공하고, 테헤란 밸리 시절을 거쳐,<br />
          아직도 개발이란걸 하고 있으니, 저는 컴퓨터에 적성이 잘 맞는듯 합니다.</p>

          <p>하지만 그동안 습득한 기술들과 제작한 생산물들은, 컴퓨터에서만 동작하고 존재합니다.<br />
          이런 이유로 한때 많은 허무함과 상실감을 느끼고, 다른 분야의 일도 해보았지만,<br />
          웹기술의 비약적인 발전에 흥미를 느껴, 디지털 샌드박스 속으로 다시 돌아왔습니다.<br />
          </p>

          <p>컴퓨터 산업의 지속적인 발전은 어디까지일지 너무 궁금하지만,<br />
          앞으로 인공지능은 보다 더 낮은 비용을 무기로,<br />
          인간의 아날로그 세상을 빠르게 잠식해 나갈겁니다.<br />
          </p>

          <p>인공지능 전능시대를 목전에 두고서야, 여러 고민들의 본질을 알게 되었습니다.<br />
          단지 모니터를 조금만 벗어나면, 아날로그의 세상으로 돌아갈 수 있다는 것을...<br />          
          </p>

          <p><h3><em><b>"아날로그는 빨간약 입니다!"</b></em></h3></p>
        </div>
      </article>
    </Layout>
  ) 
}

export default AboutPage;
