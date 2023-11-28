const Gallery = () => {
    return (
      <>
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

     </>
    )
  }
  
  export default Gallery
  