import "../style/about.scss";

function About() {
  return (
    <article className="about" id="about">
      <div className="aboutMe">
        <h2>
          About
          <br className="br" /> Me
        </h2>
        <h3>
          끊임없이 성장하는 프론트엔드 <br className="br" />
          개발자 마해정입니다
        </h3>
        <p>
          꾸준한 노력과 책임감 있는 태도로 끊임없이 성장하며, 디자인과 개발에 대한 이해로 적극적이고
          효율적인 소통 및 협업이 가능한 일당백의 영리한 개발자가 되겠습니다!
        </p>
      </div>
      <div className="keywords">
        <ul className="keywords_wrap">
          <li>
            <span className="up">규칙</span>
            <span className="right">시너지</span>
            <span className="left">웃음</span>
            <span></span>
            <span className="bold">성장</span>
            <span className="down">유연함</span>
            <span className="bold">책임감</span>
          </li>
          <li>
            <span className="down">WEB</span>
            <span className="up">연결</span>
            <span className="bold">소통</span>
            <span className="right">개발</span>
            <span></span>
            <span className="up">긍정</span>
            <span></span>
            <span className="down">대화</span>
          </li>
          <li>
            <span className="bold">NOW</span>
            <span></span>
            <span>태도</span>
            <span>이해</span>
            <span>효율</span>
            <span className="bold">끈기</span>
            <span>무궁무진</span>
          </li>
          <li>
            <span>경험</span>
            <span>노력</span>
            <span className="bold">DEVELOPE</span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span>SMART</span>
            <span>협업</span>
          </li>
          <li>
            <span>에너지</span>
            <span>친절</span>
            <span>감각</span>
            <span>센스</span>
            <span></span>
            <span></span>
            <span>실력</span>
            <span></span>
            <span></span>
            <span className="bold">개발자</span>
          </li>
        </ul>
      </div>
    </article>
  );
}

export default About;
