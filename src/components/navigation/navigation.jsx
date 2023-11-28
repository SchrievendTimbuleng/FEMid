const Navigation = () => {
    return (
      <>
<nav id="navigation">
  <div className="navbar navbar-default navbar-static-top" role="navigation">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span className="sr-only">Toggle navigation</span>
          <i className="fa fa-bars" />
        </button>
        <a className="navbar-brand" href="index.html">SKY</a>
      </div>
      <div className="navbar-collapse collapse">
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#home" className="current">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>{/*/.nav-collapse */}
    </div>{/*/.container */}
  </div>{/*navbar-default*/}
</nav>

      </>
    )
  }
  
  export default Navigation
  