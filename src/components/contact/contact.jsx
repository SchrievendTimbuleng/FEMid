const Contact = () => {
    return (
      <>
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
          <p>Call me anytime except on the Sabbath</p>
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

      </>
    )
  }
  
  export default Contact
  