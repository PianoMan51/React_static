function MyPage() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="logo.png" className="nav-logo"></img>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <div>
      <h1>I don't really know </h1>
      <ol>
        <li>Anything</li>
        <li>about</li>
        <li>this</li>
        <li>madness</li>
      </ol>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <small>2024 Wold development. All rights reserved</small>
    </footer>
  );
}

ReactDOM.render(<MyPage />, document.getElementById("root"));
