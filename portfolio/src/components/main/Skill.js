import "../style/skill.scss";

function Skill() {
  return (
    <article className="skill" id="skill">
      <h2>Skills</h2>
      <ul>
        <li>
          <div className="skill_title">
            <a href="#" className="open_btn">
              Html5 / Css3
            </a>
            <a href="#" className="open open_btn">
              <span className="row"></span>
              <span className="column"></span>
            </a>
          </div>
        </li>
        <li className="skill_box">
          <ul className="skill_txt">
            <li>웹 사이트 구축 및 디자인</li>
            <li>미디어쿼리를 이용한 반응형 웹 제작</li>
            <li>웹접근성을 고려한 시맨틱 태그</li>
            <li>flex, grid, position을 이용한 레이아웃 구현</li>
            <li>scss, animation을 이용한 스타일 적용</li>
          </ul>
        </li>
        <li>
          <div className="skill_title">
            <a href="#" className="open_btn">
              JavaScript
            </a>
            <a href="#" className="open open_btn">
              <span className="row"></span>
              <span className="column"></span>
            </a>
          </div>
          <div className="skill_box">
            <ul className="skill_txt">
              <li>ES6+ 기본 문법</li>
              <li>Map, Filter, Reduce 등 고차 함수</li>
              <li>함수 setTimeout, setInterval / 콜백함수 / async, await</li>
              <li>통신 Fetch API, Axios 라이브러리</li>
              <li>런타임 node js</li>
            </ul>
          </div>
        </li>
        <li>
          <div className="skill_title">
            <a href="#" className="open_btn">
              React
            </a>
            <a href="#" className="open open_btn">
              <span className="row"></span>
              <span className="column"></span>
            </a>
          </div>
          <div className="skill_box">
            <ul className="skill_txt">
              <li>컴포넌트 라이프 사이클에 대한 이해</li>
              <li>Hook</li>
              <li>React-router-dom</li>
            </ul>
          </div>
        </li>
        <li>
          <div className="skill_title">
            <a href="#" className="open_btn">
              Git & GitHub
            </a>
            <a href="#" className="open open_btn">
              <span className="row"></span>
              <span className="column"></span>
            </a>
          </div>
          <div className="skill_box">
            <ul className="skill_txt">
              <li>git bash 사용 및 깃허브를 이용한 작업물 저장</li>
              <li>버전 관리 및 업데이트</li>
            </ul>
          </div>
        </li>
        <li>
          <div className="skill_title">
            <a href="#" className="open_btn">
              Graghics
            </a>
            <a href="#" className="open open_btn">
              <span className="row"></span>
              <span className="column"></span>
            </a>
          </div>
          <div className="skill_box">
            <ul className="skill_txt">
              <li>Photoshop, Illustrator, figma</li>
              <li>이미지 편집 웹 화면 구현</li>
              <li>UI & UX를 고려한 디자인 가능</li>
              <li>프로토타입 제작</li>
            </ul>
          </div>
        </li>
      </ul>
    </article>
  );
}

export default Skill;
