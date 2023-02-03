import "../style/contact.scss";

function Contact() {
  return (
    <article className="contact" id="contact">
      <div className="roll">
        <div className="roll_wrap">
          <p>
            꾸준한 노력과 책임감 있는 태도로 끊임없이 성장하는 프론트엔드 개발자가 되겠습니다 꾸준한
            노력과 책임감 있는 태도로 끊임없이 성장하는 프론트엔드 개발자가 되겠습니다
          </p>
        </div>
      </div>

      <h2>Contact</h2>

      <div className="contact_btn">
        <div className="git">
          <div className="git_logo"></div>
          <a href="https://github.com/gowjdqkqh9" target="_blank">
            <p>
              <span className="bold">G</span>itHub
              <br />
              <span className="bold">G</span>itHub
            </p>
            <span className="right"></span>
          </a>
        </div>
        <div className="notion">
          <div className="notion_logo"></div>
          <a href="#">
            <p>
              <span className="bold">N</span>otion
              <br />
              <span className="bold">N</span>otion
            </p>
            <span className="right"></span>
          </a>
        </div>
      </div>

      <footer>
        <ul>
          <li>
            <a href="/">
              <span>Portfolio</span> Ma Hae Jeong
            </a>
          </li>
          <li>
            <a href="akgowjd@gmail.com">
              <span>Email</span> akgowjd@gmail.com
            </a>
          </li>
          <li>
            <a href="#">
              <span>Phone</span> 010.2713.4955
            </a>
          </li>
        </ul>
      </footer>
    </article>
  );
}

export default Contact;
