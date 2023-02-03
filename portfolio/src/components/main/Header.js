import "../style/header.scss";

function Header() {
  // const toggleBtn = document.querySelector(".toggleBtn");
  // const gnbBtn = document.querySelector(".header");
  // const cancel = document.querySelector(".cancel");

  // toggleBtn.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   gnbBtn.classList.toggle("active");
  // });
  // cancel.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   gnbBtn.classList.remove("active");
  // });

  // const gnb = document.querySelector(".header");
  // const toggleBtn = document.querySelector("#toggle_btn");

  // toggleBtn.addEventListener("click", (e) => {
  //   e.preventDefault();
  // gnb.classList.replace("header", "active");
  //   gnb.classList.toggle("active");
  // });

  return (
    <header className="header">
      <div className="header_container">
        <div className="gnb">
          <h1 className="logo">
            <a href="/"></a>
          </h1>
          <ul>
            <li className="color_mode_btn">
              <a href="#"></a>
            </li>
            <li className="menu_btn" id="toggle_btn">
              <a href="#">
                <span className="bar1"></span>
                <span className="bar2"></span>
                <span className="short"></span>
              </a>
            </li>
          </ul>
        </div>

        <div className="contact_btn">
          <a href="#"></a>
        </div>
      </div>

      <div className="menu_gnb">
        <ul className="main_menu">
          <li>
            <a href="#">About Me</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <ul className="contact_menu">
          <li className="contact_git">
            <a href="#">GitHub</a>
            <span></span>
          </li>
          <li className="contact_notion">
            <a href="#">Notion</a>
            <span></span>
          </li>
        </ul>
        <div className="bg_border">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
