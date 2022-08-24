import './navBar.css';
function navBar() {
  return (
    <body>
      <div className="navBar">
      <img class="logo" src={require("./assests/Beta_Chi_Theta_crest.png")} alt="logo"/>
        <span class="name">&#914;&#935;&#920;</span>
        <nav class="nav_bar">
            <ul class="Pages">
                <li><a href="contact.html">Contact</a></li>
                <li><a href="calendar.html">Calendar</a></li>
                <li><a href="about_us.html">About Us</a></li>
                <li><a href="index.html">Home</a></li>
            </ul>
       </nav>
    </div>
    </body>
  );
}

export default navBar;


