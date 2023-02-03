import "../style/main.scss";

function Main() {
  return (
    <main className="main">
      <ul className="title">
        <li>
          <h3>변화의 시작이 될</h3>
        </li>
        <li>
          <h2>
            <span className="bold">F</span>RONT-END
          </h2>
          <h3>개발자</h3>
        </li>
        <li>
          <h2>
            <span className="bold">M</span>A HAE JEONG
          </h2>
          <h3>입니다</h3>
        </li>
      </ul>
      <ul className="title_mobile">
        <li>
          <h3>변화의 시작이 될</h3>
        </li>
        <li>
          <h2>
            <span className="bold">F</span>RONT-
            <br />
            END
          </h2>
          <h3>개발자</h3>
        </li>
        <li>
          <h2>
            <span className="bold">M</span>A<br /> HAE
            <br /> JEONG
          </h2>
          <h3>입니다</h3>
        </li>
      </ul>
    </main>
  );
}

export default Main;
