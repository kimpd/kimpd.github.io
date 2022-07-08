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
          <p>처음으로 8비트 개인용 컴퓨터를 샀던, 그날의 첫 화면이 아직도 기억속에 생생합니다.<br />
          컴퓨터부 활동을 시작으로, 전산학과를 전공하고, 테헤란 밸리 시절을 거쳐,<br />
          아직도 개발이란걸 하고 있으니, 저는 컴퓨터를 좋아하는게 맞습니다.</p>

          <p>하지만, 제가 만드는 혁신과 이상적인 세상은 컴퓨터속에서만 존재하고 동작합니다.<br />
          이런 사실에 많은 고민과 해결을 위한 다른 시도도 했지만,<br />
          이내 인터넷의 물결속에 휩쓸리고 맙니다.<br />
          </p>

          <p>앞으로 인공지능은 낮은 비용의 디지털 변환을 무기로,<br />
          아날로그 세상을 점점 더 빠르게 대체해 나갈겁니다.<br />
          우리의 삶 또한 점점 더 많은 부분과 시간을 가상 공간속에 뺏기게 될 것입니다.<br />
          </p>

          <p>컴퓨터를 30년 넘게 다루다 보니, 이제서야 조금 본질을 알게 되었습니다.<br />
          모니터를 벗어나면 보이는 일상의 모습과 행동들이 진짜 나 라는 것을...<br />
          </p>

          <p><h3><em><b>"우리의 삶은 순수 아날로그 입니다!"</b></em></h3></p>
        </div>
      </article>
    </Layout>
  ) 
}

export default AboutPage;
