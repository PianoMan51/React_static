let content = (
  <div>
    <img className="logo" src="logo.png" height="50px"></img>
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K start on Github</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprice apps, including mobile apps</li>
    </ul>
  </div>
);

ReactDOM.render(content, document.getElementById("root"));
