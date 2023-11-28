const About = () => {
    return (
      <>
 <section id="about" className="page-section first-section">
  <div className="container">
    <div className="row page-heading">
      <div className="col-md-8 col-sm-8">
        <h3 className="page-title">About SKY</h3>
        <p className="page-subtitle">LEARN MORE ABOUT ME AND MY EXPERIENCE</p>
      </div>
      <div className="col-md-4 col-sm-4 hidden-xs page-icon-holder">
        <p className="page-icon"><i className="fa fa-user" /></p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="profile-image">
          <img src="img/9.jpg" alt />
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="profile-content">
          <h4>Timbuleng Schrievend</h4>
          <span>Graphic Designer</span>
          <p>I am a graphic designer who has started my career in the last 4 years and has completed various assignments in the field of graphic design</p>
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
          <p>Please see what you can count on from me</p>
          <ul className="progess-bars">
            <li>
              <span>Cinematoraphy 85%</span>
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


      </>
    )
  }
  
  export default About
  