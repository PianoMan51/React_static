// function Navbar() {
//     return (
//         <nav className="navbar">
//             <span>Navbar</span>
//             <div className="menu">
//                 <div className="line"></div>
//                 <div className="line"></div>
//                 <div className="line"></div>
//             </div>
//         </nav>)
// }

// function MainContent() {
//     return (
//         <h1>Hello everyone!</h1>
//     )
// }

// ReactDOM.render(<div>
//     <Navbar />
//     <MainContent />

// </div>, document.getElementById("root"))

// let h1 = document.createElement("h1");
// h1.innerText = "Hello world";
// h1.className = "header";

// let page = (
//   <div>
//     <h1 className="header">This is JSX</h1>
//     <p>paragraph</p>
//   </div>
// );

let content = (
  <div className="content">
    <div className="banner"></div>

    <div className="section">
      <div className="navMenu">
        <h1>Google</h1>
        <ul>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="page">
        <p>This is a lot of text</p>
        <input placeholder="hej"></input>
        <button>Click me</button>
      </div>
    </div>
  </div>
);

ReactDOM.render(content, document.getElementById("root"));
