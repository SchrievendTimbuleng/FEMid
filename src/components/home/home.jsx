const Home = () => {
    return (
      <>
<div id="home" className="carousel slide carousel-fade" data-ride="carousel">
  <div className="carousel-inner">
    <div className="item active">
      <div className="item-1" />
      <div className="carousel-caption">
        <div className="container">
          <div className="col-md-offset-2 col-md-8 col-sm-12">
            <h2>SKY</h2>
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

      </>
    )
  }
  
  export default Home
  