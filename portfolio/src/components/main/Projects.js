import "../style/projects.scss";

function Projects() {
  return (
    <article className="projects" id="projects">
      <div className="title_wrap">
        <h2>Projects</h2>
        <div className="sub_title">
          <div className="btn_bg"></div>
          <div className="design">
            <a href="#" className="design_on">
              <span>W</span>eb design
            </a>
            <a href="#">
              <span>E</span>dit design
            </a>
          </div>
        </div>
      </div>
      <div className="img_wrap">
        <div className="img_swp"></div>
        <div className="img_txt">
          <div className="view">
            <h3>PLAYD</h3>
            <a href="#">
              <div className="view_bg">
                <p>
                  <span>view</span>+
                </p>
              </div>
            </a>
          </div>
          <p></p>
          <ul>
            <li>팀작업</li>
            <li>웹디자인</li>
            <li>html</li>
            <li>scss</li>
            <li>javascript</li>
          </ul>
        </div>
      </div>
    </article>
  );
}

export default Projects;
