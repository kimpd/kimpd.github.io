import * as React from "react"
import ReactModal from "react-modal"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Modal from './Modal'

function Header({ pageTitle }) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleModalOpen = (event) => {
    setIsModalOpen(true);
  };

  const handleModalClose = (event) => {
    setIsModalOpen(false);
  };

  const subPages = [
    /* <!-- 개발 완료한 프로젝트들 소개 --> */
    {"title": "Project", "link": "/project/", "menu": "Project"},
    /* <!-- 개발에 관련된 일상 이야기 --> */
    {"title": "DevLog", "link": "/devlog/", "menu": "DevLog"},
    /* <!-- 개발자 KimPD 소개, 보유 기술, 관심 기술 --> */
    {"title": "About", "link": "/about/", "menu": "About"},
    /* <!-- 연락 및 의뢰 --> */
    {"title": "Contact", "link": "/contact/", "menu": "Contact"},
    /* <!-- 터미널 디자인 배경에 현재 진행중인 프로젝트와 예정중인 프로젝트 일정 소개 --> */
    {"title": "Terminal", "link": "/terminal/", "menu": "KimPD@Next:~$"},
  ];
  
  return (
    <>
    <header id="masthead" class="site-header dark">
      <div class="site-header-wrap">
        <div class="site-header-inside">
          <div class="site-branding">
            <p class="profile">
              {/* <StaticImage
                src="../images/KimPD.jpg"
                class="avatar"
                alt="KimPD"
              /> */}
              <a href="/"><img src="../../img/KimPD.jpg" class="avatar" alt="KimPD" /></a>
            </p>
            <div class="site-identity">
              <p class="site-title"><a href="/">KimPD's Workshop</a></p>
              <p class="site-description">Planner & Developer</p>
            </div>
            <button id="menu-toggle" class="menu-toggle">
              <span class="screen-reader-text">Menu</span>
              <span class="icon-menu" aria-hidden="true"></span>
            </button>
          </div>
          <nav id="main-navigation" class="site-navigation" aria-label="Main Navigation">
            <div class="site-nav-wrap">
              <div class="site-nav-inside">
                <ul class="menu">
                  {console.log("pageTitle = ", pageTitle)}
                  {
                    subPages.map(page => (
                      pageTitle === page.title
                      ? 
                        <li class="menu-item current-menu-item">
                          <div class="cursor"><a href={page.link}>{page.menu}</a></div>     
                        </li>
                      : 
                        <li class="menu-item">
                          <a href={page.link}>{page.menu}</a>     
                        </li>
                    ))
                  }
                </ul>
                <div class="social-links">
                  <a href="#" onClick={handleModalOpen} class="button button-icon">
                    <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                    </svg>
                    <span class="screen-reader-text">Twitter</span>
                  </a>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener " class="button button-icon">
                    <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.868 5.868 0 004.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.86 5.86 0 001.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.847 5.847 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0 01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 01-1.379-.899 3.644 3.644 0 01-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z" />
                    </svg>
                    <span class="screen-reader-text">Instagram</span>
                  </a>
                  <a href="https://github.com/" target="_blank" rel="noopener " class="button button-icon">
                    <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    <span class="screen-reader-text">GitHub</span>
                  </a>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener " class="button button-icon">
                    <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span class="screen-reader-text">LinkedIn</span>
                  </a>
                  <a href="https://dev.to/" target="_blank" rel="noopener " class="button button-icon">
                    <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.435 9.444c-0.208-0.155-0.416-0.233-0.624-0.233h-0.934v5.597h0.935c0.208 0 0.416-0.078 0.624-0.233s0.312-0.388 0.312-0.7v-3.731c-0.001-0.311-0.105-0.544-0.312-0.7zM21.649 0h-19.296c-1.296 0-2.349 1.049-2.352 2.346v19.307c0.003 1.297 1.055 2.346 2.352 2.346h19.296c1.297 0 2.349-1.049 2.352-2.346v-19.307c-0.003-1.297-1.055-2.346-2.352-2.346zM8.261 13.885c0 1.008-0.622 2.534-2.591 2.531h-2.486v-8.864h2.538c1.899 0 2.537 1.525 2.538 2.533l0.001 3.8zM13.655 9.136h-2.854v2.058h1.745v1.584h-1.745v2.058h2.855v1.584h-3.331c-0.598 0.016-1.095-0.457-1.11-1.055v-6.702c-0.014-0.597 0.459-1.093 1.056-1.108h3.385l-0.001 1.581zM19.207 15.312c-0.707 1.647-1.974 1.319-2.541 0l-2.064-7.757h1.745l1.592 6.092 1.584-6.092h1.745l-2.060 7.757z"></path>
                    </svg>
                    <span class="screen-reader-text">DEV</span>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
    <Modal
      open={isModalOpen}
      close={handleModalClose}
      header="SNS는 인생의 낭비다. - 알렉스 퍼거슨"
    >
      <img src="../../img/twitter-satire.jpg" alt="Twitter" />
    </Modal>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
