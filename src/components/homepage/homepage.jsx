
const Homepage = () => {
    return (
      <>
<div>
  <div id="home" className="carousel slide carousel-fade" data-ride="carousel">
    <div className="carousel-inner">
      <div className="item active">
        <div className="item-1" />
        <div className="carousel-caption">
          <div className="container">
            <div className="col-md-offset-2 col-md-8 col-sm-12">
              <h2>STREAM</h2>
              <p><strong><span className="green">template</span><span className="yellow">mo</span></strong>.com website provides a lot of free responsive templates for everyone. You can download, edit and apply this layout for any purpose. Please tell your friends about our website. Thank you.</p>
              <a href="#" className="button default">Details</a>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="item-2" />
        <div className="carousel-caption">
          <div className="container">
            <div className="col-md-offset-2 col-md-8 col-sm-12">
              <h2>Responsive Design</h2>
              <p>Credit goes to <a rel="nofollow" href="http://unsplash.com"><span className="yellow">Unsplash</span></a> for images used in this template. Vivamus sed mauris ut libero tristique ultricies. Suspendisse sagittis eget augue vel condimentum. Sed malesuada tortor venenatis enim blandit interdum.</p>
              <a href="#" className="button default">Read More</a>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="item-3" />
        <div className="carousel-caption">
          <div className="container">
            <div className="col-md-offset-2 col-md-8 col-sm-12">
              <h2>Mobile Ready</h2>
              <p>Donec malesuada pellentesque cursus. In vestibulum metus sit amet est elementum, et malesuada mi consequat. Sed ultricies lectus sit amet venenatis condimentum. Morbi hendrerit posuere enim at aliquet.</p>
              <a href="#" className="button default">Let's talk</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* SLIDER OPTIONS */}
    <div className="slider-options">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-4 col-xs-4 slider-nav">
            {/* Controls */}
            <a className="left carousel-control" href="#home" role="button" data-slide="prev">
              <span className="fa fa-angle-left" />
            </a>
            <a className="right carousel-control" href="#home" role="button" data-slide="next">
              <span className="fa fa-angle-right" />
            </a>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-4">
            {/* Indicators */}
            <ol className="carousel-indicators">
              <li data-target="#home" data-slide-to={0} className="active" />
              <li data-target="#home" data-slide-to={1} />
              <li data-target="#home" data-slide-to={2} />
            </ol>
          </div>
          <div className="col-md-4 col-sm-4 text-right col-xs-4">
            <a href="#" id="scroll-to-content" className="go-down"><i className="fa fa-angle-down" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <nav id="navigation">
    <div className="navbar navbar-default navbar-static-top" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="sr-only">Toggle navigation</span>
            <i className="fa fa-bars" />
          </button>
          <a className="navbar-brand" href="index.html">Stream</a>
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
  </nav>{/*navigation section end here*/}
  <section id="about" className="page-section first-section">
    <div className="container">
      <div className="row page-heading">
        <div className="col-md-8 col-sm-8">
          <h3 className="page-title">About Me</h3>
          <p className="page-subtitle">LEARN MORE ABOUT ME AND MY EXPERIENCE</p>
        </div>
        <div className="col-md-4 col-sm-4 hidden-xs page-icon-holder">
          <p className="page-icon"><i className="fa fa-user" /></p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="profile-image">
            <img src="public/img/9.jpg" alt />
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="profile-content">
            <h4>Linda Perry</h4>
            <span>Web Designer</span>
            <p>Pellentesque elementum, lacus sit amet hendrerit posuere, quam quam tristique nisi, nec ornare ligula magna id nisl. Donec blandit enim ac semper facilisis. Curabitur eu laoreet mauris, eget fermentum velit.</p>
            <ul className="social-icons">
              <li><a href="#" className="fa fa-facebook" /></li>
              <li><a href="#" className="fa fa-twitter" /></li>
              <li><a href="#" className="fa fa-linkedin" /></li>
              <li><a href="#" className="fa fa-rss" /></li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 col-xs-12">
          <div className="my-skills">
            <h4>My Skills</h4>
            <p>Etiam ac nisi sed velit tempor facilisis. Aenean pellentesque mollis metus, non tincidunt odio maximus nec. Praesent felis ex, elementum sed lobortis.</p>
            <ul className="progess-bars">
              <li>
                <span>ANIMATIONS 85%</span>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{width: '85%'}} />
                </div>
              </li>
              <li>
                <span>PHOTOSHOP 95%</span>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} style={{width: '95%'}} />
                </div>
              </li>
              <li>
                <span>MARKETING 40%</span>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}} />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="gallery" className="page-section">
    <div className="container">
      <div className="row page-heading">
        <div className="col-md-8 col-sm-8">
          <h3 className="page-title">My Gallery</h3>
          <p className="page-subtitle">CHECK SOME OF MY LAST PROJECTS</p>
        </div>
        <div className="col-md-4 col-sm-4 hidden-xs text-right">
          <p className="page-icon"><i className="fa fa-camera" /></p>
        </div>
      </div>
      <div className="row">
        <div className="gallery-holder">
          <div className="col-md-3 col-sm-6 col-xs-12 gallery-item">
            <div className="gallery-thumb">
              <img src="img/1.jpg" alt />
              <div className="hover">
                <a href="#" className="fa fa-plus" />
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 gallery-item">
            <div className="gallery-thumb">
              <img src="img/2.jpg" alt />
              <div className="hover">
                <a href="#" className="fa fa-plus" />
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 gallery-item">
            <div className="gallery-thumb">
              <img src="img/3.jpg" alt />
              <div className="hover">
                <a href="#" className="fa fa-plus" />
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 gallery-item">
            <div className="gallery-thumb">
              <img src="img/4.jpg" alt />
              <div className="hover">
                <a href="#" className="fa fa-plus" />
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 gallery-item">
            <div className="gallery-thumb">
              <img src="img/5.jpg" alt />
              <div className="hover">
                <a href="#" className="fa fa-plus" />
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 gallery-item">
            <div className="gallery-thumb">
              <img src="img/6.jpg" alt />
              <div className="hover">
                <a href="#" className="fa fa-plus" />
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 gallery-item">
            <div className="gallery-thumb">
              <img src="img/7.jpg" alt />
              <div className="hover">
                <a href="#" className="fa fa-plus" />
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 gallery-item">
            <div className="gallery-thumb">
              <img src="img/8.jpg" alt />
              <div className="hover">
                <a href="#" className="fa fa-plus" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="contact" className="page-section">
    <div className="container">
      <div className="row page-heading">
        <div className="col-md-8 col-sm-8">
          <h3 className="page-title">Contact Me</h3>
          <p className="page-subtitle">FEEL FREE TO SEND A MESSAGE</p>
        </div>
        <div className="col-md-4 col-sm-4 hidden-xs text-right">
          <p className="page-icon"><i className="fa fa-envelope" /></p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-9 col-sm-12">
          <div className="row">
            <form action="#" method="post" className="contact-form">
              <fieldset className="col-md-4 col-sm-6 col-xs-12">
                <input type="text" id="name" placeholder="Name..." />
              </fieldset>
              <fieldset className="col-md-4 col-sm-6 col-xs-12">
                <input type="email" id="email" placeholder="Email..." />
              </fieldset>
              <fieldset className="col-md-4 col-sm-12 col-xs-12">
                <input type="text" id="subject" placeholder="Subject..." />
              </fieldset>
              <fieldset className="col-md-12 col-sm-12 col-xs-12">
                <textarea name="message" id="message" cols={30} rows={6} placeholder="Message..." defaultValue={""} />
              </fieldset>
              <fieldset className="col-md-12 col-sm-12 col-xs-12">
                <input type="submit" className="button default" defaultValue="Send Message" />
              </fieldset>
            </form>
          </div>
        </div>
        <div className="col-md-3 col-sm-12">
          <div className="contact-info">
            <h4>Contact Information</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius aliquam diam, ac cursus enim. Ut interdum leo mattis varius pulvinar.</p>
            <ul className="social-icons">
              <li><a href="#" className="fa fa-facebook" /></li>
              <li><a href="#" className="fa fa-twitter" /></li>
              <li><a href="#" className="fa fa-linkedin" /></li>
              <li><a href="#" className="fa fa-rss" /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer className="site-footer">
    <div className="container">
      <div className="text-center">
        <a href="#" className="go-top"><i className="fa fa-angle-up" /></a>
        <p className="copyright-text">Copyright © 2084 Company Name</p>
      </div>
    </div>
  </footer>
</div>

      </>
    )
  }
  
  export default Homepage
  